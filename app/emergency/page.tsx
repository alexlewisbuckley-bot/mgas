import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import { NumberedStep, WarnBullet } from "@/components/pages-a";
import { IconPhone } from "@/components/icons";
import { site } from "@/lib/site";
import { emergency } from "@/lib/pages-a";

export const metadata = { title: "Emergency Call-Out" };

export default function EmergencyPage() {
  const e = emergency;
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
          <div className="relative mx-auto grid max-w-[1440px] items-start gap-10 px-6 pb-14 pt-14 lg:grid-cols-[1fr_560px] lg:px-12">
            <div>
              <span className="inline-flex h-7 items-center rounded-full bg-warn px-3.5 text-[11.5px] font-bold tracking-[0.16em] text-[#3a2a05]">
                {e.chip.toUpperCase()}
              </span>
              <h1 className="mt-5 font-display text-[34px] font-semibold leading-[1.18] tracking-[-0.02em] sm:text-[42px]">
                {e.title[0]}
                <br />
                {e.title[1]}
              </h1>
              <a
                href={site.phoneHref}
                className="mt-9 inline-flex h-16 items-center gap-3.5 rounded-2xl bg-white px-7 text-ink shadow-[0_14px_32px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5"
              >
                <IconPhone className="h-6 w-6 text-brand" />
                <span className="font-display text-[24px] font-semibold tracking-[-0.01em]">{site.phone}</span>
              </a>
              <p className="mt-5 text-[13.5px] font-medium text-mut">Lines open {site.hours}</p>
            </div>

            {/* National Gas Emergency notice */}
            <aside
              className="rounded-[14px] border border-warn/60 bg-white/[0.06] px-6 py-5 lg:mt-12"
              role="note"
              aria-label="National Gas Emergency advice"
            >
              <p className="text-[13.5px] font-bold text-warn">{e.gasNotice.title}</p>
              <p className="mt-2 text-[13px] leading-[1.48] text-white">
                {e.gasNotice.body}{" "}
                <a href={e.gasNotice.lineHref} className="font-bold underline underline-offset-2 hover:text-warn">
                  {e.gasNotice.line}
                </a>{" "}
                {e.gasNotice.after}
              </p>
            </aside>
          </div>
        </section>

        {/* when to call */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <p className="eyebrow">When to call</p>
            <h2 className="mt-3 font-display text-[30px] font-semibold tracking-[-0.02em] text-ink">
              We treat these as emergencies.
            </h2>
            <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {e.situations.map((s) => (
                <WarnBullet key={s}>{s}</WarnBullet>
              ))}
            </div>
          </div>
        </section>

        {/* while you wait */}
        <section className="bg-ground py-14">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <p className="eyebrow">While you wait</p>
            <h2 className="mt-3 font-display text-[30px] font-semibold tracking-[-0.02em] text-ink">
              Three things to do before we arrive.
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {e.whileYouWait.map((s, i) => (
                <NumberedStep key={s.title} n={String(i + 1)} title={s.title} body={s.body} inline />
              ))}
            </div>
          </div>
        </section>

        <ContactBand defaultService="Emergency / something else" />
      </main>
      <Footer />
    </>
  );
}
