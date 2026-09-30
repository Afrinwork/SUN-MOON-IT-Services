import type { MetadataRoute } from "next";
import { allRoutes } from "@/config/routes.config";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes().map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() }));
}
