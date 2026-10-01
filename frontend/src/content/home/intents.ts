import { Building2, Cloud, Globe, Rocket, Smartphone, Sparkles, type LucideIcon } from "lucide-react";

export type Intent = { title: string; text: string; href: string; icon: LucideIcon };

/** „What can we build for you?“ – Besucher wählen ihr Anliegen und landen direkt bei der passenden Lösung. */
export const intentTitle = "What can we build for you?";

export const intents: Intent[] = [
  { title: "I have an idea", text: "Von der Idee zum fertigen digitalen Produkt.", href: "/kontakt", icon: Rocket },
  { title: "I have a business", text: "Prozesse digitalisieren und automatisieren.", href: "/leistungen/softwareentwicklung", icon: Building2 },
  { title: "I need an app", text: "Individuelle iOS-/Android-Lösungen.", href: "/leistungen/app-entwicklung", icon: Smartphone },
  { title: "I need a website", text: "Moderne Unternehmenswebsites und Web Apps.", href: "/leistungen/webentwicklung", icon: Globe },
  { title: "I use Microsoft 365", text: "SharePoint, Power Platform und Automatisierung.", href: "/leistungen/microsoft-365", icon: Cloud },
  { title: "I want to use AI", text: "KI sinnvoll ins Unternehmen integrieren.", href: "/leistungen/ki-automatisierung", icon: Sparkles },
];
