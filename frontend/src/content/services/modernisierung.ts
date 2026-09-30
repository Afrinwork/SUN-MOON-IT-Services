import type { ServiceContent } from "@/features/services/types/service.types";

export const modernisierung: ServiceContent = {
  intro: "Alte Software sicher und schrittweise modernisieren – ohne den laufenden Betrieb zu stören.",
  features: [
    { title: "Analyse", text: "Wir prüfen Technik, Code und Risiken Ihres Systems." },
    { title: "Schrittweise Erneuerung", text: "Modernisierung in kleinen Etappen statt großem Risiko." },
    { title: "Migration", text: "Daten und Funktionen sicher auf neue Technik übertragen." },
  ],
  benefits: [
    "Mehr Sicherheit durch aktuelle Technik",
    "Einfachere Wartung und Erweiterung",
    "Kein Stillstand im Betrieb",
    "Spürbar schnellere Anwendungen",
  ],
  technologies: ["Java", "Spring Boot", "TypeScript", "Docker"],
  faq: [
    { question: "Müssen wir alles neu entwickeln?", answer: "Nein. Meist ist eine schrittweise Modernisierung sinnvoller und günstiger." },
    { question: "Läuft unser System währenddessen weiter?", answer: "Ja. Wir planen so, dass Ihr Betrieb ungestört weiterläuft." },
  ],
};
