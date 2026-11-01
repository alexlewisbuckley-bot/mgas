import { Chrome } from "@/components/chrome";
import { Footer } from "@/components/footer";

// Shared shell for /privacy, /terms and /cookies — same structure, different sections (lib/legal.ts).
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Chrome />
      <main>{children}</main>
      <Footer />
    </>
  );
}
