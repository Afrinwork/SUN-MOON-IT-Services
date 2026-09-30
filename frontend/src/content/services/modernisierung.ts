import type { ServiceContent } from "@/features/services/types/service.types";

export const modernisierung: ServiceContent = {
  intro: "Bestehende Software, Websites und Systeme schrittweise erneuern – sicher, verständlich und möglichst ohne Unterbrechung.",
  features: [
    { title: "Bestand prüfen", text: "Technik, Bedienung und Risiken verständlich einordnen." },
    { title: "Gezielt verbessern", text: "Die größten Engpässe zuerst lösen." },
    { title: "Sicher übertragen", text: "Daten und wichtige Funktionen kontrolliert übernehmen." },
    { title: "Weiter betreiben", text: "Umstellung planen, ohne den Alltag unnötig zu stoppen." },
  ],
  benefits: [
    "Mehr Sicherheit durch aktuelle Technik",
    "Einfachere Wartung und Erweiterung",
    "Kein Stillstand im Betrieb",
    "Spürbar schnellere Anwendungen",
  ],
  technologies: ["Java", "Spring Boot", "TypeScript", "React", "Next.js", "REST APIs", "SQL Server", "Docker", "Azure", "CI/CD"],
  faq: [
    { question: "Müssen wir alles neu entwickeln?", answer: "Nein. Häufig können gute Teile bleiben. Wir erneuern zuerst dort, wo Risiko oder Aufwand am größten sind." },
    { question: "Kann unser System währenddessen weiterlaufen?", answer: "In vielen Fällen ja. Die Umstellung wird in kontrollierte Schritte geteilt und vorab getestet." },
    { question: "Was passiert mit unseren Daten?", answer: "Daten werden geprüft, gesichert und testweise übertragen, bevor die endgültige Umstellung erfolgt." },
    { question: "Womit beginnt eine Modernisierung?", answer: "Mit einer kompakten Bestandsaufnahme. Danach erhalten Sie klare Prioritäten und einen realistischen nächsten Schritt." },
  ],
};
