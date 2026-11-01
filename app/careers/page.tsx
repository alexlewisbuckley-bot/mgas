import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { PageIntro } from "@/components/pages-c";
import { perks, roles } from "@/lib/careers";
import { site } from "@/lib/site";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <Chrome />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 py-12 pb-20 lg:px-12">
          <PageIntro
            current="Careers"
            title="Join the team"
            sub="Good engineers are the whole business. If that’s you — even if nothing below fits — we want to hear from you."
          />
          <div className="mt-9 grid items-start gap-12 lg:grid-cols-[minmax(0,2.1fr)_1fr]">
            <div className="space-y-5">
              {roles.map((r) => (
                <div
                  key={r.title}
                  className="flex flex-col gap-5 rounded-2xl border border-line bg-white px-8 py-6 shadow-card sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h2 className="text-[17px] font-bold text-ink">{r.title}</h2>
                    <p className="mt-1.5 text-[13px] font-medium text-body">{r.terms}</p>
                    <p className="mt-1 text-[12.5px] text-faint">{r.requirements}</p>
                  </div>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
                    className="flex h-[42px] shrink-0 items-center justify-center rounded-[10px] bg-brand px-8 text-[13px] font-bold text-white transition hover:brightness-110"
                  >
                    Apply
                  </a>
                </div>
              ))}
            </div>
            <ul className="space-y-6 pt-2">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3.5 text-[14.5px] font-medium text-ink">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-ok" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-12 text-[14px] text-body">
            Nothing open that fits?{" "}
            <span className="ml-1">
              Send your CV to{" "}
              <a href={`mailto:${site.email}?subject=${encodeURIComponent("CV for future roles")}`} className="font-bold text-brand hover:underline">
                {site.email}
              </a>{" "}
              — we keep good people on file.
            </span>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
