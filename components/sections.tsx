"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, services, reviews, towns } from "@/lib/site";
import {
  IconArrow,
  IconChevronDown,
  IconChevronRight,
  IconTick,
  Stars,
  TpStar,
  serviceIcons,
} from "./icons";

/* ---------- shared bits ---------- */

export function SectionHeader({
  eyebrow,
  title,
  right,
  sub,
}: {
  eyebrow: string;
  title: string;
  right?: { label: string; href: string };
  sub?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-[30px] font-semibold tracking-[-0.02em] text-ink lg:text-[34px]">
          {title}
        </h2>
        {sub && <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-body">{sub}</p>}
      </div>
      {right && (
        <Link
          href={right.href}
          className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-brand sm:flex"
        >
          {right.label}
          <IconChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}

export function Tick({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-ok text-white">
        <IconTick className="h-3 w-3" strokeWidth={2.5} />
      </span>
      <span className="text-[15px] font-medium text-ink">{children}</span>
    </div>
  );
}

export function PhotoPlaceholder({
  label,
  spec,
  className = "",
}: {
  label: string;
  spec?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#b9cbe0] bg-[#eaf1f8] p-6 text-center ${className}`}
    >
      <svg viewBox="0 0 34 28" className="h-8 w-9 text-[#9fb4cc]" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="1.5" y="1.5" width="31" height="25" rx="4" />
        <circle cx="11" cy="10" r="3" />
        <path d="M4 23L13 15L19 20L25 14L30 18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="mt-3 text-[10px] font-bold tracking-[0.16em] text-faint">{label}</p>
      {spec && <p className="mt-2 max-w-[280px] text-[11.5px] leading-snug text-body">{spec}</p>}
    </div>
  );
}

/* ---------- hero ---------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden navy-panel text-white">
      <div
        className="pointer-events-none absolute -left-40 -top-24 h-[520px] w-[680px] rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--brand)" }}
      />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-12 lg:py-20">
        <div className="relative z-10">
          <h1 className="font-display text-[38px] font-semibold leading-[1.16] tracking-[-0.02em] sm:text-[47px]">
            Trusted gas &amp; heating
            <br />
            across the North West.
          </h1>
          <p className="mt-6 max-w-md text-[16.5px] text-mut">
            Installations, servicing and repairs for homes and landlords.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="group flex h-[54px] items-center gap-3 rounded-xl bg-white px-6 text-[15px] font-bold text-ink shadow-card-lg transition hover:-translate-y-0.5"
            >
              Book an engineer
              <IconArrow className="h-4.5 w-4.5 text-brand transition group-hover:translate-x-1" />
            </Link>
            <a href={site.phoneHref} className="text-[15px] font-bold text-mut transition hover:text-white">
              or call <span className="text-white">{site.phone}</span>
            </a>
          </div>
        </div>
        <PhotoPlaceholder
          label="PHOTO · TEAM WITH VANS"
          spec="Crew shot graded into brand navy — see Figma hero (node 163:21)"
          className="min-h-[280px] border-white/25 bg-white/5 text-white lg:min-h-[380px]"
        />
      </div>
    </section>
  );
}

/* ---------- quick tiles ---------- */

export function QuickTiles() {
  const four = services.slice(0, 4);
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-[1440px] px-6 lg:px-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {four.map((s) => {
          const Icon = serviceIcons[s.icon];
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eff4fa] text-brand">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <span className="text-[15px] font-bold text-ink">{s.nav === "Gas Safety" ? "Gas Safety (CP12)" : s.title.split(" & ")[0]}</span>
              <IconChevronRight className="ml-auto h-4 w-4 text-faint transition group-hover:translate-x-0.5 group-hover:text-brand" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- trustpilot strip ---------- */

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-8 lg:px-12">
        <span className="font-display text-[19px] font-semibold text-ink">Excellent</span>
        <Stars size={22} gap={5} />
        <span className="text-sm text-body">
          4.9 out of 5 based on 312 reviews {/* TODO: live Trustpilot data */}
        </span>
        <span className="flex items-center gap-2 font-bold text-ink">
          <TpStar size={18} /> Trustpilot
        </span>
        <div className="ml-auto hidden gap-10 xl:flex">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.name} className="max-w-[210px]">
              <p className="text-[13.5px] font-bold text-[#22364e]">“{r.title}”</p>
              <p className="mt-1 text-xs text-faint">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- services grid ---------- */

export function ServicesSection() {
  const four = services.slice(0, 4).map((s, i) => ({
    ...s,
    // homepage shows the 4 key services, incl. commercial
    ...(i === 3 ? services[2] : {}),
  }));
  const shown = [services[0], services[1], services[3], services[2]];
  return (
    <section className="bg-ground py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHeader eyebrow="Our services" title="What we do" right={{ label: "View all services", href: "/services" }} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"
              >
                <PhotoPlaceholder label="PHOTO · 4:3" className="h-40 rounded-xl" />
                <span className="-mt-6 ml-3 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-ice-chip text-brand">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 px-2 text-[17px] font-bold text-ink">{s.title}</h3>
                <p className="mt-2 px-2 text-[13.5px] leading-relaxed text-body">{s.short}</p>
                <span className="mt-auto flex items-center gap-2 border-t border-line-soft px-2 pb-1 pt-4 text-sm font-semibold text-brand">
                  Learn more
                  <IconChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- areas + map ---------- */

const townPts: Record<string, [number, number, string]> = {
  Preston: [340, 92, "above"],
  Chorley: [318, 158, "left"],
  Bolton: [438, 148, "right"],
  Salford: [478, 272, "right"],
  Manchester: [528, 318, "right"],
  Leigh: [404, 296, "below"],
  Warrington: [372, 382, "below"],
  "St Helens": [262, 318, "left"],
  Skelmersdale: [238, 254, "left"],
};

export function MapCard({ className = "" }: { className?: string }) {
  return (
    <div className={`navy-panel relative overflow-hidden rounded-3xl border border-white/10 ${className}`}>
      <svg viewBox="0 0 692 500" className="block w-full">
        {/* sea + coast */}
        <path
          d="M330 0C300 28 262 40 250 72 242 92 226 96 216 106 232 122 246 128 244 142 240 158 222 162 216 176 204 198 196 210 196 226 198 248 208 266 212 282 226 296 250 306 248 320 234 330 220 336 216 346 198 360 182 372 176 392 180 408 186 420 184 432 172 452 158 474 150 500 L0 500 0 0 Z"
          fill="rgba(0,0,0,0.22)"
        />
        <path
          d="M330 0C300 28 262 40 250 72 242 92 226 96 216 106 232 122 246 128 244 142 240 158 222 162 216 176 204 198 196 210 196 226 198 248 208 266 212 282 226 296 250 306 248 320 234 330 220 336 216 346 198 360 182 372 176 392 180 408 186 420 184 432 172 452 158 474 150 500"
          fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5}
        />
        {/* motorways */}
        <path d="M372 0C366 90 358 170 364 250 370 330 380 410 384 500" fill="none" stroke="#4a7bc4" strokeOpacity={0.5} strokeWidth={2.4} />
        <path d="M120 348C220 322 320 306 420 300 500 296 590 300 660 308" fill="none" stroke="#4a7bc4" strokeOpacity={0.5} strokeWidth={2.4} />
        <g fontFamily="var(--font-instrument)" fontSize="9" fontWeight="700" fill="#fff">
          <rect x="372" y="88" width="28" height="16" rx="4" fill="#2e64b0" stroke="rgba(255,255,255,0.35)" />
          <text x="386" y="99" textAnchor="middle">M6</text>
          <rect x="543" y="278" width="34" height="16" rx="4" fill="#2e64b0" stroke="rgba(255,255,255,0.35)" />
          <text x="560" y="289" textAnchor="middle">M62</text>
        </g>
        {/* rings */}
        {[70, 130, 190, 250].map((r, i) => (
          <circle key={r} cx={346} cy={250} r={r} fill="none" stroke="#fff" strokeOpacity={0.07 - i * 0.012} strokeWidth={1.2} />
        ))}
        {/* towns */}
        {Object.entries(townPts).map(([name, [x, y, side]]) => (
          <g key={name}>
            <circle cx={x} cy={y} r={9} fill="#43a0f0" fillOpacity={0.16} />
            <circle cx={x} cy={y} r={4} fill="#43a0f0" />
            <text
              x={side === "right" ? x + 12 : side === "left" ? x - 12 : x}
              y={side === "above" ? y - 14 : side === "below" ? y + 20 : y + 4}
              textAnchor={side === "right" ? "start" : side === "left" ? "end" : "middle"}
              fontSize="11.5" fill="#afc2d8" fontFamily="var(--font-instrument)" fontWeight={500}
            >
              {name}
            </text>
          </g>
        ))}
        {/* HQ pin */}
        <circle cx={346} cy={250} r={17} fill="none" stroke="#1d6ed0" strokeOpacity={0.5} strokeWidth={1.6} />
        <circle cx={346} cy={250} r={8} fill="#1d6ed0" stroke="#fff" strokeWidth={3} />
        <g>
          <rect x={316} y={202} width={60} height={26} rx={13} fill="#fff" />
          <text x={346} y={219} textAnchor="middle" fontSize="12" fontWeight={700} fill="#0a1729" fontFamily="var(--font-instrument)">
            MGAS
          </text>
        </g>
      </svg>
      <p className="px-6 pb-5 text-[12.5px] text-mut">
        Our engineers cover the towns above and everywhere in between.
      </p>
    </div>
  );
}

export function AreasSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 lg:grid-cols-[1fr_1.15fr] lg:px-12">
        <div>
          <SectionHeader eyebrow="Areas we cover" title="North West England, based in Wigan." />
          <p className="mt-5 text-[15.5px] text-body">
            Engineers out across the region every day, from our Wigan base.
          </p>
          <div className="mt-8 flex max-w-[600px] flex-wrap gap-3">
            {towns.map((t, i) => (
              <Link
                key={t}
                href="/areas"
                className={
                  i === 0
                    ? "rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
                    : "rounded-full border border-[#dce5ef] bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
                }
              >
                {t}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-[14.5px] text-body">
            Don’t see your area?{" "}
            <a href={site.phoneHref} className="font-bold text-brand hover:underline">
              Call {site.phone}
            </a>
          </p>
        </div>
        <MapCard />
      </div>
    </section>
  );
}

/* ---------- CTA slider ---------- */

const slides = [
  {
    eyebrow: "Pre-purchase plumbing surveys",
    title: "Buying a house? Survey the plumbing before you sign.",
    body: "Standard homebuyer reports don’t test what’s behind the walls — pipework, boiler health or drainage. Our dedicated survey covers exactly what they miss.",
    cta: "Book a survey",
    secondary: "What’s covered",
  },
  {
    eyebrow: "Plumbing & heating",
    title: "One team for every plumbing and heating job.",
    body: "From dripping taps and bathrooms to full heating systems — domestic and commercial, all handled in-house by our own engineers.",
    cta: "Book an engineer",
    secondary: "See all services",
  },
];

export function CtaSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused]);
  const s = slides[i];
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-12 lg:pb-20">
      <div
        className="navy-panel relative overflow-hidden rounded-3xl border border-white/10 px-8 py-12 text-white shadow-card-lg lg:px-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="max-w-2xl">
          <p className="text-[12.5px] font-bold tracking-[0.18em] text-[#7fb2ef]">{s.eyebrow.toUpperCase()}</p>
          <h2 className="mt-4 font-display text-[26px] font-semibold leading-tight tracking-[-0.01em] lg:text-[30px]">
            {s.title}
          </h2>
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-mut">{s.body}</p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/contact"
              className="group flex h-12 items-center gap-3 rounded-xl bg-white px-6 text-sm font-bold text-ink transition hover:-translate-y-0.5"
            >
              {s.cta}
              <IconArrow className="h-4 w-4 text-brand transition group-hover:translate-x-0.5" />
            </Link>
            <Link href="/services" className="text-sm font-semibold text-white/75 transition hover:text-white">
              {s.secondary}
            </Link>
          </div>
        </div>
        {/* controls */}
        <div className="absolute right-8 top-10 flex items-center gap-4 lg:right-12">
          <div className="flex items-center gap-2.5">
            {slides.map((_, d) => (
              <button
                key={d}
                onClick={() => setI(d)}
                aria-label={`Slide ${d + 1}`}
                className={
                  d === i
                    ? "h-2 w-[22px] rounded-full bg-[#5aa2f0]"
                    : "h-2 w-2 rounded-full bg-white/45 transition hover:bg-white/70"
                }
              />
            ))}
          </div>
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              onClick={() => setI((v) => (v + dir + slides.length) % slides.length)}
              aria-label={dir < 0 ? "Previous slide" : "Next slide"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:bg-white/15"
            >
              <IconChevronRight className={`h-4 w-4 ${dir < 0 ? "rotate-180" : ""}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- reviews ---------- */

export function ReviewsSection() {
  return (
    <section className="bg-ground py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHeader eyebrow="Reviews · Trustpilot" title="Rated Excellent by the people we work for." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_2fr]">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-card">
            <h3 className="font-display text-[26px] font-semibold text-ink">Excellent</h3>
            <div className="mt-4"><Stars size={28} gap={6} /></div>
            <p className="mt-4 text-sm text-body">4.9 out of 5 · based on 312 reviews</p>
            <p className="mt-2 flex items-center gap-2 font-bold text-ink"><TpStar size={18} /> Trustpilot</p>
            <div className="my-6 h-px bg-line-soft" />
            {[["5", 89], ["4", 7], ["3", 2], ["2", 1], ["1", 1]].map(([star, pct]) => (
              <div key={star} className="mb-2.5 flex items-center gap-3 text-[12.5px] text-body">
                <span className="w-2">{star}</span>
                <TpStar size={11} />
                <div className="h-1.5 flex-1 rounded-full bg-[#e7ecf2]">
                  <div className="h-1.5 rounded-full bg-tp" style={{ width: `${Math.max(3, Number(pct))}%` }} />
                </div>
                <span className="w-8 text-right text-faint">{pct}%</span>
              </div>
            ))}
            <a href="#" className="mt-5 inline-block text-sm font-semibold text-brand hover:underline">
              Review us on Trustpilot
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-line bg-white p-7 shadow-card">
                <div className="flex items-center justify-between">
                  <Stars size={16} />
                  <span className="text-xs text-faint">{r.when}</span>
                </div>
                <h4 className="mt-4 text-[15.5px] font-bold text-ink">{r.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-body">{r.body}</p>
                <p className="mt-4 text-[12.5px] font-medium text-ink">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- warranty ---------- */

function Shield({ label }: { label: string }) {
  return (
    <div className="relative mx-auto h-[72px] w-[60px]">
      <svg viewBox="0 0 40 48" className="h-full w-full">
        <defs>
          <linearGradient id={`sg-${label}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3e8ee4" />
            <stop offset="1" stopColor="#1d6ed0" />
          </linearGradient>
        </defs>
        <path
          d="M20 2C25 6.5 31 8.8 37.5 9.8V22C37.5 32 30 39.5 20 46C10 39.5 2.5 32 2.5 22V9.8C9 8.8 15 6.5 20 2Z"
          fill={`url(#sg-${label})`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="font-display text-xl font-semibold leading-none">{label}</span>
        <span className="text-[7px] font-bold tracking-[0.2em]">YRS</span>
      </div>
    </div>
  );
}

export function WarrantySection() {
  const tiers = [
    { yrs: "5", sub: "Included on every boiler we fit", hi: false },
    { yrs: "10", sub: "Available across mid-range boilers", hi: false },
    { yrs: "12", sub: "On selected premium ranges", hi: true },
  ];
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <SectionHeader
          eyebrow="Warranty"
          title="Every boiler fitted comes with a warranty."
          sub="Manufacturer-backed cover on every install — registered for you as standard."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.yrs}
              className={
                t.hi
                  ? "navy-panel relative rounded-3xl border border-white/10 p-8 text-center text-white shadow-card-lg"
                  : "relative rounded-3xl border border-line bg-white p-8 text-center shadow-card"
              }
            >
              {t.hi && (
                <span className="absolute right-5 top-5 rounded-full bg-[#7fe0a8] px-3 py-1 text-[9.5px] font-bold tracking-[0.14em] text-ink">
                  LONGEST COVER
                </span>
              )}
              <Shield label={t.yrs} />
              <h3 className={`mt-5 font-display text-[24px] font-semibold ${t.hi ? "" : "text-ink"}`}>
                {t.yrs}-year warranty
              </h3>
              <p className={`mt-2 text-sm ${t.hi ? "text-mut" : "text-body"}`}>{t.sub}</p>
              <div className={`mx-auto my-5 h-px w-4/5 ${t.hi ? "bg-white/15" : "bg-line-soft"}`} />
              <div className="flex items-center justify-center gap-2.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-ok text-white">
                  <IconTick className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span className={`text-sm font-medium ${t.hi ? "" : "text-ink"}`}>Parts &amp; labour cover</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[13.5px] text-faint">
          Warranty length depends on the boiler range you choose — we’ll confirm yours before you book, and register it for you.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

const faqs = [
  ["How quickly can you fit a new boiler?", "Most installs happen within a few days of the survey. We’ll confirm the exact date before you commit — and keep you posted on the day."],
  ["Do you charge for quotes or surveys?", "No — surveys and quotes are free and without obligation. You get a clear written price before any work is agreed."],
  ["Which areas do you cover?", "We’re based in Wigan and work across North West England — Leigh, Bolton, St Helens, Warrington, Manchester, Preston and everywhere in between."],
  ["Can you take on landlord portfolios and CP12s?", "Yes — we schedule CP12s and servicing across whole portfolios, chase the dates, and email certificates the day they’re issued."],
  ["What warranty comes with a new boiler?", "Every boiler we fit comes with a manufacturer-backed warranty of 5 to 12 years depending on the range, registered by us on your behalf."],
  ["Do you handle commercial work?", "Yes — commercial boiler servicing, plant rooms, fault-finding and planned maintenance for businesses and commercial properties."],
];

export function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faqs" className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-[0.8fr_1.6fr] lg:px-12">
        <div>
          <SectionHeader eyebrow="FAQs" title="Questions, answered." />
          <p className="mt-5 text-[15.5px] leading-relaxed text-body">
            The things people ask us most. Anything else — just pick up the phone.
          </p>
          <a href={site.phoneHref} className="mt-4 inline-block text-[14.5px] text-body">
            Call <span className="font-bold text-brand">{site.phone}</span>
          </a>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <div key={q} className={open === i ? "rounded-2xl border border-line bg-ground" : "border-b border-line-soft"}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-1 py-5 text-left text-[16px] font-bold text-ink transition hover:text-brand"
                style={open === i ? { paddingLeft: 24, paddingRight: 24 } : {}}
                aria-expanded={open === i}
              >
                {q}
                <IconChevronDown className={`h-4 w-4 shrink-0 text-body transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-6 pb-6 text-[14px] leading-relaxed text-body">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
