import type { ServiceContent } from "@/features/services/types/service.types";

export const softwareentwicklung: ServiceContent = {
  intro: "Individuelle Software, die genau zu Ihren Abläufen passt – statt umständlicher Standardlösungen.",
  features: [
    { title: "Individuelle Anwendungen", text: "Software, die Ihre Prozesse abbildet – nicht umgekehrt." },
    { title: "Schnittstellen", text: "Systeme verbinden, damit Daten automatisch fließen." },
    { title: "Kundenportale", text: "Kunden erledigen Anfragen selbst – rund um die Uhr." },
  ],
  benefits: [
    "Weniger manuelle Arbeit und Fehler",
    "Alle Daten an einem Ort",
    "Wächst mit Ihrem Unternehmen",
    "Sauberer, wartbarer Code",
  ],
  technologies: ["Java", "Spring Boot", "TypeScript", "React"],
  faq: [
    { question: "Was kostet individuelle Software?", answer: "Das hängt vom Umfang ab. Nach einem unverbindlichen Gespräch erhalten Sie ein transparentes Angebot." },
    { question: "Könnt ihr bestehende Software erweitern?", answer: "Ja. Wir prüfen den Bestand und entwickeln ihn gezielt weiter." },
  ],
};
