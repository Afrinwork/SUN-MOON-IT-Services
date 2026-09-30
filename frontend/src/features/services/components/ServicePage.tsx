import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/faq/FaqList";
import { CheckList } from "@/components/ui/list/CheckList";
import { FeatureGrid } from "@/components/ui/list/FeatureGrid";
import { TagList } from "@/components/ui/list/TagList";
import { Section } from "@/components/ui/section/Section";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { getService } from "@/features/services/data/services";
import { createMetadata } from "@/lib/seo/createMetadata";
import { faqSchema, serviceSchema } from "@/lib/seo/structuredData";

export function serviceMetadata(slug: string): Metadata {
  const service = getService(slug);
  return createMetadata({ title: service.title, description: service.short, path: `/leistungen/${slug}` });
}

export function ServicePage({ slug }: { slug: string }) {
  const { title, short, content } = getService(slug);
  return (
    <main>
      <JsonLd data={serviceSchema(title, short, `/leistungen/${slug}`)} />
      {content.faq.length > 0 && <JsonLd data={faqSchema(content.faq)} />}
      <PageHeader eyebrow="Leistung" title={title} text={content.intro} breadcrumbs={[{ label: "Leistungen", href: "/leistungen" }, { label: title }]} />
      <Section eyebrow="Was wir bieten" title="Unser Angebot"><FeatureGrid items={content.features} /></Section>
      <Section eyebrow="Ihr Nutzen" title="Ihre Vorteile" tone="surface"><CheckList items={content.benefits} /></Section>
      <ProcessSection />
      <Section eyebrow="Technik" title="Womit wir arbeiten" tone="surface"><TagList items={content.technologies} /></Section>
      <Section eyebrow="FAQ" title="Häufige Fragen"><FaqList items={content.faq} /></Section>
      <Section eyebrow="Mehr entdecken" title="Weitere Leistungen" tone="surface"><RelatedServices currentSlug={slug} /></Section>
      <ContactCTASection />
    </main>
  );
}
