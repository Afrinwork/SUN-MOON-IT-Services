import { clientProjects } from "@/features/client-projects/data/client-projects";
import { ownSoftware } from "@/features/own-software/data/software";
import { services } from "@/features/services/data/services";

const staticRoutes = [
  "", "/leistungen", "/projekte", "/projekte/eigene-software", "/projekte/kundenprojekte",
  "/kunden", "/ueber-uns", "/ablauf", "/technologien", "/faq", "/kontakt",
  "/impressum", "/datenschutz", "/agb",
];

export function allRoutes(): string[] {
  return [
    ...staticRoutes,
    ...services.map((s) => `/leistungen/${s.slug}`),
    ...ownSoftware.map((s) => `/projekte/eigene-software/${s.slug}`),
    ...clientProjects.map((p) => `/projekte/kundenprojekte/${p.slug}`),
  ];
}
