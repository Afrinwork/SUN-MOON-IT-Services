import type { MetadataRoute } from "next";

const paths = ["", "/leistungen", "/projekte", "/kunden", "/ueber-uns", "/kontakt", "/impressum", "/datenschutz", "/agb"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `https://www.ml-it-services.de${path}`, lastModified: new Date() }));
}
