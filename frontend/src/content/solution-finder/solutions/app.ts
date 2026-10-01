import { Smartphone } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const app: Solution = {
  id: "app", label: "Ich brauche eine App", icon: Smartphone, packageId: "software", serviceHref: "/leistungen/app-entwicklung", blogTopic: "mobile-app",
  reply: "Spannend! Zuerst klären wir, ob eine Store-App oder eine Web-App besser passt.",
  followUp: {
    question: "Für wen ist die App gedacht?",
    answers: [
      { id: "kunden", label: "Für meine Kunden", reply: "Kunden-Apps müssen vor allem eines sein: einfach. Jeder Klick zu viel kostet Nutzer.", recommendation: "Wir prüfen, ob eine Web-App reicht – das spart oft Store-Gebühren und Zeit. Falls nicht, planen wir die Store-App." },
      { id: "team", label: "Für mein Team", reply: "Mitarbeiter-Apps sparen Wege und Zettel – besonders unterwegs und im Außendienst.", recommendation: "Eine Web-App, die auch ohne Internet funktioniert, ist hier meist die schnellste Lösung." },
      { id: "beides", label: "Für beide", reply: "Dann planen wir eine gemeinsame Basis mit getrennten Bereichen.", recommendation: "Wir starten mit dem wichtigsten Bereich und bauen den zweiten danach aus – so sehen Sie früh Ergebnisse." },
    ],
  },
  solves: ["Kunden direkt auf dem Smartphone erreichen", "Mitarbeiter unterwegs arbeiten lassen", "Papierprozesse mobil abbilden"],
  steps: ["Ziel und Nutzer klären", "Entwurf der Bildschirme", "Entwicklung in Etappen", "Veröffentlichung"],
  prepare: ["Kurz beschreiben, was die App können soll", "Wer sie nutzt und wie oft", "Vorhandene Systeme, die angebunden werden sollen"],
  tips: ["Eine Web-App braucht keinen App Store und läuft sofort auf allen Geräten.", "Push-Nachrichten oder Kamera-Zugriff sprechen eher für eine Store-App."],
  duration: "Eine Web-App ist oft in wenigen Wochen nutzbar, eine Store-App braucht meist etwas länger.",
};
