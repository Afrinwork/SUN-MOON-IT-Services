import { Sparkles } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const ai: Solution = {
  id: "ki", label: "KI im Unternehmen einsetzen", icon: Sparkles, packageId: "software", serviceHref: "/leistungen/ki-automatisierung", blogTopic: "ki-automatisierung",
  priceOptions: ["software", "microsoft-365", "support"], related: ["microsoft-365", "softwareentwicklung"],
  reply: "KI lohnt sich dort, wo Routine Zeit frisst. Wir starten mit einem kleinen Pilot und prüfen den Nutzen.",
  followUps: [
    {
      id: "einsatz", question: "Wofür möchten Sie KI einsetzen?",
      answers: [
        { id: "texte", label: "Texte und E-Mails", reply: "KI liefert gute Entwürfe – Sie behalten die Kontrolle über das Ergebnis.", recommendation: "Einrichtung eines KI-Assistenten (z. B. Microsoft Copilot) mit klaren Regeln für Ihr Team.", packageId: "microsoft-365" },
        { id: "dokumente", label: "Dokumente auswerten", reply: "Rechnungen, Verträge oder Anfragen lassen sich so deutlich schneller erfassen.", recommendation: "Ein Pilot zur automatischen Auswertung Ihrer häufigsten Dokumente." },
        { id: "ablaeufe", label: "Abläufe automatisieren", reply: "Automatisierung plus KI spart in der Regel am meisten Zeit.", recommendation: "Ein automatisierter Ablauf, der KI nur dort nutzt, wo sie echten Mehrwert bringt." },
      ],
    },
    {
      id: "daten", question: "Wie sensibel sind die Daten?",
      answers: [
        { id: "sensibel", label: "Sehr sensibel", reply: "Dann wählen wir Lösungen mit besonders strengen Datenschutz-Optionen.", extra: "Datenschutz zuerst: Nur Dienste, die zu sensiblen Daten passen – vorab geprüft." },
        { id: "normal", label: "Normale Geschäftsdaten", reply: "Dann gibt es eine breite Auswahl an passenden Werkzeugen.", extra: "Auswahl des Werkzeugs nach Nutzen, Kosten und Datenschutz." },
        { id: "unklar", label: "Weiß ich nicht genau", reply: "Kein Problem – das klären wir gemeinsam vorab.", extra: "Gemeinsame Einordnung, welche Daten wie verarbeitet werden dürfen." },
      ],
    },
  ],
  solves: ["Routinearbeit automatisieren", "Texte und Dokumente schneller bearbeiten", "KI datenschutzbewusst einsetzen"],
  steps: ["Passenden Einsatzfall finden", "Werkzeug auswählen", "Pilot umsetzen", "Nutzen prüfen und ausbauen"],
  prepare: ["Beispiele typischer Aufgaben", "Welche Daten dabei verarbeitet werden", "Welche Programme Sie nutzen"],
  tips: ["Klären Sie bei KI immer zuerst, welche Daten verarbeitet werden dürfen.", "Ein kleiner Pilot zeigt schnell, ob sich der Einsatz lohnt."],
  duration: "Ein erster Pilot ist oft in wenigen Wochen startklar.",
};
