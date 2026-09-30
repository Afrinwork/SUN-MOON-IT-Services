import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { MobileContactBar } from "@/components/mobile/MobileContactBar";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CardGrid } from "@/components/ui/card/CardGrid";
import { CardLink } from "@/components/ui/card/CardLink";
import { FaqList } from "@/components/ui/faq/FaqList";
import { FeatureGrid } from "@/components/ui/list/FeatureGrid";
import { Section } from "@/components/ui/section/Section";
import { hannoverPage } from "@/content/local/hannover";
import { LocalQuickContact } from "@/features/local/components/LocalQuickContact";
import { ServiceAreaList } from "@/features/local/components/ServiceAreaList";
import { services } from "@/features/services/data/services";
import { createMetadata } from "@/lib/seo/createMetadata";
import { faqSchema } from "@/lib/seo/structuredData";

export const metadata: Metadata = createMetadata({ title: hannoverPage.seoTitle, description: hannoverPage.seoDescription, path: "/it-service-hannover" });

export default function ItServiceHannoverPage() {
  return (
    <main>
      <JsonLd data={faqSchema(hannoverPage.faq)} />
      <PageHeader eyebrow="IT-Service Region Hannover" title={hannoverPage.title} text={hannoverPage.intro} breadcrumbs={[{ label: "IT-Service Hannover" }]}>
        <LocalQuickContact />
      </PageHeader>
      <Section eyebrow="Einzugsgebiet" title="Für Unternehmen in der Region"><ServiceAreaList /></Section>
      <Section eyebrow="Leistungen" title="Was wir in Hannover & Seelze übernehmen" tone="surface">
        <CardGrid>
          {services.map(({ slug, title, short, icon: Icon }) => <li key={slug}><CardLink href={`/leistungen/${slug}`} title={title} text={short} icon={<Icon size={21} />} /></li>)}
        </CardGrid>
      </Section>
      <Section eyebrow="Warum wir" title="Ihr Partner vor Ort"><FeatureGrid items={hannoverPage.reasons} /></Section>
      <Section eyebrow="FAQ" title="Häufige Fragen" tone="surface"><FaqList items={hannoverPage.faq} /></Section>
      <ContactCTASection />
      <MobileContactBar />
    </main>
  );
}
