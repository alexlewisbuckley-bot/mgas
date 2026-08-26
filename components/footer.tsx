import Link from "next/link";
import Image from "next/image";
import { site, services } from "@/lib/site";

const company = [
  ["About us", "/about"],
  ["Reviews", "/reviews"],
  ["Areas we cover", "/areas"],
  ["Commercial clients", "/commercial"],
  ["FAQs", "/#faqs"],
  ["Contact", "/contact"],
];

function LogoSlot({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-white/30 bg-white/5 text-[6.5px] font-bold tracking-[0.14em] text-white/50">
        LOGO
      </span>
      <span className="text-[13px] font-medium text-mut">{name}</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Image src="/brand/mgas-logo.png" alt={site.name} width={133} height={44} />
            <p className="mt-5 max-w-[300px] text-[13.5px] leading-relaxed text-mut">
              Gas, heating and plumbing across the North West — domestic, landlord and commercial.
            </p>
            <a href={site.phoneHref} className="mt-5 block text-[15px] font-bold transition hover:text-sky">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="mt-2 block text-[13.5px] text-mut transition hover:text-white">
              {site.email}
            </a>
            <p className="mt-1 text-[13.5px] text-mut">{site.hours}</p>
          </div>

          <div>
            <h3 className="text-[11.5px] font-bold tracking-[0.16em] text-[#7fa3ce]">SERVICES</h3>
            <ul className="mt-6 space-y-3 text-sm text-mut">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11.5px] font-bold tracking-[0.16em] text-[#7fa3ce]">COMPANY</h3>
            <ul className="mt-6 space-y-3 text-sm text-mut">
              {company.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11.5px] font-bold tracking-[0.16em] text-[#7fa3ce]">ACCREDITATIONS</h3>
            <div className="mt-6 space-y-5">
              <LogoSlot name="Gas Safe Register" />
              <LogoSlot name="WIAPS" />
            </div>
            <p className="mt-5 text-[10.5px] text-white/40">Official marks to be added once confirmed.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p className="text-[12.5px] text-white/55">
              © {new Date().getFullYear()} MGAS Plumbing & Heating Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-[12.5px] font-medium text-white/70">
              <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="transition hover:text-white">Terms</Link>
              <Link href="/cookies" className="transition hover:text-white">Cookies</Link>
            </div>
          </div>
          <p className="mt-2 text-[11.5px] text-white/35">
            MGAS Plumbing & Heating Ltd · Registered in England & Wales · Company No. 00000000 · Gas Safe Reg No. 000000
            {/* TODO: real registration numbers */}
          </p>
        </div>
      </div>
    </footer>
  );
}
