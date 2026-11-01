// Shared primitives for the /areas and /reviews pages.
import Link from "next/link";
import { IconPin, Stars, TpStar } from "./icons";

/* ---------- breadcrumb + page title ---------- */

export function Breadcrumb({ trail, current }: { trail?: [string, string][]; current: string }) {
  return (
    <p className="text-[12.5px] font-medium text-body">
      <Link href="/" className="hover:text-brand">
        Home
      </Link>
      {trail?.map(([label, href]) => (
        <span key={href}>
          <span className="mx-2 text-[#b9cbe0]">/</span>
          <Link href={href} className="hover:text-brand">
            {label}
          </Link>
        </span>
      ))}
      <span className="mx-2 text-[#b9cbe0]">/</span>
      <span className="font-bold text-brand">{current}</span>
    </p>
  );
}

export function PageTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <>
      <h1 className="mt-6 font-display text-[36px] font-semibold tracking-[-0.02em] text-ink lg:text-[40px]">
        {title}
      </h1>
      {sub && <p className="mt-5 max-w-3xl text-[15.5px] leading-[1.6] text-body">{sub}</p>}
    </>
  );
}

/* ---------- town chip (plain, not a link) ---------- */

export function TownChip({ name, note }: { name: string; note?: string }) {
  return (
    <div className="flex h-16 items-center justify-between rounded-[14px] border border-line bg-white px-[22px]">
      <span className="text-[15px] font-bold text-ink">
        {name}
        {note && <span className="font-medium text-body"> — {note}</span>}
      </span>
      <IconPin className="h-4 w-4 text-faint" />
    </div>
  );
}

/* ---------- review bits ---------- */

export function RatingRow({ reviewHref }: { reviewHref?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <span className="font-display text-[26px] font-semibold tracking-[-0.015em] text-ink">Excellent</span>
      <Stars size={26} gap={6} />
      <span className="text-[15px] font-medium text-body">
        5.0 out of 5 &nbsp;·&nbsp; based on 11 reviews on
      </span>
      <span className="-ml-3 flex items-center gap-1.5 text-[15px] font-bold text-ink">
        <TpStar size={20} /> Google
      </span>
      {reviewHref && (
        <a
          href={reviewHref}
          className="ml-auto text-[14.5px] font-semibold text-brand hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Review us on Google
        </a>
      )}
    </div>
  );
}

export function ReviewCard({
  title,
  body,
  name,
  when,
}: {
  title: string;
  body: string;
  name: string;
  when: string;
}) {
  return (
    <div className="flex flex-col rounded-[18px] border border-line bg-white p-[26px] shadow-card">
      <div className="flex items-center justify-between">
        <Stars size={15} gap={4} />
        <span className="text-xs text-faint">{when}</span>
      </div>
      <h3 className="mt-5 text-[15px] font-bold text-ink">{title}</h3>
      <p className="mt-2 text-[13px] leading-[1.5] text-body">{body}</p>
      <p className="mt-auto pt-6 text-xs font-medium text-ink">{name}</p>
    </div>
  );
}
