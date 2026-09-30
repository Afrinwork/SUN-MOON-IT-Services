import { siteConfig } from "@/config/site/site.config";
import { themeConfig } from "@/config/theme/theme.config";
import { absoluteUrl } from "@/lib/seo/metadata";

/** schema.org ProfessionalService für die Startseite (Google-Unternehmensinfos). */
export function organizationSchema() {
  const { street, zip, city, country } = siteConfig.address;
  const sameAs = Object.values(siteConfig.social).filter((url) => url.length > 0);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl(themeConfig.logo),
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      postalCode: zip,
      addressLocality: city,
      addressCountry: country,
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
}
