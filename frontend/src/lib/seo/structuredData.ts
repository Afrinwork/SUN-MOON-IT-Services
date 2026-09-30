import type { Crumb } from "@/components/ui/breadcrumb/Breadcrumb";
import type { FaqItem } from "@/components/ui/faq/FaqList";
import { siteConfig } from "@/config/site.config";

const absolute = (path: string) => `${siteConfig.url}${path}`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absolute("/brand/logos/company-logo.png"),
    image: absolute("/brand/logos/company-logo.png"),
    description: siteConfig.description,
    areaServed: { "@type": "Country", name: "Deutschland" },
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  const all = [{ label: "Start", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absolute(item.href) } : {}),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absolute(path),
    provider: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url },
    areaServed: { "@type": "Country", name: "Deutschland" },
  };
}
