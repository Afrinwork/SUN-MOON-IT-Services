import { services } from "@/features/services/data/services";

export type NavLink = readonly [label: string, href: string];

export const mainNavigation: NavLink[] = [
  ["Leistungen", "/leistungen"],
  ["Projekte", "/projekte"],
  ["Kunden", "/kunden"],
  ["Über uns", "/ueber-uns"],
];

export const footerGroups: { title: string; links: NavLink[] }[] = [
  { title: "Leistungen", links: services.map((s) => [s.title, `/leistungen/${s.slug}`] as const) },
  { title: "Unternehmen", links: [["Projekte", "/projekte"], ["Kunden", "/kunden"], ["Über uns", "/ueber-uns"], ["Kontakt", "/kontakt"]] },
  { title: "Wissen", links: [["Ablauf", "/ablauf"], ["Technologien", "/technologien"], ["FAQ", "/faq"]] },
];

export const legalLinks: NavLink[] = [
  ["Impressum", "/impressum"],
  ["Datenschutz", "/datenschutz"],
  ["AGB", "/agb"],
];
