export type BlogTopic = {
  slug: string;
  title: string;
  /** Kurzname für Chips, Labels und Brotkrumen. */
  shortTitle: string;
  seoTitle: string;
  description: string;
  intro: string;
  service: { label: string; href: string };
};

/** Themen-Seiten unter /blog/thema/[slug]. Reihenfolge = Anzeige-Reihenfolge. */
export const blogTopics = [
  {
    slug: "sharepoint", title: "SharePoint", shortTitle: "SharePoint",
    seoTitle: "SharePoint-Ratgeber: Intranet, Dokumente & Listen",
    description: "Tipps zu SharePoint für kleine und mittlere Unternehmen: Dokumentenablage, Intranet, Listen und Berechtigungen – verständlich erklärt.",
    intro: "Dokumente zentral ablegen, Wissen teilen, Abläufe mit Listen steuern – so holen Sie mehr aus SharePoint heraus.",
    service: { label: "Microsoft 365 & SharePoint", href: "/leistungen/microsoft-365" },
  },
  {
    slug: "webseite", title: "Webseiten", shortTitle: "Webseite",
    seoTitle: "Webseiten-Ratgeber: Firmenwebsite, Kosten & SEO",
    description: "Alles rund um die Firmenwebsite: Kosten, Aufbau, Ladezeit und wie Sie bei Google in Hannover und Umgebung gefunden werden.",
    intro: "Was eine gute Firmenwebsite ausmacht, was sie kostet und wie sie neue Anfragen bringt.",
    service: { label: "Webentwicklung", href: "/leistungen/webentwicklung" },
  },
  {
    slug: "mobile-app", title: "Mobile Apps", shortTitle: "Mobile App",
    seoTitle: "App-Ratgeber: App entwickeln lassen für Unternehmen",
    description: "App oder Web-App? Was Unternehmen vor der App-Entwicklung wissen sollten – Kosten, Plattformen, Veröffentlichung.",
    intro: "Wann sich eine eigene App lohnt, welche Art passt und wie der Weg in den App Store aussieht.",
    service: { label: "App-Entwicklung", href: "/leistungen/app-entwicklung" },
  },
  {
    slug: "it-loesungen", title: "IT-Lösungen", shortTitle: "IT-Lösungen",
    seoTitle: "IT-Lösungen für kleine Unternehmen – Ratgeber",
    description: "Praxistipps zu IT-Betreuung, IT-Dienstleistern und sicheren Systemen für kleine und mittlere Unternehmen in der Region Hannover.",
    intro: "Den richtigen IT-Partner finden, Systeme sicher betreiben und typische IT-Probleme vermeiden.",
    service: { label: "IT-Service Hannover & Seelze", href: "/it-service-hannover" },
  },
  {
    slug: "ki-automatisierung", title: "KI & Automatisierung", shortTitle: "KI & Automatisierung",
    seoTitle: "KI & Automatisierung im Mittelstand – Ratgeber",
    description: "Wo sich Automatisierung und KI im Unternehmen lohnen, wie Sie klein starten und worauf Sie beim Datenschutz achten.",
    intro: "Routinearbeit automatisieren und KI sinnvoll einsetzen – mit kleinen Schritten und klarem Nutzen.",
    service: { label: "KI & Automatisierung", href: "/leistungen/ki-automatisierung" },
  },
  {
    slug: "microsoft-365", title: "Microsoft 365", shortTitle: "Microsoft 365",
    seoTitle: "Microsoft-365-Ratgeber für kleine Unternehmen",
    description: "Teams, Outlook, Power Automate & Co.: So nutzen kleine Unternehmen Microsoft 365 besser und sicherer.",
    intro: "Mehr aus Ihrer Microsoft-365-Lizenz machen – Zusammenarbeit, Sicherheit und Automatisierung.",
    service: { label: "Microsoft 365", href: "/leistungen/microsoft-365" },
  },
  {
    slug: "unternehmensloesungen", title: "Unternehmenslösungen", shortTitle: "Unternehmenslösungen",
    seoTitle: "Individuelle Unternehmenssoftware – Ratgeber",
    description: "Wann sich individuelle Software lohnt, wie Sie Excel-Chaos ablösen und alte Systeme sicher modernisieren.",
    intro: "Individuelle Software, Kundenportale und Modernisierung – Lösungen, die zu Ihren Abläufen passen.",
    service: { label: "Softwareentwicklung", href: "/leistungen/softwareentwicklung" },
  },
] as const satisfies readonly BlogTopic[];

export type BlogTopicSlug = (typeof blogTopics)[number]["slug"];

export function getTopic(slug: BlogTopicSlug): BlogTopic {
  return blogTopics.find((t) => t.slug === slug)!;
}

export function findTopic(slug: string): BlogTopic | undefined {
  return blogTopics.find((t) => t.slug === slug);
}
