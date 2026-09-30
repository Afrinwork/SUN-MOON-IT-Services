import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { FaqList } from "@/components/ui/faq/FaqList";
import { Section } from "@/components/ui/section/Section";
import { generalFaq } from "@/content/faq/faq";
import { faqSchema } from "@/lib/seo/structuredData";

export const metadata: Metadata = createMetadata({ title: "FAQ", description: "Antworten auf häufige Fragen zu Kosten, Ablauf, Betreuung und Zusammenarbeit.", path: "/faq" });

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema(generalFaq)} />
      <PageHeader eyebrow="FAQ" title="Häufige Fragen." text="Kosten, Dauer, Wartung und Zusammenarbeit – kurz beantwortet." breadcrumbs={[{ label: "FAQ" }]} />
      <Section eyebrow="Fragen & Antworten" title="Was Kunden oft wissen möchten" tone="surface"><FaqList items={generalFaq} /></Section>
      <ContactCTASection />
    </main>
  );
}
