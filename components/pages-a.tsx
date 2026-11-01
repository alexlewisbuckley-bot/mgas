// Shared primitives for /commercial, /emergency and /about.
import Link from "next/link";
import { IconTick } from "./icons";

/* ---------- breadcrumb ---------- */

export function Breadcrumb({ trail, current }: { trail: [string, string][]; current: string }) {
  return (
    <p className="text-[12.5px] font-medium text-body">
      {trail.map(([label, href]) => (
        <span key={href}>
          <Link href={href} className="hover:text-brand">
            {label}
          </Link>
          <span className="mx-2 text-[#b9cbe0]">/</span>
        </span>
      ))}
      <span className="font-bold text-brand">{current}</span>
    </p>
  );
}

/* ---------- numbered step (big brand number, title, body) ---------- */

export function NumberedStep({
  n,
  title,
  body,
  size = "lg",
  inline = false,
}: {
  n: string;
  title: string;
  body: string;
  /** lg = 34px number (commercial), md = 26px number (about) */
  size?: "lg" | "md";
  /** inline = number sits to the left of the text (emergency) */
  inline?: boolean;
}) {
  const num = (
    <span
      className={`font-display font-semibold leading-none text-brand ${
        size === "lg" ? "text-[34px]" : "text-[26px]"
      }`}
    >
      {n}
    </span>
  );
  if (inline) {
    return (
      <div className="flex items-start gap-5">
        <span className="font-display text-[30px] font-semibold leading-none text-brand">{n}</span>
        <div className="pt-1.5">
          <h3 className="text-[16px] font-bold text-ink">{title}</h3>
          <p className="mt-2 max-w-[320px] text-[13.5px] leading-[1.5] text-body">{body}</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      {num}
      <h3 className={`font-bold text-ink ${size === "lg" ? "mt-4 text-[16.5px]" : "mt-5 text-[15.5px]"}`}>
        {title}
      </h3>
      <p className={`mt-2 max-w-[340px] leading-[1.52] text-body ${size === "lg" ? "text-[13.5px]" : "text-[13px]"}`}>
        {body}
      </p>
    </div>
  );
}

/* ---------- white card with green tick, title and body ---------- */

export function TickCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="flex items-center gap-3">
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-ok text-white">
          <IconTick className="h-3 w-3" strokeWidth={2.5} />
        </span>
        <h3 className="text-[16.5px] font-bold text-ink">{title}</h3>
      </div>
      <p className="mt-4 text-[13.5px] leading-[1.52] text-body">{body}</p>
    </div>
  );
}

/* ---------- warn bullet (emergency "when to call" list) ---------- */

export function WarnBullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-warn" />
      <span className="text-[15.5px] font-medium text-ink">{children}</span>
    </div>
  );
}

/* ---------- accreditation logo slot (light surface) ---------- */

export function LogoSlotLight({ size = 52 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full border border-dashed border-[#b9cbe0] bg-[#eaf1f8] text-[7.5px] font-bold tracking-[0.14em] text-faint"
      style={{ width: size, height: size }}
      aria-hidden
    >
      LOGO
    </span>
  );
}

export function AccreditationCard({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="flex items-center gap-[18px] rounded-2xl border border-line bg-white p-[22px] shadow-card">
      <LogoSlotLight />
      <div>
        <h3 className="text-[15.5px] font-bold text-ink">{name}</h3>
        <p className="mt-1 text-[12.5px] text-body">{sub}</p>
      </div>
    </div>
  );
}
