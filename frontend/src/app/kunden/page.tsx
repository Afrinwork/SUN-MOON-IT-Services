import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { Section } from "@/components/ui/section/Section";
import { CustomerGrid } from "@/features/customers/components/CustomerGrid";
import { customers } from "@/features/customers/data/customers";

export const metadata: Metadata = createMetadata({ title: "Kunden", description: "Unternehmen, die mit Sun & Moon IT Software Services ihre Abläufe digitalisiert haben.", path: "/kunden", noIndex: customers.length === 0 });

export default function KundenPage() {
  return (
    <main>
      <PageHeader eyebrow="Kunden" title="Partnerschaften, die funktionieren." text="Unternehmen, die mit uns ihre Abläufe digitalisiert und verbessert haben." breadcrumbs={[{ label: "Kunden" }]} />
      <Section eyebrow="Referenzen" title="Unsere Kunden" tone="surface"><CustomerGrid /></Section>
      <ContactCTASection />
    </main>
  );
}
