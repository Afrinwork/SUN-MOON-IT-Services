import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { FaqList } from "@/components/ui/faq/FaqList";
import { Section } from "@/components/ui/section/Section";
import { generalFaq } from "@/content/faq/faq";

export const metadata: Metadata = { title: "FAQ", description: "Antworten auf häufige Fragen zu Kosten, Dauer und Zusammenarbeit." };

export default function FaqPage() {
  return (
    <main>
      <PageHeader eyebrow="FAQ" title="Häufige Fragen." text="Kosten, Dauer, Wartung und Zusammenarbeit – kurz beantwortet." breadcrumbs={[{ label: "FAQ" }]} />
      <Section eyebrow="Fragen & Antworten" title="Was Kunden oft wissen möchten" tone="surface"><FaqList items={generalFaq} /></Section>
      <ContactCTASection />
    </main>
  );
}
