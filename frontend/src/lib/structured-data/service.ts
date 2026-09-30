import { siteConfig } from "@/config/site/site.config";
import { absoluteUrl } from "@/lib/seo/metadata";
import type { Service } from "@/types/service/service";

/** schema.org Service für eine Leistungsseite. */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/leistungen/${service.slug}`),
    areaServed: "DE",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}
