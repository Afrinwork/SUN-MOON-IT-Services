import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { MobileContactBar } from "@/components/mobile/MobileContactBar";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqList } from "@/components/ui/faq/FaqList";
import { CheckList } from "@/components/ui/list/CheckList";
import { FeatureGrid } from "@/components/ui/list/FeatureGrid";
import { Section } from "@/components/ui/section/Section";
import { pricingPage } from "@/content/pricing/pricing-page";
import { PricePackageList } from "@/features/pricing/components/PricePackageList";
import { createMetadata } from "@/lib/seo/createMetadata";
import { faqSchema } from "@/lib/seo/structuredData";

export const metadata: Metadata = createMetadata({ title: pricingPage.seoTitle, description: pricingPage.seoDescription, path: "/preise" });

export default function PreisePage() {
  return (
    <main>
      <JsonLd data={faqSchema(pricingPage.faq)} />
      <PageHeader eyebrow="Preise" title={pricingPage.title} text={pricingPage.intro} breadcrumbs={[{ label: "Preise" }]} />
      <Section eyebrow="Pakete" title="Was kostet was?" tone="surface"><PricePackageList /></Section>
      <Section eyebrow="Ablauf" title="So entsteht Ihr Preis"><FeatureGrid items={pricingPage.steps} /></Section>
      <Section eyebrow="Transparenz" title="Was den Preis beeinflusst" tone="surface"><CheckList items={pricingPage.priceFactors} /></Section>
      <Section eyebrow="FAQ" title="Fragen zu den Kosten"><FaqList items={pricingPage.faq} /></Section>
      <ContactCTASection />
      <MobileContactBar />
    </main>
  );
}
