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
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wilhelm-Busch-Straße 8",
      postalCode: "30926",
      addressLocality: "Seelze",
      addressCountry: "DE",
    },
    sameAs: [siteConfig.instagramUrl],
    areaServed: [...serviceAreas.map((name) => ({ "@type": "City", name })), { "@type": "Country", name: "Deutschland" }],
    knowsLanguage: ["de", "en", "ar", "tr", "ku"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

/** Orte, für die wir bei lokalen Suchen gefunden werden wollen. */
export const serviceAreas = ["Seelze", "Hannover", "Garbsen", "Wunstorf", "Ronnenberg", "Gehrden", "Barsinghausen", "Langenhagen"];

export function blogPostingSchema(post: { slug: string; title: string; description: string; published: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.published,
    inLanguage: "de-DE",
    mainEntityOfPage: absolute(`/blog/${post.slug}`),
    image: absolute("/brand/logos/company-logo.png"),
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, logo: { "@type": "ImageObject", url: absolute("/brand/logos/company-logo.png") } },
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
