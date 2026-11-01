import Link from "next/link";
import { notFound } from "next/navigation";
import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import { PhotoPlaceholder, Tick } from "@/components/sections";
import { services, site } from "@/lib/site";
import { IconArrow, Stars } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.title ?? "Service" };
}


export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <Chrome />
      <main>
        <section className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 py-12 lg:grid-cols-[1.1fr_1fr] lg:px-12">
          <div>
            <p className="text-[12.5px] font-medium text-body">
              <Link href="/" className="hover:text-brand">Home</Link>
              <span className="mx-2 text-[#b9cbe0]">/</span>
              <Link href="/services" className="hover:text-brand">Services</Link>
              <span className="mx-2 text-[#b9cbe0]">/</span>
              <span className="font-bold text-brand">{s.title}</span>
            </p>
            <h1 className="mt-6 font-display text-[36px] font-semibold tracking-[-0.02em] text-ink lg:text-[40px]">
              {s.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.6] text-body">{s.blurb}</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="btn-gradient group flex h-[50px] items-center gap-3 rounded-xl px-6 text-sm font-bold text-white shadow-btn transition hover:brightness-110"
              >
                Book a visit
                <IconArrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <a href={site.phoneHref} className="text-[14.5px] text-body">
                or call <span className="font-bold text-brand">{site.phone}</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Gas Safe registered", "5–12 year warranties", "5.0 on Google"].map((c) => (
                <span key={c} className="flex items-center gap-2 rounded-full border border-[#dce5ef] bg-ground px-4 py-2 text-[12.5px] font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-ok" /> {c}
                </span>
              ))}
            </div>
          </div>
          <PhotoPlaceholder
            label="PHOTO · LANDSCAPE 7:5"
            spec={s.photo}
            className="min-h-[340px]"
          />
        </section>

        <section className="bg-ground py-14">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <p className="eyebrow">What’s included</p>
            <h2 className="mt-3 font-display text-[28px] font-semibold text-ink">Everything, handled.</h2>
            <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.included.map((i) => (
                <Tick key={i}>{i}</Tick>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="navy-panel rounded-3xl p-9 text-white">
              <h3 className="font-display text-[21px] font-semibold leading-snug">
                Every boiler fitted comes with a 5–12 year warranty.
              </h3>
              <p className="mt-3 text-[13px] text-mut">Manufacturer-backed, parts &amp; labour — registered for you.</p>
            </div>
            <div className="rounded-3xl border border-line bg-white p-9 shadow-card">
              <Stars size={16} />
              <h3 className="mt-4 text-[15.5px] font-bold text-ink">Excellent from start to finish.</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-body">
                MGAS have just replaced a boiler for me. The service was excellent from start to finish. Would definitely recommend.
              </p>
              <p className="mt-4 text-[12.5px] font-medium text-faint">Simon Litherland · Google review</p>
            </div>
          </div>
        </section>

        <ContactBand defaultService={s.title} />
      </main>
      <Footer />
    </>
  );
}
