import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { ProjectOverview } from "@/features/client-projects/components/ProjectOverview";

export const metadata: Metadata = { title: "Kundenprojekte", description: "Projekte, bei denen Technik konkrete Abläufe verbessert." };

export default function KundenprojektePage() {
  return (
    <main>
      <PageHeader eyebrow="Kundenprojekte" title="Vom Problem zur passenden Lösung." text="Ein Einblick in Projekte, bei denen Technik konkrete Abläufe verbessert." breadcrumbs={[{ label: "Projekte", href: "/projekte" }, { label: "Kundenprojekte" }]} />
      <Section eyebrow="Referenzen" title="Ausgewählte Projekte" tone="surface"><ProjectOverview /></Section>
      <ContactCTASection />
    </main>
  );
}
