import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { CheckList } from "@/components/ui/list/CheckList";
import { FeatureGrid } from "@/components/ui/list/FeatureGrid";
import { Section } from "@/components/ui/section/Section";
import { qualityPrinciples } from "@/content/about/approach";
import { values } from "@/content/about/values";
import { CompanyIntro } from "@/features/about/components/CompanyIntro";

export const metadata: Metadata = createMetadata({ title: "Über uns", description: "Wer hinter Sun & Moon IT Software Services steht, wofür wir stehen und wie wir arbeiten.", path: "/ueber-uns" });

export default function UeberUnsPage() {
  return (
    <main>
      <PageHeader eyebrow="Über uns" title="Ein technischer Partner, der unternehmerisch mitdenkt." breadcrumbs={[{ label: "Über uns" }]} />
      <Section eyebrow="Wer wir sind" title="Unser Unternehmen"><CompanyIntro /></Section>
      <Section eyebrow="Werte" title="Wofür wir stehen" tone="surface"><FeatureGrid items={values} /></Section>
      <Section eyebrow="Qualität" title="Unsere Prinzipien"><CheckList items={qualityPrinciples} /></Section>
      <Section eyebrow="Arbeitsweise" title="So arbeiten wir" text="Transparent vom ersten Gespräch bis zum Betrieb." tone="surface">
        <ButtonLink href="/ablauf">Zum Projektablauf <ArrowRight size={17} /></ButtonLink>
      </Section>
      <ContactCTASection />
    </main>
  );
}
