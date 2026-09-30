import type { IconName } from "@/components/ui/icons/Icon";

export const whyUsContent = {
  eyebrow: "Warum wir",
  title: "Technik, auf die Sie sich verlassen können",
  items: [
    { icon: "users", title: "Direkter Kontakt", text: "Sie sprechen mit den Entwicklern – ohne Umwege über Vertrieb oder Hotline." },
    { icon: "shield", title: "Sicherheit zuerst", text: "Sichere Architektur und Datenschutz sind bei uns Standard, kein Aufpreis." },
    { icon: "gauge", title: "Moderne Technik", text: "Bewährte, aktuelle Technologien statt kurzlebiger Trends." },
    { icon: "fileText", title: "Transparente Preise", text: "Klare Angebote und nachvollziehbare Aufwände – ohne versteckte Kosten." },
  ] satisfies { icon: IconName; title: string; text: string }[],
};
