import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { MapCard } from "@/components/sections";
import { Breadcrumb, PageTitle, TownChip } from "@/components/pages-b";
import { site, towns } from "@/lib/site";

export const metadata = { title: "Areas we cover" };

export default function AreasPage() {
  return (
    <>
      <Chrome />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 py-11 lg:px-12">
          <Breadcrumb current="Areas we cover" />
          <PageTitle
            title="Areas we cover"
            sub="Based in Wigan, working across North West England — the towns below and everywhere in between."
          />

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[692fr_608fr]">
            <MapCard className="shadow-card-lg" />
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {towns.map((t, i) => (
                  <TownChip key={t} name={t} note={i === 0 ? "HQ" : undefined} />
                ))}
              </div>
              <p className="mt-7 text-[13.5px] text-body">
                Your town not listed? We may still be able to help — call{" "}
                <a href={site.phoneHref} className="font-bold text-brand hover:underline">
                  {site.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
