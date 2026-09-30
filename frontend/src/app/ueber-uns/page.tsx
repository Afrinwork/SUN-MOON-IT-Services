import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { AboutPageContent } from "@/features/about/components/AboutPageContent";

export const metadata: Metadata = createMetadata({ title: "Über uns", description: "Wer hinter Sun & Moon IT Software Services steht, wofür wir stehen und wie wir arbeiten.", path: "/ueber-uns" });

export default function UeberUnsPage() {
  return (
    <main>
      <AboutPageContent />
      <div className="hidden md:block"><ContactCTASection /></div>
    </main>
  );
}
