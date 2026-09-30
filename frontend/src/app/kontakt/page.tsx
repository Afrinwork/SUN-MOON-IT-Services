import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { Section } from "@/components/ui/section/Section";
import { ContactDetails } from "@/features/contact/components/ContactDetails";
import { ExternalFormLink } from "@/features/contact/components/ExternalFormLink";

export const metadata: Metadata = { title: "Kontakt", description: "Rufen Sie uns an – wir besprechen Ihr Vorhaben unverbindlich." };

export default function KontaktPage() {
  return (
    <main>
      <PageHeader eyebrow="Kontakt" title="Lassen Sie uns sprechen." text="Ein unverbindliches Telefonat reicht, um den nächsten sinnvollen Schritt zu finden." breadcrumbs={[{ label: "Kontakt" }]} />
      <Section eyebrow="Erreichbarkeit" title="So erreichen Sie uns" tone="surface">
        <ContactDetails />
        <ExternalFormLink />
      </Section>
    </main>
  );
}
