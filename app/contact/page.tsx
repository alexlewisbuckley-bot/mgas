import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import { MapCard } from "@/components/sections";

export const metadata = { title: "Contact us" };

export default function ContactPage() {
  return (
    <>
      <Chrome />
      <main>
        <ContactBand />
        <section className="mx-auto max-w-[1440px] px-6 py-14 lg:px-12">
          <MapCard className="mx-auto max-w-3xl" />
        </section>
      </main>
      <Footer />
    </>
  );
}
