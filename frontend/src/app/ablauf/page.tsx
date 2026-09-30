import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";

export const metadata: Metadata = createMetadata({ title: "Ablauf", description: "So läuft ein Softwareprojekt mit uns ab – in sechs klaren Schritten vom ersten Gespräch bis zum Betrieb.", path: "/ablauf" });

export default function AblaufPage() {
  return (
    <main>
      <PageHeader eyebrow="Ablauf" title="So arbeiten wir." text="Ein strukturierter Prozess schafft Sicherheit, macht Entscheidungen nachvollziehbar und hält Projekte beweglich." breadcrumbs={[{ label: "Ablauf" }]} />
      <ProcessSection />
      <ContactCTASection />
    </main>
  );
}
