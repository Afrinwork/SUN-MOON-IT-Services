import type { ServiceContent } from "@/features/services/types/service.types";

export const kiAutomatisierung: ServiceContent = {
  intro: "Wiederkehrende Aufgaben automatisieren und KI sinnvoll einsetzen – für mehr Zeit im Alltag.",
  features: [
    { title: "Prozessautomatisierung", text: "Routineaufgaben laufen automatisch im Hintergrund." },
    { title: "KI-Assistenten", text: "Fragen beantworten, Texte entwerfen, Dokumente auswerten." },
    { title: "Berichte & Auswertungen", text: "Kennzahlen und Übersichten entstehen automatisch." },
  ],
  benefits: [
    "Spart Zeit bei Routinearbeit",
    "Weniger Fehler durch manuelle Eingaben",
    "Start mit kleinen, schnellen Schritten",
    "Datenschutz von Anfang an mitgedacht",
  ],
  technologies: ["Power Automate", "KI-Schnittstellen", "Java", "TypeScript"],
  faq: [
    { question: "Wo lohnt sich Automatisierung?", answer: "Überall, wo Aufgaben regelmäßig gleich ablaufen – etwa bei Anfragen, Rechnungen oder Berichten." },
    { question: "Sind meine Daten bei KI sicher?", answer: "Wir wählen Lösungen, die zum Datenschutz passen, und klären vorab, welche Daten verarbeitet werden." },
  ],
};
