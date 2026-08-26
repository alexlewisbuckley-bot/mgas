import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";
import { ContactBand } from "@/components/contact-band";
import {
  AreasSection,
  CtaSlider,
  FaqSection,
  Hero,
  QuickTiles,
  ReviewsSection,
  ServicesSection,
  TrustStrip,
  WarrantySection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Chrome />
      <main>
        <Hero />
        <QuickTiles />
        <div className="h-10" />
        <TrustStrip />
        <ServicesSection />
        <AreasSection />
        <CtaSlider />
        <ReviewsSection />
        <WarrantySection />
        <ContactBand />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
