import { PageHeader } from "@/components/layout/page/PageHeader";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { ContactCTASection } from "@/components/sections/contact-cta/ContactCTASection";
import { TechnologiesSection } from "@/components/sections/technologies/TechnologiesSection";
import { WhyUsSection } from "@/components/sections/why-us/WhyUsSection";
import { siteConfig } from "@/config/site/site.config";
import { aboutContent } from "@/content/about/about";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  path: "/ueber-uns",
  title: "Über uns",
  description: `Wer hinter ${siteConfig.name} steht.`,
});

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader eyebrow={aboutContent.eyebrow} title={`Das ist ${siteConfig.shortName}`} text={aboutContent.text} />
      <AboutSection />
      <WhyUsSection />
      <TechnologiesSection />
      <ContactCTASection />
    </>
  );
}
