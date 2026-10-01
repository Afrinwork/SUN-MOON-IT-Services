import { Cloud } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const microsoft365: Solution = {
  id: "microsoft-365", label: "Microsoft 365 besser nutzen", icon: Cloud, packageId: "microsoft-365", serviceHref: "/leistungen/microsoft-365", blogTopic: "microsoft-365",
  reply: "Microsoft 365 kann viel mehr als E-Mail – oft steckt das Potenzial schon in Ihrer Lizenz.",
  followUp: {
    question: "Nutzen Sie Microsoft 365 bereits?",
    answers: [
      { id: "nein", label: "Noch nicht", reply: "Dann richten wir es von Anfang an sauber ein – mit klaren Strukturen und sicheren Zugängen.", recommendation: "Microsoft 365 Einrichtung: Teams, SharePoint, Rechte und MFA – inklusive kurzer Schulung." },
      { id: "basis", label: "Ja, aber nur E-Mail und Office", reply: "Da schlummert noch viel ungenutztes Potenzial in Ihrer Lizenz.", recommendation: "Wir führen Teams, SharePoint und erste Automatisierungen Schritt für Schritt ein." },
      { id: "chaos", label: "Ja, aber es ist unübersichtlich", reply: "Kommt häufig vor – mit einer klaren Struktur wird es schnell wieder übersichtlich.", recommendation: "Aufräumen und neu ordnen: Ablage, Rechte und Teams nachvollziehbar strukturieren." },
    ],
  },
  solves: ["Dateien zentral statt verstreut", "Weniger E-Mail-Chaos dank Teams", "Sichere Zugänge mit MFA"],
  steps: ["Bestand prüfen", "Struktur planen", "Einrichten und Daten umziehen", "Team kurz schulen"],
  prepare: ["Anzahl der Nutzer", "Ihre aktuelle Lizenz (falls vorhanden)", "Wo Ihre Dateien heute liegen"],
  tips: ["Die mehrstufige Anmeldung (MFA) ist eine der wichtigsten Schutzmaßnahmen.", "SharePoint und Teams sind in vielen Business-Lizenzen bereits enthalten."],
  duration: "Eine Einrichtung dauert häufig wenige Tage bis Wochen – je nach Datenmenge.",
};
