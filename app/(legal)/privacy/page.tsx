import { LegalDocument } from "@/components/legal";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("privacy");

export const metadata = { title: page.title };

export default function Page() {
  return <LegalDocument page={page} />;
}
