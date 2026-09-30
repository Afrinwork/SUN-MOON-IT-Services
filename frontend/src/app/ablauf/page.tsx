import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ProcessPageContent } from "@/features/process/components/ProcessPageContent";

export const metadata: Metadata = createMetadata({ title: "Ablauf", description: "So läuft ein Softwareprojekt mit uns ab – in sechs klaren Schritten vom ersten Gespräch bis zum Betrieb.", path: "/ablauf" });

export default function AblaufPage() {
  return (
    <main>
      <ProcessPageContent />
      <div className="hidden md:block"><ContactCTASection /></div>
    </main>
  );
}
