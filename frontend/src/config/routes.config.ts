import { clientProjects } from "@/features/client-projects/data/client-projects";
import { customers } from "@/features/customers/data/customers";
import { ownSoftware } from "@/features/own-software/data/software";
import { services } from "@/features/services/data/services";
import { blogPosts, postsByTopic } from "@/content/blog";
import { blogTopics } from "@/content/blog/topics";

const staticRoutes = ["", "/leistungen", "/preise", "/projekte", "/ueber-uns", "/ablauf", "/technologien", "/faq", "/kontakt", "/blog", "/it-service-hannover", "/sprachen", "/en", "/ar", "/tr", "/ku"];

/** Alle indexierbaren Seiten – leere Listen und Rechtstexte (noindex) bleiben draußen. */
export function allRoutes(): string[] {
  return [
    ...staticRoutes,
    ...services.map((s) => `/leistungen/${s.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
    ...blogTopics.filter((t) => postsByTopic(t.slug).length).map((t) => `/blog/thema/${t.slug}`),
    ...(ownSoftware.length ? ["/projekte/eigene-software"] : []),
    ...(clientProjects.length ? ["/projekte/kundenprojekte"] : []),
    ...(customers.length ? ["/kunden"] : []),
    ...ownSoftware.map((s) => `/projekte/eigene-software/${s.slug}`),
    ...clientProjects.map((p) => `/projekte/kundenprojekte/${p.slug}`),
  ];
}
