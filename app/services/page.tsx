import Link from "next/link";
import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { services, site } from "@/lib/site";
import { IconArrow, IconChevronRight, serviceIcons } from "@/components/icons";

export const metadata = { title: "Our services" };

export default function ServicesPage() {
  return (
    <>
      <Chrome />
      <main>
        <section className="bg-ground">
          <div className="mx-auto max-w-[1440px] px-6 py-14 lg:px-12">
            <p className="text-[12.5px] font-medium text-body">
              <Link href="/" className="hover:text-brand">Home</Link>
              <span className="mx-2 text-[#b9cbe0]">/</span>
              <span className="font-bold text-brand">Services</span>
            </p>
            <h1 className="mt-6 font-display text-[40px] font-semibold tracking-[-0.02em] text-ink">Our services</h1>
            <p className="mt-5 max-w-3xl text-[15.5px] leading-relaxed text-body">
              Professional plumbing, heating and renewable energy services for domestic and commercial customers.
              Gas Safe and WIAPS accredited — safe, professional and compliant workmanship on every job.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ice-chip text-brand">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <h2 className="mt-6 text-[17px] font-bold leading-snug text-ink">{s.title}</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-body">{s.short}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-brand">
                    Learn more
                    <IconChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
            <div className="navy-panel flex flex-col rounded-2xl p-7 text-white shadow-card-lg">
              <h2 className="font-display text-[22px] font-semibold leading-tight">Not sure what you need?</h2>
              <p className="mt-3 text-[13px] leading-relaxed text-mut">
                Describe the problem — we’ll tell you what it needs and what it costs.
              </p>
              <Link
                href="/contact"
                className="group mt-auto flex h-[46px] items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-ink transition hover:-translate-y-0.5"
              >
                Talk to MGAS
                <IconArrow className="h-4 w-4 text-brand transition group-hover:translate-x-0.5" />
              </Link>
              <a href={site.phoneHref} className="mt-3 text-center text-[12.5px] text-mut hover:text-white">
                or call {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
