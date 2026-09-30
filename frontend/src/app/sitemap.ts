import type { MetadataRoute } from "next";
import { staticRoutes } from "@/config/seo/seo.config";
import { projects } from "@/features/projects/data/projects";
import { services } from "@/features/services/data/services";
import { absoluteUrl } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/leistungen/${service.slug}`),
    ...projects.map((project) => `/projekte/${project.slug}`),
  ];
  return routes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
