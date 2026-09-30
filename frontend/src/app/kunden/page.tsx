import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { CustomerGrid } from "@/features/customers/components/CustomerGrid";

export const metadata: Metadata = { title: "Kunden", description: "Unternehmen, die mit uns zusammenarbeiten." };

export default function KundenPage() {
  return (
    <main>
      <PageHeader eyebrow="Kunden" title="Partnerschaften, die funktionieren." text="Unternehmen, die mit uns ihre Abläufe digitalisiert und verbessert haben." breadcrumbs={[{ label: "Kunden" }]} />
      <Section eyebrow="Referenzen" title="Unsere Kunden" tone="surface"><CustomerGrid /></Section>
      <ContactCTASection />
    </main>
  );
}
