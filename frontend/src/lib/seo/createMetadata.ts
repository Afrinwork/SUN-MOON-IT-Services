import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

type Options = {
  /** Seitentitel ohne Firmenname – der wird über das Template im Root-Layout ergänzt. */
  title?: string;
  description: string;
  path: string;
  /** Für Seiten ohne eigenen Inhalt (z. B. leere Listen) oder Rechtstexte. */
  noIndex?: boolean;
};

const ogImage = { url: "/brand/logos/company-logo.png", width: 1774, height: 887, alt: siteConfig.name };

export function createMetadata({ title, description, path, noIndex = false }: Options): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  return {
    // Ohne eigenen Titel greift der Standardtitel aus dem Root-Layout (title: undefined würde ihn löschen).
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      title: fullTitle,
      description,
      url: path || "/",
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
