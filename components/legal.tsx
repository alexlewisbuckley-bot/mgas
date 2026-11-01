"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { LegalPage, LegalSection } from "@/lib/legal";

/* ---------- "On this page" sidebar — highlights the section in view ---------- */

function LegalToc({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-8">
      <p className="text-[12px] font-bold tracking-[0.16em] text-faint">ON THIS PAGE</p>
      <ul className="mt-4 space-y-[14px]">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block text-[13.5px] leading-[18px] transition ${
                active === s.id ? "font-bold text-brand" : "font-medium text-body hover:text-ink"
              }`}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- body renderer: paragraphs, with "- " lines grouped into bullet lists ---------- */

function SectionBody({ body }: { body: string[] }) {
  const blocks: Array<{ type: "p"; text: string } | { type: "ul"; items: string[] }> = [];
  for (const line of body) {
    if (line.startsWith("- ")) {
      const last = blocks[blocks.length - 1];
      if (last && last.type === "ul") last.items.push(line.slice(2));
      else blocks.push({ type: "ul", items: [line.slice(2)] });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  return (
    <div className="mt-3 space-y-4 text-[15px] leading-[1.6] text-body">
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i}>{b.text}</p>
        ) : (
          <ul key={i} className="space-y-2 pl-1">
            {b.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}

/* ---------- full legal document: breadcrumb, title, sidebar + sections ---------- */

export function LegalDocument({ page }: { page: LegalPage }) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-12 pt-11 lg:px-12">
      <p className="text-[12.5px] font-medium text-body">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span className="mx-2 text-[#b9cbe0]">/</span>
        <span className="font-bold text-brand">{page.label}</span>
      </p>
      <h1 className="mt-5 font-display text-[36px] font-semibold tracking-[-0.02em] text-ink lg:text-[40px]">
        {page.title}
      </h1>
      <p className="mt-4 text-[13.5px] font-medium text-faint">Last updated: {page.updated}</p>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[332px_1fr] lg:gap-0">
        <LegalToc sections={page.sections} />
        <article className="space-y-10">
          {page.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-8">
              <h2 className="font-display text-[21px] font-semibold tracking-[-0.3px] text-ink">{s.title}</h2>
              <SectionBody body={s.body} />
            </section>
          ))}
          {page.note && <p className="text-[12.5px] text-faint">{page.note}</p>}
        </article>
      </div>
    </section>
  );
}
