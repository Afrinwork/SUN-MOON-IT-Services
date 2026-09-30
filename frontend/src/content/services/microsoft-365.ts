import type { ServiceContent } from "@/features/services/types/service.types";

export const microsoft365: ServiceContent = {
  intro: "Besser zusammenarbeiten mit Teams, SharePoint und automatisierten Abläufen.",
  features: [
    { title: "SharePoint & Intranet", text: "Dokumente und Wissen zentral und übersichtlich ablegen." },
    { title: "Microsoft Teams", text: "Kommunikation, Kanäle und Rechte sauber eingerichtet." },
    { title: "Power Automate", text: "Freigaben, Formulare und Benachrichtigungen automatisch." },
  ],
  benefits: [
    "Alle Dateien zentral und sicher",
    "Weniger E-Mails, mehr Übersicht",
    "Klare Rechte und Strukturen",
    "Nutzt, was Sie bereits bezahlen",
  ],
  technologies: ["Microsoft 365", "SharePoint", "Teams", "Power Automate"],
  faq: [
    { question: "Wir nutzen Microsoft 365 schon – lohnt sich das trotzdem?", answer: "Ja. Oft wird nur ein kleiner Teil genutzt. Wir zeigen, was Ihnen im Alltag wirklich hilft." },
    { question: "Helft ihr beim Umzug unserer Daten?", answer: "Ja. Wir übertragen Daten zum Beispiel von Netzlaufwerken nach SharePoint." },
  ],
};
