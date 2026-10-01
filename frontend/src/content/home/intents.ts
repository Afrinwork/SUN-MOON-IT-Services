import { Building2, Cloud, Globe, Rocket, Smartphone, Sparkles, type LucideIcon } from "lucide-react";

export type Intent = { title: string; text: string; href: string; icon: LucideIcon };

/** „Was dürfen wir für Sie umsetzen?“ – Besucher wählen ihr Anliegen und landen direkt bei der passenden Lösung. */
export const intentTitle = "Was dürfen wir für Sie umsetzen?";

export const intents: Intent[] = [
  { title: "Ich habe eine Idee", text: "Von der Idee zum fertigen digitalen Produkt.", href: "/kontakt", icon: Rocket },
  { title: "Ich habe ein Unternehmen", text: "Prozesse digitalisieren und automatisieren.", href: "/leistungen/softwareentwicklung", icon: Building2 },
  { title: "Ich brauche eine App", text: "Individuelle iOS-/Android-Lösungen.", href: "/leistungen/app-entwicklung", icon: Smartphone },
  { title: "Ich brauche eine Website", text: "Moderne Unternehmenswebsites und Web Apps.", href: "/leistungen/webentwicklung", icon: Globe },
  { title: "Ich nutze Microsoft 365", text: "SharePoint, Power Platform und Automatisierung.", href: "/leistungen/microsoft-365", icon: Cloud },
  { title: "Ich möchte KI nutzen", text: "KI sinnvoll ins Unternehmen integrieren.", href: "/leistungen/ki-automatisierung", icon: Sparkles },
];
