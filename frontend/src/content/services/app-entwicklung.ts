import type { ServiceContent } from "@/features/services/types/service.types";

export const appEntwicklung: ServiceContent = {
  intro: "Mobile Apps für Kunden und Teams – einfach zu bedienen und auf iPhone und Android nutzbar.",
  features: [
    { title: "Kunden-Apps", text: "Services, Buchungen oder Informationen direkt aufs Smartphone." },
    { title: "Mitarbeiter-Apps", text: "Aufgaben, Zeiten und Daten unterwegs erfassen." },
    { title: "Web-Apps", text: "App-Gefühl direkt im Browser – ganz ohne App Store." },
  ],
  benefits: [
    "Eine Lösung für iPhone und Android",
    "Intuitive Bedienung ohne Schulung",
    "Anbindung an Ihre bestehenden Systeme",
    "Offline nutzbar, wo es sinnvoll ist",
  ],
  technologies: ["React", "TypeScript", "Progressive Web Apps"],
  faq: [
    { question: "Brauche ich eine App oder reicht eine Web-App?", answer: "Das klären wir gemeinsam. Oft reicht eine Web-App – sie ist günstiger und braucht keinen App Store." },
    { question: "Wer veröffentlicht die App?", answer: "Wir übernehmen die Veröffentlichung im App Store und bei Google Play." },
  ],
};
