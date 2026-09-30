import { PageHeader } from "@/components/layout/page/PageHeader";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { servicesOverviewContent } from "@/content/services/overview";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  path: "/leistungen",
  title: "Leistungen",
  description: "Webentwicklung, App-Entwicklung, Softwareentwicklung, Microsoft 365, KI-Automatisierung und Modernisierung.",
});

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow={servicesOverviewContent.eyebrow}
        title={servicesOverviewContent.pageTitle}
        text={servicesOverviewContent.pageText}
      />
      <ServicesSection showHeader={false} />
      <ProcessSection />
      <ContactCTASection />
    </>
  );
}
