import Link from "next/link";
import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { PhotoPlaceholder } from "@/components/sections";
import { PageIntro, Tag } from "@/components/pages-c";
import { articles, featuredArticle } from "@/lib/advice";

export const metadata = { title: "Advice & guides" };

export default function AdvicePage() {
  const f = featuredArticle;
  return (
    <>
      <Chrome />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 py-12 pb-20 lg:px-12">
          <PageIntro
            current="Advice"
            title="Advice & guides"
            sub="Straight answers to the questions we get asked every week."
          />
          <div className="mt-9 grid items-start gap-6 lg:grid-cols-[1.03fr_1fr]">
            {/* featured */}
            <Link
              href={f.href}
              className="group grid gap-6 rounded-[20px] border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg sm:grid-cols-[300px_1fr]"
            >
              <PhotoPlaceholder label="PHOTO · GUIDE" spec={f.photo} className="min-h-[220px] rounded-xl sm:min-h-[268px]" />
              <div className="flex flex-col px-2 py-2 sm:pr-4">
                <Tag>{f.category}</Tag>
                <h2 className="mt-3 font-display text-[22px] font-semibold leading-[1.24] tracking-[-0.01em] text-ink group-hover:text-brand">
                  {f.title}
                </h2>
                <p className="mt-4 text-[13.5px] leading-[1.52] text-body">{f.summary}</p>
                <p className="mt-auto pt-6 text-[12.5px] font-medium text-faint">{f.read}</p>
              </div>
            </Link>
            {/* 2×2 grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {articles.map((a) => (
                <Link
                  key={a.title}
                  href={a.href}
                  className="group flex min-h-[140px] flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-lg"
                >
                  <Tag className="text-[9px]">{a.category}</Tag>
                  <h3 className="mt-2.5 text-[14.5px] font-bold leading-[1.32] text-ink group-hover:text-brand">{a.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-[1.5] text-body">{a.summary}</p>
                  <p className="mt-auto pt-4 text-[12px] font-medium text-faint">{a.read}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
