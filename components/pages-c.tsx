"use client";

// Shared primitives for the "C" page group: /new-boiler-cost, /our-work, /advice, /careers.

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { workCategories, workProjects, type WorkCategory } from "@/lib/work";
import { IconArrow } from "./icons";
import { PhotoPlaceholder } from "./sections";

/* ---------- page intro (breadcrumb + H1 + standfirst) ---------- */

export function PageIntro({
  crumbs,
  current,
  title,
  sub,
}: {
  crumbs?: { label: string; href: string }[];
  current: string;
  title: string;
  sub?: string;
}) {
  const trail = crumbs ?? [{ label: "Home", href: "/" }];
  return (
    <div>
      <p className="text-[12.5px] font-medium text-body">
        {trail.map((c) => (
          <span key={c.href}>
            <Link href={c.href} className="hover:text-brand">
              {c.label}
            </Link>
            <span className="mx-2 text-[#b9cbe0]">/</span>
          </span>
        ))}
        <span className="font-bold text-brand">{current}</span>
      </p>
      <h1 className="mt-6 font-display text-[36px] font-semibold tracking-[-0.02em] text-ink lg:text-[40px]">
        {title}
      </h1>
      {sub && <p className="mt-5 max-w-3xl text-[15.5px] leading-[1.6] text-body">{sub}</p>}
    </div>
  );
}

/* ---------- small category tag (DOMESTIC / HEATING …) ---------- */

