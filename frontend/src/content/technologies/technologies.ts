import type { TechnologyCategory } from "@/features/technologies/types/technology.types";

export const coreTechnologies = [
  "Java",
  "JavaScript",
  "ReactJS",
  "TypeScript",
  "SharePoint",
  "Power Apps",
  "Power Automate",
  "Power BI",
  "Microsoft Azure",
  "SQL Server",
];

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "microsoft-cloud",
    title: "Microsoft & Cloud",
    shortTitle: "Microsoft",
    description: "Cloud-Dienste, Zusammenarbeit und sichere Identitäten im Microsoft-Ökosystem.",
    items: ["Microsoft 365", "Microsoft Azure", "Microsoft Entra ID", "Exchange Online", "SharePoint Online", "Microsoft Teams", "Microsoft Outlook", "Microsoft Graph API", "Cloud Administration"],
  },
  {
    id: "sharepoint-power-platform",
    title: "SharePoint & Power Platform",
    shortTitle: "Power Platform",
    description: "Digitale Prozesse, interne Anwendungen und aussagekräftige Berichte aus einer Plattform.",
    items: ["SharePoint Development", "SharePoint Administration", "SharePoint Lists", "SharePoint Framework (SPFx)", "SPFx-Komponenten", "Power Apps", "Canvas Apps", "Power Automate", "Power Automate Workflows", "Power BI", "Power BI Reporting", "Microsoft Dataverse", "Power Fx"],
  },
  {
    id: "java-software",
    title: "Java & Softwareentwicklung",
    shortTitle: "Java",
    description: "Strukturierte Anwendungsentwicklung, Datenzugriff und robuste Schnittstellen.",
    items: ["Java", "Java Swing", "Spring Boot", "Objektorientierte Programmierung", "Klassen, Vererbung & Interfaces", "JPA", "JDBC", "REST", "REST APIs", "API-Integration", "Datenbankanbindung mit Java", "Debugging"],
  },
  {
    id: "web-apis",
    title: "Web, Schnittstellen & APIs",
    shortTitle: "Web & APIs",
    description: "Moderne Oberflächen und verlässliche Verbindungen zwischen Anwendungen und Diensten.",
    items: ["JavaScript", "TypeScript", "ReactJS", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JSON", "XML", "REST APIs", "Web Services", "Microsoft Graph API", "WordPress", "Anbindung externer Systeme"],
  },
  {
    id: "data-reporting",
    title: "Datenbanken & Reporting",
    shortTitle: "Daten",
    description: "Saubere Datenmodelle, sichere Anbindungen und verständliche Auswertungen.",
    items: ["SQL", "Microsoft SQL Server", "Relationale Datenbanken", "Datenmodellierung", "Datenbankverwaltung", "JDBC", "JPA", "Datenintegration", "Power Query", "DAX", "Power BI Dashboards", "Reporting", "Datenvisualisierung"],
  },
  {
    id: "automation-ai",
    title: "Automatisierung & KI-Integration",
    shortTitle: "Automation & KI",
    description: "Praktische Automatisierung und kontrollierte Einbindung externer KI-Dienste.",
    items: ["KI-/AI-Schnittstellen", "AI API Integration", "REST-basierte KI-Schnittstellen", "Integration von KI-Diensten", "Anbindung externer AI Services", "Workflow-Automatisierung", "Prozessautomatisierung", "Business Process Automation", "Geschäftsprozessdigitalisierung"],
  },
  {
    id: "administration-security",
    title: "Administration & Security",
    shortTitle: "Security",
    description: "Identitäten, Geräte und Zugriffe nachvollziehbar verwalten und absichern.",
    items: ["Microsoft-365-Administration", "Active Directory", "Microsoft Entra ID", "Microsoft Intune", "Microsoft Defender", "Conditional Access", "Multi-Factor Authentication", "Identity & Access Management", "RBAC", "Berechtigungsmanagement", "Windows Server", "Teams Administration", "Exchange Online Administration", "SharePoint Online Administration", "PowerShell"],
  },
  {
    id: "devops-tools",
    title: "DevOps & Entwicklungswerkzeuge",
    shortTitle: "DevOps",
    description: "Werkzeuge und Abläufe für reproduzierbare Entwicklung und kontrollierte Auslieferung.",
    items: ["Git", "GitHub", "Visual Studio", "Visual Studio Code", "Azure DevOps", "CI/CD", "Docker", "Vercel", "Versionsverwaltung", "Debugging", "Agile Softwareentwicklung", "Scrum"],
  },
  {
    id: "ux-processes",
    title: "Usability, UX & Prozesse",
    shortTitle: "UX & Prozesse",
    description: "Technik so strukturieren, dass Menschen sie verstehen und im Alltag sicher nutzen können.",
    items: ["Usability Testing", "Usability-Optimierung", "Benutzerzentrierte Entwicklung", "Benutzerführung", "Informationsarchitektur", "Navigationsoptimierung", "UI-Optimierung", "UX-Optimierung", "Prozessanalyse", "Prozessoptimierung", "Workflow-Optimierung", "Requirements Engineering", "User Acceptance Testing"],
  },
  {
    id: "it-management",
    title: "IT-Management & Support",
    shortTitle: "IT-Support",
    description: "Strukturierte Analyse und verlässliche Unterstützung im laufenden IT-Betrieb.",
    items: ["IT-Systemadministration", "Systemadministration", "Problem Management", "Incident Management", "ITIL-Grundlagen", "Fehleranalyse", "Troubleshooting", "Technischer Support", "Benutzerverwaltung", "Gruppenverwaltung", "Rollenverwaltung", "Sicherheits- und Zugriffsmanagement"],
  },
];
