import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { PageIntro, WorkGrid } from "@/components/pages-c";

export const metadata = { title: "Recent work" };

export default function OurWorkPage() {
  return (
    <>
      <Chrome />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 py-12 pb-20 lg:px-12">
          <PageIntro
            current="Recent work"
            title="Recent work"
            sub="Real installs, repairs and plant rooms — photos to be added per project."
          />
          <div className="mt-9">
            <WorkGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
