import { Sparkles } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const ai: Solution = {
  id: "ki", label: "KI im Unternehmen einsetzen", icon: Sparkles, packageId: "software", serviceHref: "/leistungen/ki-automatisierung", blogTopic: "ki-automatisierung",
  reply: "KI lohnt sich dort, wo Routine Zeit frisst. Wir starten mit einem kleinen Pilot und prüfen den Nutzen.",
  followUp: {
    question: "Wofür möchten Sie KI einsetzen?",
    answers: [
      { id: "texte", label: "Texte und E-Mails", reply: "KI liefert gute Entwürfe – Sie behalten die Kontrolle über das Ergebnis.", recommendation: "Einrichtung eines KI-Assistenten (z. B. Microsoft Copilot) mit klaren Regeln für Ihr Team." },
      { id: "dokumente", label: "Dokumente auswerten", reply: "Rechnungen, Verträge oder Anfragen lassen sich so deutlich schneller erfassen.", recommendation: "Ein Pilot zur automatischen Auswertung Ihrer häufigsten Dokumente." },
      { id: "ablaeufe", label: "Abläufe automatisieren", reply: "Automatisierung plus KI spart in der Regel am meisten Zeit.", recommendation: "Ein automatisierter Ablauf, der KI nur dort nutzt, wo sie echten Mehrwert bringt." },
    ],
  },
  solves: ["Routinearbeit automatisieren", "Texte und Dokumente schneller bearbeiten", "KI datenschutzbewusst einsetzen"],
  steps: ["Passenden Einsatzfall finden", "Werkzeug auswählen", "Pilot umsetzen", "Nutzen prüfen und ausbauen"],
  prepare: ["Beispiele typischer Aufgaben", "Welche Daten dabei verarbeitet werden", "Welche Programme Sie nutzen"],
  tips: ["Klären Sie bei KI immer zuerst, welche Daten verarbeitet werden dürfen.", "Ein kleiner Pilot zeigt schnell, ob sich der Einsatz lohnt."],
  duration: "Ein erster Pilot ist oft in wenigen Wochen startklar.",
};
