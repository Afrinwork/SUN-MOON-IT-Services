import type { Service } from "@/types/service/service";

export const services = [
  {
    slug: "webentwicklung",
    title: "Webentwicklung",
    icon: "globe",
    summary: "Schnelle, barrierearme Websites und Webanwendungen, die gefunden werden.",
    intro:
      "Von der Unternehmenswebsite bis zur Webanwendung: moderne, performante Lösungen mit sauberer Architektur und Fokus auf Suchmaschinen und Nutzerfreundlichkeit.",
    benefits: ["Kurze Ladezeiten und gute Core Web Vitals", "Responsiv auf allen Geräten", "SEO-Grundlagen von Anfang an", "DSGVO-konforme Umsetzung"],
    deliverables: ["Unternehmenswebsites", "Landingpages", "Webanwendungen & Portale", "Relaunch bestehender Seiten"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "app-entwicklung",
    title: "App-Entwicklung",
    icon: "smartphone",
    summary: "Mobile Apps für iOS und Android – nativ oder plattformübergreifend.",
    intro: "Von Konzept und Prototyp über die Entwicklung bis zur Veröffentlichung in den App-Stores.",
    benefits: ["Eine Codebasis für iOS und Android", "Intuitive Bedienung", "Anbindung an bestehende Systeme", "Begleitung bis in den Store"],
    deliverables: ["Cross-Platform-Apps", "Progressive Web Apps", "Prototypen & MVPs", "Wartung & Updates"],
    technologies: ["React Native", "Flutter", "PWA", "REST APIs"],
  },
  {
    slug: "softwareentwicklung",
    title: "Softwareentwicklung",
    icon: "code",
    summary: "Individuelle Software, die exakt zu Ihren Prozessen passt.",
    intro:
      "Maßgeschneiderte Backend-Systeme, Schnittstellen und Business-Anwendungen – sicher, wartbar und skalierbar.",
    benefits: ["Passgenau statt Kompromiss", "Saubere, dokumentierte Architektur", "Sicherheit nach aktuellem Stand", "Langfristig wartbar"],
    deliverables: ["Business-Anwendungen", "APIs & Schnittstellen", "Backend-Systeme", "Datenintegration"],
    technologies: ["Java", "Spring Boot", "TypeScript", "Docker"],
  },
  {
    slug: "microsoft-365",
    title: "Microsoft 365",
    icon: "cloud",
    summary: "Einrichtung, Migration und Betreuung Ihrer Microsoft-365-Umgebung.",
    intro: "Sichere Einrichtung, Datenmigration und reibungsloser Alltag mit Teams, SharePoint und Exchange.",
    benefits: ["Sichere Konfiguration", "Reibungslose Migration", "Schulung Ihres Teams", "Laufende Betreuung"],
    deliverables: ["Tenant-Einrichtung", "E-Mail-Migration", "Teams & SharePoint", "Sicherheit & Richtlinien"],
    technologies: ["Exchange Online", "Teams", "SharePoint", "Entra ID"],
  },
  {
    slug: "ki-automatisierung",
    title: "KI & Automatisierung",
    icon: "sparkles",
    summary: "Wiederkehrende Aufgaben automatisieren und KI sinnvoll einsetzen.",
    intro:
      "Wir finden Abläufe mit Automatisierungspotenzial und setzen pragmatische Lösungen um – von Workflows bis zu KI-gestützten Assistenten.",
    benefits: ["Weniger manuelle Arbeit", "Weniger Fehler", "Schnellere Abläufe", "Datenschutz im Blick"],
    deliverables: ["Prozessanalyse", "Workflow-Automatisierung", "KI-Assistenten", "Dokumentenverarbeitung"],
    technologies: ["Power Automate", "n8n", "LLM-APIs", "Python"],
  },
  {
    slug: "modernisierung",
    title: "Modernisierung",
    icon: "refresh",
    summary: "Altsysteme schrittweise modernisieren – ohne Betriebsunterbrechung.",
    intro: "Wir analysieren Bestandssysteme und überführen sie schrittweise in eine moderne, wartbare Architektur.",
    benefits: ["Schrittweise statt Big Bang", "Weniger technische Schulden", "Bessere Performance", "Zukunftssichere Basis"],
    deliverables: ["Code- & Architektur-Analyse", "Migration in die Cloud", "Refactoring", "Containerisierung"],
    technologies: ["Docker", "Spring Boot", "Next.js", "CI/CD"],
  },
] as const satisfies readonly Service[];