export function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand ${className}`}>{children}</p>
  );
}

/* ---------- filter pills (All / Domestic / Commercial / Landlord) ---------- */

export function FilterPills({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3" role="tablist">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o)}
            className={
              active
                ? "h-9 rounded-full bg-brand px-4 text-[13px] font-bold text-white transition hover:brightness-110"
                : "h-9 rounded-full border border-[#dce5ef] bg-white px-4 text-[13px] font-medium text-ink transition hover:border-brand hover:text-brand"
            }
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- recent work: filterable grid ---------- */

export function WorkGrid() {
  const [cat, setCat] = useState<WorkCategory>("All");
  const shown = workProjects.filter((p) => cat === "All" || p.category === cat);
  return (
    <div>
      <FilterPills options={[...workCategories]} value={cat} onChange={(v) => setCat(v as WorkCategory)} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-[18px] border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg"
          >
            <PhotoPlaceholder label="PHOTO · PROJECT" spec={p.photo} className="h-[200px] rounded-xl" />
            <div className="px-2.5 pb-3 pt-5">
              <Tag>{p.category}</Tag>
              <h3 className="mt-2 text-[16px] font-bold text-ink">{p.title}</h3>
              <p className="mt-1.5 text-[13px] text-body">{p.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------- new boiler cost: 5-step ballpark estimator ---------- */

type Step = { q: string; options: string[] };

const steps: Step[] = [
  { q: "What kind of boiler do you have now?", options: ["Combi (no tank)", "System (with cylinder)", "Back boiler / other", "Not sure"] },
  { q: "How many bedrooms does the property have?", options: ["1–2", "3", "4", "5 or more"] },
  { q: "Will the new boiler go in the same place?", options: ["Same spot", "Move it somewhere else", "Not sure yet"] },
  { q: "How old is the current system?", options: ["Under 10 years", "10–15 years", "Over 15 years", "Don’t know"] },
  { q: "Any extras you’d like included?", options: ["Smart thermostat", "System filter", "Power flush", "Just the boiler"] },
];

const guide = [
  { title: "Straight swap", sub: "Like-for-like combi replacement" },
  { title: "New system", sub: "Combi conversion or relocation" },
  { title: "Premium install", sub: "Top-range boiler, filters, smart controls" },
];

export function BoilerCostEstimator() {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<number[]>(steps.map(() => -1));
  const [done, setDone] = useState(false);
  const pick = answers[i];
  const last = i === steps.length - 1;

  const choose = (idx: number) =>
    setAnswers((a) => {
      const next = [...a];
      next[i] = idx;
      return next;
    });

  return (
    <div className="rounded-[20px] border border-line bg-white p-7 shadow-card lg:p-9">
      {done ? (
        <div>
          <p className="text-[12.5px] font-bold tracking-[0.16em] text-brand">YOUR BALLPARK</p>
          <div className="mt-4 h-1.5 w-full rounded-full bg-brand" />
          <h2 className="mt-7 font-display text-[24px] font-semibold tracking-[-0.01em] text-ink">
            Based on your answers, you’re likely looking at{" "}
            {/* TODO: client to supply guide price bands — placeholder only */}
            <span className="text-brand">from £[—]</span>
          </h2>
          <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-body">
            That’s a guide, not a quote. We confirm the exact price at a free survey, in writing, before anything is booked.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="btn-gradient group flex h-[46px] items-center gap-3 rounded-[11px] px-6 text-[13.5px] font-bold text-white shadow-btn transition hover:brightness-110"
            >
              Book a free survey
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a href={site.phoneHref} className="text-[14px] text-body">
              or call <span className="font-bold text-brand">{site.phone}</span>
            </a>
            <button
              onClick={() => {
                setDone(false);
                setI(0);
                setAnswers(steps.map(() => -1));
              }}
              className="text-[13px] font-semibold text-faint transition hover:text-brand"
            >
              Start again
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-[12.5px] font-bold tracking-[0.16em] text-brand">
            STEP {i + 1} OF {steps.length}
          </p>
          <div className="mt-4 h-1.5 w-full rounded-full bg-[#e7ecf2]">
            <div
              className="h-1.5 rounded-full bg-brand transition-all"
              style={{ width: `${((i + 1) / steps.length) * 100}%` }}
            />
          </div>
          <h2 className="mt-7 font-display text-[22px] font-semibold tracking-[-0.01em] text-ink lg:text-[24px]">
            {steps[i].q}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2" role="radiogroup">
            {steps[i].options.map((o, idx) => {
              const on = pick === idx;
              return (
                <button
                  key={o}
                  role="radio"
                  aria-checked={on}
                  onClick={() => choose(idx)}
                  className={
                    on
                      ? "flex h-14 items-center gap-3.5 rounded-xl border-[1.5px] border-brand bg-ice-chip px-4 text-left text-[14px] font-medium text-ink"
                      : "flex h-14 items-center gap-3.5 rounded-xl border border-[#dce5ef] bg-white px-4 text-left text-[14px] font-medium text-ink transition hover:border-brand"
                  }
                >
                  <span
                    className={
                      on
                        ? "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-brand bg-white"
                        : "h-[18px] w-[18px] shrink-0 rounded-full border-[1.5px] border-[#c9d5e3] bg-white"
                    }
                  >
                    {on && <span className="h-2 w-2 rounded-full bg-brand" />}
                  </span>
                  {o}
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => setI((v) => Math.max(0, v - 1))}
              disabled={i === 0}
              className="text-[13px] font-semibold text-faint transition hover:text-brand disabled:invisible"
            >
              Back
            </button>
            <button
              onClick={() => (last ? setDone(true) : setI((v) => v + 1))}
              disabled={pick < 0}
              className="btn-gradient group flex h-[46px] items-center gap-2.5 rounded-[11px] px-7 text-[13.5px] font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {last ? "See my ballpark" : "Next"}
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function PriceGuide() {
  return (
    <div>
      <p className="eyebrow">Price guide</p>
      <div className="mt-6 space-y-4">
        {guide.map((g) => (
          <div
            key={g.title}
            className="flex items-center justify-between gap-6 rounded-[14px] border border-line bg-white px-7 py-5 shadow-card"
          >
            <div>
              <h3 className="text-[15.5px] font-bold text-ink">{g.title}</h3>
              <p className="mt-1 text-[12.5px] text-body">{g.sub}</p>
            </div>
            {/* TODO: client to supply guide "from" prices for each band */}
            <span className="shrink-0 font-display text-[20px] font-semibold text-brand">from £[—]</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[12.5px] text-faint">
        Guide prices to be confirmed by MGAS — every job is priced exactly at survey, in writing.
      </p>
    </div>
  );
}
