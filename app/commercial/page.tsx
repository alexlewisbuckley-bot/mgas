import Link from "next/link";
import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import { NumberedStep, TickCard } from "@/components/pages-a";
import { IconArrow, Stars } from "@/components/icons";
import { site } from "@/lib/site";
import { commercial } from "@/lib/pages-a";

export const metadata = { title: "Commercial & Landlords" };

export default function CommercialPage() {
  const c = commercial;
  return (
    <>
      <Chrome />
      <main>
        {/* hero */}
        <section className="navy-panel relative overflow-hidden text-white">
          <div
            className="pointer-events-none absolute -left-44 -top-32 h-[440px] w-[700px] rounded-full opacity-25 blur-[150px]"
            style={{ background: "var(--brand)" }}
          />
          <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-[60px] lg:px-12">
            <p className="text-[13px] font-bold tracking-[0.18em] text-[#7fb2ef]">{c.eyebrow.toUpperCase()}</p>
            <h1 className="mt-5 font-display text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[38px]">
              {c.title[0]}
              <br />
              {c.title[1]}
            </h1>
            <p className="mt-6 max-w-[640px] text-[15.5px] leading-[1.52] text-mut">{c.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="group flex h-[50px] items-center gap-3 rounded-xl bg-white px-6 text-sm font-bold text-ink shadow-card-lg transition hover:-translate-y-0.5"
              >
                Talk to MGAS
                <IconArrow className="h-4 w-4 text-brand transition group-hover:translate-x-0.5" />
              </Link>
              <a href={site.phoneHref} className="text-[14.5px] text-mut transition hover:text-white">
                or call <span className="font-bold text-white">{site.phone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* benefits */}
        <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {c.benefits.map((b) => (
              <TickCard key={b.title} title={b.title} body={b.body} />
            ))}
          </div>
        </section>

        {/* how it works */}
        <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-4 lg:px-12">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-[30px] font-semibold tracking-[-0.02em] text-ink">
            One contact, every property.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {c.steps.map((s, i) => (
              <NumberedStep key={s.title} n={`0${i + 1}`} title={s.title} body={s.body} />
            ))}
          </div>
        </section>

        {/* proof */}
        <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[18px] border border-line bg-white p-8 shadow-card">
              <Stars size={16} />
              <h3 className="mt-4 text-[15.5px] font-bold text-ink">{c.review.title}</h3>
              <p className="mt-2 max-w-[460px] text-[13.5px] leading-[1.5] text-body">{c.review.body}</p>
              <p className="mt-5 text-[12.5px] font-medium text-body">{c.review.name}</p>
            </div>
            <div className="navy-panel rounded-[18px] p-9 text-white">
              <h3 className="font-display text-[20px] font-semibold tracking-[-0.01em]">{c.accreditation.title}</h3>
              <p className="mt-3 max-w-[420px] text-[13.5px] leading-[1.5] text-mut">{c.accreditation.body}</p>
            </div>
          </div>
        </section>

        <ContactBand defaultService="Commercial Boiler Services" />
      </main>
      <Footer />
    </>
  );
}
