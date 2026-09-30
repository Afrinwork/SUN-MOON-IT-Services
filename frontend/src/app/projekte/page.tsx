import type { Metadata } from "next";
import { Briefcase, Layers3 } from "lucide-react";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { CardLink } from "@/components/ui/card/CardLink";
import { Section } from "@/components/ui/section/Section";

export const metadata: Metadata = { title: "Projekte", description: "Eigene Softwareprodukte und ausgewählte Kundenprojekte." };

export default function ProjektePage() {
  return (
    <main>
      <PageHeader eyebrow="Projekte" title="Was wir gebaut haben." text="Eigene Produkte und Lösungen für unsere Kunden – mit derselben Sorgfalt entwickelt." breadcrumbs={[{ label: "Projekte" }]} />
      <Section eyebrow="Überblick" title="Zwei Bereiche, ein Anspruch" tone="surface">
        <ul className="grid gap-4 md:grid-cols-2">
          <li><CardLink href="/projekte/eigene-software" title="Eigene Software" text="Produkte, die aus echten Anforderungen entstehen." icon={<Layers3 size={23} />} /></li>
          <li><CardLink href="/projekte/kundenprojekte" title="Kundenprojekte" text="Vom Problem zur passenden Lösung – Einblicke in unsere Arbeit." icon={<Briefcase size={23} />} /></li>
        </ul>
      </Section>
      <ContactCTASection />
    </main>
  );
}
