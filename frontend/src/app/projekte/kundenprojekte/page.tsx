import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { ProjectOverview } from "@/features/client-projects/components/ProjectOverview";
import { clientProjects } from "@/features/client-projects/data/client-projects";

export const metadata: Metadata = createMetadata({ title: "Kundenprojekte", description: "Ausgewählte Kundenprojekte: wie digitale Lösungen Abläufe vereinfachen und Zeit sparen.", path: "/projekte/kundenprojekte", noIndex: clientProjects.length === 0 });

export default function KundenprojektePage() {
  return (
    <main>
      <PageHeader eyebrow="Kundenprojekte" title="Vom Problem zur passenden Lösung." text="Ein Einblick in Projekte, bei denen Technik konkrete Abläufe verbessert." breadcrumbs={[{ label: "Projekte", href: "/projekte" }, { label: "Kundenprojekte" }]} />
      <Section eyebrow="Referenzen" title="Ausgewählte Projekte" tone="surface"><ProjectOverview /></Section>
      <ContactCTASection />
    </main>
  );
}
