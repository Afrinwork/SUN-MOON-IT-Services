import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { TechnologyPageContent } from "@/features/technologies/components/TechnologyPageContent";

export const metadata: Metadata = createMetadata({ title: "Technologien", description: "Microsoft 365, Azure, Java, React, iOS- und Android-Apps, SharePoint, Power Platform, SQL, Automatisierung und IT-Administration.", path: "/technologien" });

export default function TechnologienPage() {
  return (
    <main>
      <TechnologyPageContent />
      <div className="hidden md:block"><ContactCTASection /></div>
    </main>
  );
}
