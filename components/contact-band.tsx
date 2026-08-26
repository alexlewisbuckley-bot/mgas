"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { site, services } from "@/lib/site";
import { IconArrow, IconClock, IconMail, IconPhone, IconWhatsApp } from "./icons";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold text-ink">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-[10px] border border-[#dce5ef] bg-ground px-4 py-3 text-sm text-ink outline-none transition placeholder:text-faint focus:border-brand focus:ring-2 focus:ring-brand/20";

export function CallbackForm({ defaultService }: { defaultService?: string }) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  return (
    <form
      className="rounded-3xl bg-white p-8 shadow-card-lg lg:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        // TODO: post to /api/enquiry (email/CRM integration)
        setTimeout(() => router.push("/thank-you"), 600);
      }}
    >
      <h3 className="font-display text-xl font-semibold text-ink">Request a callback</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input required name="name" placeholder="Your name" className={inputCls} />
        </Field>
        <Field label="Phone">
          <input required name="phone" type="tel" placeholder="Mobile number" className={inputCls} />
        </Field>
        <Field label="Postcode">
          <input name="postcode" placeholder="e.g. WN1 1AA" className={inputCls} />
        </Field>
        <Field label="What do you need?">
          <select name="service" defaultValue={defaultService ?? services[0].title} className={inputCls}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Emergency / something else</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea name="message" rows={3} placeholder="Tell us a little about the job…" className={inputCls} />
        </Field>
      </div>
      <button
        disabled={sending}
        className="btn-gradient group mt-6 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl text-[14.5px] font-bold text-white shadow-btn transition hover:brightness-110 disabled:opacity-60"
      >
        {sending ? "Sending…" : "Request a callback"}
        <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>
      <p className="mt-4 text-center text-[11.5px] text-faint">
        We’ll only use your details to reply to this enquiry — nothing else.
      </p>
    </form>
  );
}

const rows = [
  { icon: IconPhone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: IconWhatsApp, label: "WhatsApp", value: "Message us — replies in minutes", href: site.whatsappHref },
  { icon: IconMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: IconClock, label: "Opening hours", value: site.hours },
];

export function ContactBand({ defaultService }: { defaultService?: string }) {
  return (
    <section className="navy-panel relative overflow-hidden py-16 text-white lg:py-20">
      <div
        className="pointer-events-none absolute -left-52 -top-40 h-[520px] w-[800px] rounded-full opacity-20 blur-[170px]"
        style={{ background: "var(--brand)" }}
      />
      <div className="relative mx-auto grid max-w-[1440px] items-start gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-12">
        <div>
          <p className="text-[13px] font-bold tracking-[0.18em] text-[#7fb2ef]">CONTACT US</p>
          <h2 className="mt-4 font-display text-[30px] font-semibold leading-tight tracking-[-0.01em] lg:text-[34px]">
            Tell us what you need —<br />we’ll take it from there.
          </h2>
          <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-mut">
            Call, message or send the form — a real person replies, not a call centre.
          </p>
          <div className="mt-10 space-y-7">
            {rows.map((r) => {
              const Icon = r.icon;
              const inner = (
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <Icon className={`h-5.5 w-5.5 ${r.label === "WhatsApp" ? "text-[#7ceba8]" : ""}`} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium tracking-[0.1em] text-[#7fa3ce]">
                      {r.label.toUpperCase()}
                    </span>
                    <span className="mt-0.5 block text-base font-bold">{r.value}</span>
                  </span>
                </div>
              );
              return r.href ? (
                <a key={r.label} href={r.href} className="block transition hover:translate-x-1">
                  {inner}
                </a>
              ) : (
                <div key={r.label}>{inner}</div>
              );
            })}
          </div>
        </div>
        <CallbackForm defaultService={defaultService} />
      </div>
    </section>
  );
}
