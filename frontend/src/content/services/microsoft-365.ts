import type { ServiceContent } from "@/features/services/types/service.types";

export const microsoft365: ServiceContent = {
  intro: "Microsoft 365 sinnvoll einrichten, sicher verwalten und für Zusammenarbeit, Anwendungen, Automatisierung und Auswertungen nutzen.",
  features: [
    { title: "Zusammenarbeit", text: "Teams, SharePoint, OneDrive und Exchange klar strukturieren und gemeinsam nutzen." },
    { title: "Power Platform", text: "Mit Power Apps, Power Automate, Power BI und Dataverse Prozesse digital abbilden." },
    { title: "Administration & Sicherheit", text: "Identitäten, Geräte, Rollen und Zugriffe mit Entra ID, Intune und Defender verwalten." },
    { title: "Entwicklung & Schnittstellen", text: "Microsoft Graph, SPFx, Azure und PowerShell für individuelle Erweiterungen einsetzen." },
  ],
  benefits: [
    "Alle Dateien zentral und sicher",
    "Weniger E-Mails, mehr Übersicht",
    "Klare Rechte und Strukturen",
    "Nutzt, was Sie bereits bezahlen",
  ],
  technologies: ["Microsoft 365", "Teams", "SharePoint Online", "SharePoint Lists", "OneDrive", "Exchange Online", "Outlook", "Forms", "Planner", "Bookings", "Power Apps", "Canvas Apps", "Power Automate", "Power BI", "Dataverse", "Power Query", "DAX", "Power Fx", "Entra ID", "Intune", "Defender", "Conditional Access", "MFA", "RBAC", "Azure", "Microsoft Graph", "SPFx", "PowerShell"],
  faq: [
    { question: "Wir nutzen Microsoft 365 schon – lohnt sich Beratung trotzdem?", answer: "Ja. Häufig sind Lizenzen vorhanden, aber Strukturen, Rechte oder Automatisierungsmöglichkeiten werden nur teilweise genutzt. Wir prüfen den tatsächlichen Alltag und empfehlen nur Verbesserungen, die einen klaren Nutzen bringen." },
    { question: "Helfen Sie beim Umzug unserer Daten?", answer: "Ja. Wir planen und begleiten beispielsweise den Umzug von Netzlaufwerken nach SharePoint oder OneDrive, einschließlich Struktur, Berechtigungen, Tests und verständlicher Einführung für das Team." },
    { question: "Können bestehende Microsoft-365-Strukturen aufgeräumt werden?", answer: "Ja. Wir analysieren Teams, SharePoint-Seiten, Gruppen, Rollen und Freigaben und entwickeln eine nachvollziehbare Zielstruktur, ohne den laufenden Betrieb unnötig zu stören." },
    { question: "Entwickeln Sie auch eigene Lösungen in Microsoft 365?", answer: "Ja. Mit Power Apps, Power Automate, SharePoint, Dataverse, Power BI, SPFx und Microsoft Graph entstehen Formulare, interne Anwendungen, Workflows, Dashboards und individuelle Erweiterungen." },
    { question: "Wie werden Sicherheit und Datenschutz berücksichtigt?", answer: "Wir betrachten Zugriffsrechte, MFA, Conditional Access, Geräteverwaltung, Freigaben und Datenablage gemeinsam. Einstellungen werden passend zu Organisation, Risiko und vorhandenen Lizenzen geplant." },
  ],
};
