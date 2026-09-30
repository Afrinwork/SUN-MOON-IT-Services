import type { ServiceContent } from "@/features/services/types/service.types";

export const webentwicklung: ServiceContent = {
  intro: "Schnelle, moderne Websites, die Ihr Unternehmen klar präsentieren und neue Anfragen bringen.",
  features: [
    { title: "Unternehmenswebsites", text: "Ein klarer Auftritt mit Ihren Leistungen, Referenzen und Kontaktwegen." },
    { title: "Landingpages", text: "Fokussierte Seiten für Kampagnen, Produkte oder Stellenangebote." },
    { title: "Webanwendungen", text: "Portale und Tools, die direkt im Browser laufen." },
  ],
  benefits: [
    "Schnelle Ladezeiten auf allen Geräten",
    "Suchmaschinenfreundlich aufgebaut",
    "Inhalte später einfach erweiterbar",
    "Barrierearm und datenschutzbewusst umgesetzt",
  ],
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  faq: [
    { question: "Wie lange dauert eine neue Website?", answer: "Das hängt vom Umfang ab. Eine klare Unternehmenswebsite ist oft in wenigen Wochen online – den Zeitplan legen wir vorab gemeinsam fest." },
    { question: "Kann ich Inhalte später selbst ändern?", answer: "Ja. Auf Wunsch planen wir die Website so, dass Texte und Bilder einfach angepasst werden können." },
    { question: "Kümmert ihr euch auch um Hosting und Domain?", answer: "Ja. Wir richten Hosting und Domain ein und halten die Seite technisch aktuell." },
  ],
};
