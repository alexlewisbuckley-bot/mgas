import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import { Breadcrumb, PageTitle, RatingRow, ReviewCard } from "@/components/pages-b";
import { reviews } from "@/lib/site";

export const metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <>
      <Chrome />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 py-11 lg:px-12">
          <Breadcrumb current="Reviews" />
          <PageTitle title="What customers say" />

          <div className="mt-8">
            {/* TODO: real Google review link once the client supplies it */}
            <RatingRow reviewHref="#" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>

          <p className="mt-9 text-[13.5px] text-faint">All reviews are collected independently on Google.</p>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
