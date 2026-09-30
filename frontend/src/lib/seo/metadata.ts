import type { Metadata } from "next";
import { siteConfig } from "@/config/site/site.config";
import type { PageSeo } from "@/types/seo/page-seo";

/** Metadaten für eine Unterseite inkl. kanonischer URL und Open Graph. */
export function pageMetadata({ path, title, description }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
