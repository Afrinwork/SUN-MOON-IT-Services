import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";

export const metadata: Metadata = { title: "Ablauf", description: "So läuft ein Projekt mit uns ab – vom ersten Gespräch bis zum Betrieb." };

export default function AblaufPage() {
  return (
    <main>
      <PageHeader eyebrow="Ablauf" title="So arbeiten wir." text="Ein strukturierter Prozess schafft Sicherheit, macht Entscheidungen nachvollziehbar und hält Projekte beweglich." breadcrumbs={[{ label: "Ablauf" }]} />
      <ProcessSection />
      <ContactCTASection />
    </main>
  );
}
