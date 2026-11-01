import { NextResponse } from "next/server";
import { site } from "@/lib/site";

// POST /api/enquiry — receives the callback form (components/contact-band.tsx).
// Validates name + phone, logs server-side, and emails via Resend when configured:
//   RESEND_API_KEY  — Resend API key
//   ENQUIRY_TO      — inbox that receives enquiries (comma-separated for several)
//   ENQUIRY_FROM    — optional verified sender, e.g. "MGAS Website <enquiries@mgas-plumbing.co.uk>"
// Without the env vars the enquiry is still accepted and logged, so the form works in preview.

export const runtime = "nodejs";

type Enquiry = {
  name: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
};

const MAX = { name: 120, phone: 40, postcode: 12, service: 80, message: 3000 } as const;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";
}

// UK numbers: digits with optional spaces/dashes/brackets, optional +44. 10–13 digits once stripped.
function validPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return /^[+\d][\d\s().-]{8,}$/.test(phone) && digits.length >= 10 && digits.length <= 13;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

async function readBody(req: Request): Promise<Record<string, unknown>> {
  const type = req.headers.get("content-type") ?? "";
  if (type.includes("application/json")) return (await req.json()) as Record<string, unknown>;
  const form = await req.formData();
  return Object.fromEntries(form.entries());
}

async function sendEmail(e: Enquiry, receivedAt: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  if (!apiKey || !to) return { sent: false as const, reason: "email not configured" };

  const from = process.env.ENQUIRY_FROM ?? `${site.name} <onboarding@resend.dev>`;
  const rows: Array<[string, string]> = [
    ["Name", e.name],
    ["Phone", e.phone],
    ["Postcode", e.postcode || "—"],
    ["Service", e.service || "—"],
    ["Message", e.message || "—"],
    ["Received", receivedAt],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<table style="font:14px/1.5 sans-serif;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5b7089;vertical-align:top"><b>${k}</b></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      subject: `Website enquiry — ${e.name} (${e.service || "general"})`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
  return { sent: true as const };
}

export async function POST(req: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await readBody(req);
  } catch {
    return NextResponse.json({ ok: false, error: "Could not read the form." }, { status: 400 });
  }

  // Honeypot: the form can add a hidden "website" field; bots fill it, people don't.
  if (clean(raw.website, 200)) return NextResponse.json({ ok: true });

  const enquiry: Enquiry = {
    name: clean(raw.name, MAX.name),
    phone: clean(raw.phone, MAX.phone),
    postcode: clean(raw.postcode, MAX.postcode).toUpperCase(),
    service: clean(raw.service, MAX.service),
    message: typeof raw.message === "string" ? raw.message.trim().slice(0, MAX.message) : "",
  };

  const errors: Partial<Record<keyof Enquiry, string>> = {};
  if (enquiry.name.length < 2) errors.name = "Please enter your name.";
  if (!validPhone(enquiry.phone)) errors.phone = "Please enter a valid phone number.";
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const receivedAt = new Date().toISOString();
  console.info("[enquiry]", JSON.stringify({ receivedAt, ...enquiry }));

  try {
    const result = await sendEmail(enquiry, receivedAt);
    if (!result.sent) console.warn("[enquiry] not emailed:", result.reason);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] email failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn’t send your request just now. Please call us instead." },
      { status: 502 },
    );
  }
}
