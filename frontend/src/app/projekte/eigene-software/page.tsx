import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { SoftwareOverview } from "@/features/own-software/components/SoftwareOverview";
import { ownSoftware } from "@/features/own-software/data/software";

export const metadata: Metadata = createMetadata({ title: "Eigene Software", description: "Softwareprodukte von Sun & Moon, entstanden aus echten Anforderungen im Unternehmensalltag.", path: "/projekte/eigene-software", noIndex: ownSoftware.length === 0 });

export default function EigeneSoftwarePage() {
  return (
    <main>
      <PageHeader eyebrow="Eigene Software" title="Produkte, die aus echten Anforderungen entstehen." text="Wir entwickeln eigene Lösungen mit derselben Sorgfalt, die wir in Kundenprojekte investieren." breadcrumbs={[{ label: "Projekte", href: "/projekte" }, { label: "Eigene Software" }]} />
      <Section eyebrow="Produkte" title="Unsere Lösungen" tone="surface"><SoftwareOverview /></Section>
      <ContactCTASection />
    </main>
  );
}
