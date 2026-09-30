import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { TechnologyGrid } from "@/features/technologies/components/TechnologyGrid";

export const metadata: Metadata = { title: "Technologien", description: "Die Werkzeuge und Plattformen, mit denen wir arbeiten." };

export default function TechnologienPage() {
  return (
    <main>
      <PageHeader eyebrow="Technologien" title="Bewährte Werkzeuge. Sinnvoll eingesetzt." text="Technologie ist für uns kein Selbstzweck. Wir wählen sie danach aus, was für Ihr Projekt langfristig zuverlässig funktioniert." breadcrumbs={[{ label: "Technologien" }]} />
      <Section eyebrow="Stack" title="Womit wir arbeiten"><TechnologyGrid /></Section>
      <ContactCTASection />
    </main>
  );
}
