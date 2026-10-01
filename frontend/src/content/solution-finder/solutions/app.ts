import { Smartphone } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const app: Solution = {
  id: "app", label: "Ich brauche eine App", icon: Smartphone, packageId: "software", serviceHref: "/leistungen/app-entwicklung", blogTopic: "mobile-app",
  priceOptions: ["software", "betreuung"], related: ["webentwicklung", "softwareentwicklung"],
  reply: "Spannend! Zuerst klären wir, ob eine Store-App oder eine Web-App besser passt.",
  followUps: [
    {
      id: "nutzer", question: "Für wen ist die App gedacht?",
      answers: [
        { id: "kunden", label: "Für meine Kunden", reply: "Kunden-Apps müssen vor allem eines sein: einfach. Jeder Klick zu viel kostet Nutzer.", recommendation: "Wir prüfen, ob eine Web-App reicht – das spart oft Store-Gebühren und Zeit. Falls nicht, planen wir die Store-App." },
        { id: "team", label: "Für mein Team", reply: "Mitarbeiter-Apps sparen Wege und Zettel – besonders unterwegs.", recommendation: "Eine Web-App, die auch ohne Internet funktioniert, ist hier meist die schnellste Lösung." },
        { id: "beides", label: "Für beide", reply: "Dann planen wir eine gemeinsame Basis mit getrennten Bereichen.", recommendation: "Wir starten mit dem wichtigsten Bereich und bauen den zweiten danach aus – so sehen Sie früh Ergebnisse." },
      ],
    },
    {
      id: "funktion", question: "Welche Funktion ist am wichtigsten?",
      answers: [
        { id: "termine", label: "Termine und Buchungen", reply: "Ein Klassiker – und ein echter Zeitsparer.", extra: "Buchungen mit automatischer Bestätigung und Erinnerung." },
        { id: "fotos", label: "Fotos und Dokumente erfassen", reply: "Ideal für Außendienst und Baustellen.", extra: "Erfassung per Kamera – direkt dem richtigen Auftrag zugeordnet." },
        { id: "push", label: "Benachrichtigungen", reply: "Push-Nachrichten sprechen eher für eine Store-App.", extra: "Push-Benachrichtigungen für wichtige Neuigkeiten und Status-Updates." },
        { id: "daten", label: "Daten aus unseren Systemen", reply: "Dann ist die Anbindung der wichtigste Teil.", extra: "Anbindung an Ihre vorhandenen Programme über sichere Schnittstellen." },
      ],
    },
  ],
  solves: ["Kunden direkt auf dem Smartphone erreichen", "Mitarbeiter unterwegs arbeiten lassen", "Papierprozesse mobil abbilden"],
  steps: ["Ziel und Nutzer klären", "Entwurf der Bildschirme", "Entwicklung in Etappen", "Veröffentlichung"],
  prepare: ["Kurz beschreiben, was die App können soll", "Wer sie nutzt und wie oft", "Vorhandene Systeme, die angebunden werden sollen"],
  tips: ["Eine Web-App braucht keinen App Store und läuft sofort auf allen Geräten.", "Push-Nachrichten oder Kamera-Zugriff sprechen eher für eine Store-App."],
  duration: "Eine Web-App ist oft in wenigen Wochen nutzbar, eine Store-App braucht meist etwas länger.",
};
