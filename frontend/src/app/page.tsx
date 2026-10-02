import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { BlogTeaserSection } from "@/components/sections/blog-teaser/BlogTeaserSection";
import { ClientProjectsSection } from "@/components/sections/client-projects/ClientProjectsSection";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { CustomersSection } from "@/components/sections/customers/CustomersSection";
import { FinderTeaserSection } from "@/components/sections/finder-teaser/FinderTeaserSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { HomeFaqSection } from "@/components/sections/home-faq/HomeFaqSection";
import { HomePageMotion } from "@/components/sections/home/HomePageMotion";
import { MobileHomeNav } from "@/components/sections/home/MobileHomeNav";
import { PricingTeaserSection } from "@/components/sections/pricing-teaser/PricingTeaserSection";
import { RegionSection } from "@/components/sections/region/RegionSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { HomeTechnologiesSection } from "@/components/sections/technologies/HomeTechnologiesSection";
import { WhyUsSection } from "@/components/sections/why-us/WhyUsSection";
import { siteConfig } from "@/config/site.config";
import { createMetadata } from "@/lib/seo/createMetadata";

export const metadata: Metadata = createMetadata({ description: siteConfig.description, path: "" });

/**
 * Klare Abschnitte im Wechsel Hell/Dunkel. Teaser (Preise, Ratgeber, FAQ, Region)
 * zeigen nur das Wichtigste und verlinken auf die jeweilige Detailseite.
 */
export default function HomePage() {
  return (
    <HomePageMotion>
      <HeroSection />
      <MobileHomeNav />
      <ServicesSection />
      <FinderTeaserSection />
      <ClientProjectsSection />
      <PricingTeaserSection />
      <CustomersSection />
      <HomeTechnologiesSection />
      <WhyUsSection />
      <AboutSection />
      <RegionSection />
      <BlogTeaserSection />
      <HomeFaqSection />
      <ContactCTASection />
    </HomePageMotion>
  );
}
