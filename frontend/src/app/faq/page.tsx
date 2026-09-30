import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { generalFaq } from "@/content/faq/faq";
import { FaqPageContent } from "@/features/faq/components/FaqPageContent";
import { faqSchema } from "@/lib/seo/structuredData";

export const metadata: Metadata = createMetadata({ title: "FAQ", description: "Antworten auf häufige Fragen zu Kosten, Ablauf, Betreuung und Zusammenarbeit.", path: "/faq" });

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema(generalFaq)} />
      <FaqPageContent items={generalFaq} />
      <div className="hidden md:block"><ContactCTASection /></div>
    </main>
  );
}
