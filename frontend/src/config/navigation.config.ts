import { blogTopics } from "@/content/blog/topics";
import { services } from "@/features/services/data/services";

export type NavLink = readonly [label: string, href: string];

export type NavChild = { label: string; href: string; text?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Hauptmenü: Solutions | Work | Digital Lab | Company | Insights – plus „Start a Project“-Button. */
export const mainNavigation: NavItem[] = [
  {
    label: "Solutions",
    href: "/leistungen",
    children: [
      ...services.map((s) => ({ label: s.title, href: `/leistungen/${s.slug}`, text: s.short })),
      { label: "Lösung finden", href: "/loesung-finden", text: "In 30 Sekunden: Ablauf, Preis und Start für Ihr Vorhaben." },
      { label: "Preise", href: "/preise", text: "Pakete und Kosten im Überblick." },
    ],
  },
  { label: "Work", href: "/projekte/kundenprojekte" },
  { label: "Digital Lab", href: "/projekte/eigene-software" },
  {
    label: "Company",
    href: "/ueber-uns",
    children: [
      { label: "Über uns", href: "/ueber-uns", text: "Wer wir sind und wofür wir stehen." },
      { label: "Ablauf", href: "/ablauf", text: "So läuft ein Projekt mit uns ab." },
      { label: "Technologien", href: "/technologien", text: "Die Werkzeuge, mit denen wir arbeiten." },
      { label: "FAQ", href: "/faq", text: "Antworten auf häufige Fragen." },
      { label: "Sprachen", href: "/sprachen", text: "Beratung auf Deutsch, Englisch, Arabisch, Türkisch und Kurdisch." },
      { label: "Kontakt", href: "/kontakt", text: "Per WhatsApp, Telefon oder E-Mail." },
    ],
  },
  {
    label: "Insights",
    href: "/blog",
    children: blogTopics.map((t) => ({ label: t.title, href: `/blog/thema/${t.slug}`, text: t.intro })),
  },
];

export const projectCta = { label: "Start a Project", href: "/kontakt" };

export const footerGroups: { title: string; links: NavLink[] }[] = [
  { title: "Leistungen", links: services.map((s) => [s.title, `/leistungen/${s.slug}`] as const) },
  { title: "Unternehmen", links: [["Preise", "/preise"], ["Projekte", "/projekte"], ["Kunden", "/kunden"], ["Über uns", "/ueber-uns"], ["IT-Service Hannover", "/it-service-hannover"], ["Kontakt", "/kontakt"]] },
  { title: "Wissen", links: [["Ablauf", "/ablauf"], ["Technologien", "/technologien"], ["Blog", "/blog"], ["FAQ", "/faq"], ["Sprachen", "/sprachen"]] },
];

export const legalLinks: NavLink[] = [
  ["Impressum", "/impressum"],
  ["Datenschutz", "/datenschutz"],
  ["AGB", "/agb"],
  ["Cookies", "/cookies"],
];
