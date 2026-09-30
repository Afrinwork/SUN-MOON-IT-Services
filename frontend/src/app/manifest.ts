import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

/** Ermöglicht „Zum Startbildschirm hinzufügen“ mit Name, Farbe und Icon. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    lang: "de",
    start_url: "/",
    display: "standalone",
    background_color: "#071d40",
    theme_color: "#071d40",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
