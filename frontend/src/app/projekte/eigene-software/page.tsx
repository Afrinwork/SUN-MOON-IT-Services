import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { SoftwareOverview } from "@/features/own-software/components/SoftwareOverview";

export const metadata: Metadata = { title: "Eigene Software", description: "Softwareprodukte, die aus echten Anforderungen entstanden sind." };

export default function EigeneSoftwarePage() {
  return (
    <main>
      <PageHeader eyebrow="Eigene Software" title="Produkte, die aus echten Anforderungen entstehen." text="Wir entwickeln eigene Lösungen mit derselben Sorgfalt, die wir in Kundenprojekte investieren." breadcrumbs={[{ label: "Projekte", href: "/projekte" }, { label: "Eigene Software" }]} />
      <Section eyebrow="Produkte" title="Unsere Lösungen" tone="surface"><SoftwareOverview /></Section>
      <ContactCTASection />
    </main>
  );
}
