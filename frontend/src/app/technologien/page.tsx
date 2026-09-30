import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { TechnologyGrid } from "@/features/technologies/components/TechnologyGrid";

export const metadata: Metadata = createMetadata({ title: "Technologien", description: "Next.js, React, Java, Spring Boot und Microsoft 365 – bewährte Technik, sinnvoll eingesetzt.", path: "/technologien" });

export default function TechnologienPage() {
  return (
    <main>
      <PageHeader eyebrow="Technologien" title="Bewährte Werkzeuge. Sinnvoll eingesetzt." text="Technologie ist für uns kein Selbstzweck. Wir wählen sie danach aus, was für Ihr Projekt langfristig zuverlässig funktioniert." breadcrumbs={[{ label: "Technologien" }]} />
      <Section eyebrow="Stack" title="Womit wir arbeiten"><TechnologyGrid /></Section>
      <ContactCTASection />
    </main>
  );
}
