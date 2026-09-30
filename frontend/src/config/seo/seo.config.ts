import type { Metadata } from "next";
import { siteConfig } from "@/config/site/site.config";
import { themeConfig } from "@/config/theme/theme.config";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Webentwicklung, Software & IT-Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: { icon: themeConfig.favicon },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true, email: false, address: false },
};

/** Statische Seiten für sitemap.xml (dynamische Seiten ergänzt sitemap.ts). */
export const staticRoutes = [
  "/",
  "/leistungen",
  "/projekte",
  "/ueber-uns",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/agb",
] as const;
