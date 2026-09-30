import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { FaqList } from "@/components/ui/faq/FaqList";
import { CheckList } from "@/components/ui/list/CheckList";
import { FeatureGrid } from "@/components/ui/list/FeatureGrid";
import { TagList } from "@/components/ui/list/TagList";
import { Section } from "@/components/ui/section/Section";
import { getService } from "@/features/services/data/services";

export function serviceMetadata(slug: string): Metadata {
  const service = getService(slug);
  return { title: service.title, description: service.short };
}

export function ServicePage({ slug }: { slug: string }) {
  const { title, content } = getService(slug);
  return (
    <main>
      <PageHeader eyebrow="Leistung" title={title} text={content.intro} breadcrumbs={[{ label: "Leistungen", href: "/leistungen" }, { label: title }]} />
      <Section eyebrow="Was wir bieten" title="Leistungen im Detail"><FeatureGrid items={content.features} /></Section>
      <Section eyebrow="Ihr Nutzen" title="Ihre Vorteile" tone="surface"><CheckList items={content.benefits} /></Section>
      <ProcessSection />
      <Section eyebrow="Technologien" title="Womit wir arbeiten" tone="surface"><TagList items={content.technologies} /></Section>
      <Section eyebrow="FAQ" title="Häufige Fragen"><FaqList items={content.faq} /></Section>
      <ContactCTASection />
    </main>
  );
}
