import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { ClientProjectsSection } from "@/components/sections/client-projects/ClientProjectsSection";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { CustomersSection } from "@/components/sections/customers/CustomersSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { HomePageMotion } from "@/components/sections/home/HomePageMotion";
import { ConnectedResultsSection } from "@/components/sections/results/ConnectedResultsSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { HomeTechnologiesSection } from "@/components/sections/technologies/HomeTechnologiesSection";
import { WhyUsSection } from "@/components/sections/why-us/WhyUsSection";
import { siteConfig } from "@/config/site.config";
import { createMetadata } from "@/lib/seo/createMetadata";

export const metadata: Metadata = createMetadata({ description: siteConfig.description, path: "" });

/**
 * Bewusst schlank: klare Abschnitte im Wechsel Dunkel/Weiß.
 * Ablauf, Technologien und eigene Software haben eigene Seiten.
 */
export default function HomePage() {
  return (
    <HomePageMotion>
      <HeroSection />
      <HomeTechnologiesSection />
      <ConnectedResultsSection />
      <ServicesSection />
      <ClientProjectsSection />
      <CustomersSection />
      <WhyUsSection />
      <AboutSection />
      <ContactCTASection />
    </HomePageMotion>
  );
}
