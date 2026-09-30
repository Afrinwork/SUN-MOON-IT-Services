import type { Project } from "@/types/project/project";

// PLATZHALTER: beschreiben Projekttypen, keine echten Kundenreferenzen.
// Vor dem Livegang durch echte Projekte (mit Freigabe der Kunden) ersetzen.
export const projects = [
  {
    slug: "unternehmenswebsite",
    title: "Unternehmenswebsite mit Top-Ladezeiten",
    category: "Webentwicklung",
    summary: "Schnelle, SEO-optimierte Website für einen regionalen Dienstleister.",
    challenge: "Die alte Website war langsam, nicht mobilfreundlich und wurde bei Google kaum gefunden.",
    solution: "Neuentwicklung mit Next.js, statisch vorgerenderten Seiten und strukturierten Daten.",
    result: "Deutlich kürzere Ladezeiten und bessere Sichtbarkeit in der lokalen Suche.",
    tags: ["Next.js", "SEO", "Tailwind CSS"],
  },
  {
    slug: "microsoft-365-migration",
    title: "Microsoft-365-Migration",
    category: "Microsoft 365",
    summary: "Umzug von E-Mail und Dateien in Microsoft 365 inklusive Teams-Einführung.",
    challenge: "Verteilte Postfächer und Dateiablagen ohne einheitliche Rechteverwaltung.",
    solution: "Schrittweise Migration, Sicherheitsrichtlinien und Schulung des Teams.",
    result: "Zentrale Zusammenarbeit in Teams und SharePoint mit klaren Berechtigungen.",
    tags: ["Exchange", "Teams", "SharePoint"],
  },
  {
    slug: "rechnungsautomatisierung",
    title: "Automatisierte Rechnungsverarbeitung",
    category: "KI & Automatisierung",
    summary: "Eingehende Rechnungen werden erkannt, ausgelesen und automatisch abgelegt.",
    challenge: "Rechnungen wurden manuell abgetippt und abgelegt – fehleranfällig und zeitraubend.",
    solution: "Workflow mit Texterkennung, Prüfregeln und automatischer Ablage.",
    result: "Spürbar weniger manueller Aufwand pro Monat.",
    tags: ["Power Automate", "KI"],
  },
] as const satisfies readonly Project[];
