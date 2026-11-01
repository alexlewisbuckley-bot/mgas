import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import { BoilerCostEstimator, PageIntro, PriceGuide } from "@/components/pages-c";

export const metadata = { title: "How much is a new boiler?" };

// TODO: all prices on this page are `£[—]` placeholders — client to confirm guide bands before launch.

const factors = [
  { n: "01", title: "Boiler brand & range", body: "And the warranty that comes with it — 5 to 12 years." },
  { n: "02", title: "Moving it or not", body: "Same spot is cheapest; a new location adds pipework." },
  { n: "03", title: "System condition", body: "Older systems may need a flush or filter to protect the boiler." },
  { n: "04", title: "Controls", body: "Smart thermostats and zoning add comfort — and cost." },
];

export default function NewBoilerCostPage() {
  return (
    <>
      <Chrome />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-12">
          <PageIntro
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
            current="New boiler cost"
            title="How much is a new boiler?"
            sub="An honest guide — and a quick way to get your own ballpark figure."
          />
          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.08fr_1fr]">
            <BoilerCostEstimator />
            <PriceGuide />
          </div>
        </section>

        <section className="bg-ground py-14 lg:py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <p className="eyebrow">What moves the price</p>
            <h2 className="mt-3 font-display text-[28px] font-semibold tracking-[-0.02em] text-ink lg:text-[30px]">
              Four things decide the number.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {factors.map((f) => (
                <div key={f.n}>
                  <p className="font-display text-[24px] font-semibold text-brand">{f.n}</p>
                  <h3 className="mt-3 text-[15px] font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 max-w-[260px] text-[12.5px] leading-[1.5] text-body">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBand defaultService="Boiler Installations" />
      </main>
      <Footer />
    </>
  );
}
