import { AboutSection } from "@/components/sections/about/AboutSection";
import { ClientProjectsSection } from "@/components/sections/client-projects/ClientProjectsSection";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { CustomersSection } from "@/components/sections/customers/CustomersSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { OwnSoftwareSection } from "@/components/sections/own-software/OwnSoftwareSection";
import { ProcessSection } from "@/components/sections/process/ProcessSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { TechnologiesSection } from "@/components/sections/technologies/TechnologiesSection";
import { TrustSection } from "@/components/sections/trust/TrustSection";
import { WhyUsSection } from "@/components/sections/why-us/WhyUsSection";

export default function HomePage() {
  return <main><HeroSection /><TrustSection /><ServicesSection /><OwnSoftwareSection /><ClientProjectsSection /><CustomersSection /><WhyUsSection /><ProcessSection /><TechnologiesSection /><AboutSection /><ContactCTASection /></main>;
}
