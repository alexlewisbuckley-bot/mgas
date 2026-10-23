"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, services } from "@/lib/site";
import {
  IconArrow,
  IconChevronRight,
  IconClose,
  IconMenu,
  IconPhone,
  IconSearch,
  IconWhatsApp,
} from "./icons";

export function TopBar() {
  return (
    <div className="bg-ground border-b border-line text-[13px] text-body">
      <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-center gap-2 px-6 text-center">
        <span>Landlord or commercial client?</span>
        <Link href="/commercial" className="font-semibold text-brand underline-offset-2 hover:underline">
          Visit our commercial page
        </Link>
      </div>
    </div>
  );
}

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-ink text-white">
      <div className="mx-auto flex h-[96px] max-w-[1440px] items-center gap-4 px-6 lg:px-12">
        {/* menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 items-center gap-2 rounded-xl border border-white/25 px-4 text-sm font-semibold transition hover:border-white/60 hover:bg-white/5 lg:px-5"
          aria-expanded={open}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          <span className="hidden sm:inline">Our Services</span>
        </button>

        {/* search */}
        <div className="hidden h-12 w-full max-w-[336px] items-center gap-3 rounded-full bg-white px-5 text-body md:flex">
          <IconSearch className="h-4.5 w-4.5 text-faint" />
          <input
            placeholder="Search — e.g. boiler service"
            className="w-full bg-transparent text-sm outline-none placeholder:text-faint"
          />
        </div>

        {/* logo */}
        <Link href="/" className="mx-auto shrink-0 transition-opacity hover:opacity-80">
          <Image src="/brand/mgas-logo.png" alt={site.name} width={139} height={46} priority />
        </Link>

        {/* links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-mut lg:flex">
          {[
            ["Areas", "/areas"],
            ["Reviews", "/reviews"],
            ["About", "/about"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        {/* phone */}
        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 text-[15px] font-bold transition hover:text-sky xl:flex"
        >
          <IconPhone className="h-4.5 w-4.5 text-sky" />
          {site.phone}
        </a>

        {/* whatsapp */}
        <a
          href={site.whatsappHref}
          aria-label="WhatsApp us"
          className="hidden h-12 w-12 items-center justify-center rounded-full border border-wa/60 bg-wa/15 text-[#7ceba8] transition hover:bg-wa/30 sm:flex"
        >
          <IconWhatsApp className="h-5.5 w-5.5" />
        </a>

        {/* book now */}
        <Link
          href="/contact"
          className="bg-red-600 group flex h-12 shrink-0 items-center gap-3 rounded-full py-2 pl-5 pr-2 text-sm font-bold shadow-btn transition hover:brightness-110"
        >
          Book Now
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 transition group-hover:translate-x-0.5">
            <IconArrow className="h-4 w-4" />
          </span>
        </Link>
      </div>

      {/* services mega-menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink pb-6">
          <div className="mx-auto grid max-w-[1440px] gap-1 px-6 pt-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-white/5"
              >
                <div>
                  <div className="text-sm font-bold">{s.title}</div>
                  <div className="text-xs text-mut">{s.short}</div>
                </div>
                <IconChevronRight className="h-4 w-4 text-faint transition group-hover:translate-x-0.5 group-hover:text-white" />
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-sky transition hover:bg-white/5"
            >
              View all services <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function CategoryBar() {
  const pathname = usePathname();
  return (
    <div className="border-b border-line bg-[#f1f5f9]">
      <div className="mx-auto flex h-12 max-w-[1440px] items-center gap-6 overflow-x-auto px-6 text-sm font-medium text-[#3e5470] lg:px-12">
        {services.map((s) => {
          const href = `/services/${s.slug}`;
          const active = pathname === href || (s.slug === "boiler-installations" && pathname === "/");
          return (
            <Link
              key={s.slug}
              href={href}
              className={
                active
                  ? "flex shrink-0 items-center rounded-full bg-ice-chip px-4 py-1.5 font-bold text-brand"
                  : "shrink-0 transition hover:text-ink"
              }
            >
              {s.nav}
            </Link>
          );
        })}
        <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
          <span className="text-[13.5px] font-semibold text-ink">Landlord or commercial?</span>
          <Link href="/commercial" className="text-[13.5px] font-semibold text-brand hover:underline">
            Talk to MGAS
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Chrome() {
  return (
    <>
      <TopBar />
      <NavBar />
      <CategoryBar />
    </>
  );
}
