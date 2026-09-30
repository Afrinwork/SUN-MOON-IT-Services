import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { CardGrid } from "@/components/ui/card/CardGrid";
import { CardLink } from "@/components/ui/card/CardLink";
import { Section } from "@/components/ui/section/Section";
import { services } from "@/features/services/data/services";

export const metadata: Metadata = { title: "Leistungen", description: "Webentwicklung, Apps, individuelle Software, Microsoft 365, KI und Modernisierung." };

export default function LeistungenPage() {
  return (
    <main>
      <PageHeader eyebrow="Leistungen" title="Digitale Lösungen aus einer Hand." text="Von der ersten Idee bis zum stabilen Betrieb: Wir entwickeln Lösungen, die im Alltag wirklich funktionieren." breadcrumbs={[{ label: "Leistungen" }]} />
      <Section eyebrow="Überblick" title="Unsere Leistungsbereiche" tone="surface">
        <CardGrid>
          {services.map(({ slug, title, short, icon: Icon }) => <li key={slug}><CardLink href={`/leistungen/${slug}`} title={title} text={short} icon={<Icon size={23} />} /></li>)}
        </CardGrid>
      </Section>
      <ContactCTASection />
    </main>
  );
}
