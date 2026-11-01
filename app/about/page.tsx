import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import { PhotoPlaceholder } from "@/components/sections";
import { AccreditationCard, Breadcrumb, NumberedStep } from "@/components/pages-a";
import { about } from "@/lib/pages-a";

export const metadata = { title: "About us" };

export default function AboutPage() {
  const a = about;
  return (
    <>
      <Chrome />
      <main>
        {/* intro */}
        <section className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 py-11 lg:grid-cols-[1fr_560px] lg:px-12">
          <div>
            <Breadcrumb trail={[["Home", "/"]]} current="About us" />
            <h1 className="mt-7 font-display text-[34px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[40px]">
              {a.title[0]}
              <br />
              {a.title[1]}
            </h1>
            <p className="mt-6 max-w-[700px] text-[15.5px] leading-[1.58] text-body">{a.intro}</p>
          </div>
          <PhotoPlaceholder label="PHOTO · TEAM" spec={a.heroPhoto} className="min-h-[340px]" />
        </section>

        {/* what to expect */}
        <section className="bg-ground py-[52px]">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <p className="eyebrow">What to expect</p>
            <h2 className="mt-3 font-display text-[30px] font-semibold tracking-[-0.02em] text-ink">
              When an MGAS engineer knocks.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {a.expect.map((s, i) => (
                <NumberedStep key={s.title} n={`0${i + 1}`} title={s.title} body={s.body} size="md" />
              ))}
            </div>
          </div>
        </section>

        {/* team */}
        <section className="mx-auto max-w-[1440px] px-6 pt-[72px] lg:px-12">
          <p className="eyebrow">The team</p>
          <h2 className="mt-3 font-display text-[30px] font-semibold tracking-[-0.02em] text-ink">
            Engineers, not salespeople.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.team.map((m, i) => (
              <div key={i} className="rounded-[18px] border border-line bg-white p-4 shadow-card">
                <PhotoPlaceholder
                  label="PHOTO · PORTRAIT"
                  spec="Head-and-shoulders portrait in MGAS workwear, plain background, graded to brand navy."
                  className="h-[190px]"
                />
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-[16px] font-bold text-ink">{m.name}</h3>
                  <p className="mt-1 text-[13px] font-medium text-body">{m.role}</p>
                  <p className="mt-2 text-[12px] text-faint">{m.reg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* accreditations */}
        <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-20 lg:px-12">
          <p className="eyebrow">Accreditations</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:max-w-[736px]">
            {a.accreditations.map((x) => (
              <AccreditationCard key={x.name} name={x.name} sub={x.sub} />
            ))}
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
