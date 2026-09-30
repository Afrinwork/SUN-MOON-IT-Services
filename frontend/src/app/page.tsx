import { JsonLd } from "@/components/layout/page/JsonLd";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { TechnologiesSection } from "@/components/sections/technologies/TechnologiesSection";
import { TrustSection } from "@/components/sections/trust/TrustSection";
import { WhyUsSection } from "@/components/sections/why-us/WhyUsSection";
import { organizationSchema } from "@/lib/structured-data/organization";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <ProcessSection />
      <TechnologiesSection />
      <ContactCTASection />
    </>
  );
}
