import { services } from "@/features/services/data/services";

export type NavLink = readonly [label: string, href: string];

export type NavChild = { label: string; href: string; text?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNavigation: NavItem[] = [
  {
    label: "Leistungen",
    href: "/leistungen",
    children: services.map((s) => ({ label: s.title, href: `/leistungen/${s.slug}`, text: s.short })),
  },
  {
    label: "Projekte",
    href: "/projekte",
    children: [
      { label: "Eigene Software", href: "/projekte/eigene-software", text: "Produkte, die aus echten Anforderungen entstehen." },
      { label: "Kundenprojekte", href: "/projekte/kundenprojekte", text: "Vom Problem zur passenden Lösung." },
    ],
  },
  { label: "Kunden", href: "/kunden" },
  {
    label: "Über uns",
    href: "/ueber-uns",
    children: [
      { label: "Unternehmen", href: "/ueber-uns", text: "Wer wir sind und wofür wir stehen." },
      { label: "Ablauf", href: "/ablauf", text: "So läuft ein Projekt mit uns ab." },
      { label: "Technologien", href: "/technologien", text: "Die Werkzeuge, mit denen wir arbeiten." },
      { label: "FAQ", href: "/faq", text: "Antworten auf häufige Fragen." },
    ],
  },
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
  ["Cookies", "/cookies"],
];
