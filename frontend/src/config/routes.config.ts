import { clientProjects } from "@/features/client-projects/data/client-projects";
import { customers } from "@/features/customers/data/customers";
import { ownSoftware } from "@/features/own-software/data/software";
import { services } from "@/features/services/data/services";

const staticRoutes = ["", "/leistungen", "/projekte", "/ueber-uns", "/ablauf", "/technologien", "/faq", "/kontakt"];

/** Alle indexierbaren Seiten – leere Listen und Rechtstexte (noindex) bleiben draußen. */
export function allRoutes(): string[] {
  return [
    ...staticRoutes,
    ...services.map((s) => `/leistungen/${s.slug}`),
    ...(ownSoftware.length ? ["/projekte/eigene-software"] : []),
    ...(clientProjects.length ? ["/projekte/kundenprojekte"] : []),
    ...(customers.length ? ["/kunden"] : []),
    ...ownSoftware.map((s) => `/projekte/eigene-software/${s.slug}`),
    ...clientProjects.map((p) => `/projekte/kundenprojekte/${p.slug}`),
  ];
}
