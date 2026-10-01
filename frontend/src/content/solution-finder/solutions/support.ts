import { LifeBuoy } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const support: Solution = {
  id: "support", label: "Ich brauche IT-Hilfe", icon: LifeBuoy, packageId: "support", serviceHref: "/it-service-hannover", blogTopic: "it-loesungen",
  reply: "Kein Problem – vieles lässt sich per Fernwartung lösen, sonst kommen wir vorbei.",
  followUp: {
    question: "Worum geht es genau?",
    answers: [
      { id: "akut", label: "Ein akutes Problem", reply: "Verstanden – dann zählt Tempo. Am schnellsten geht es per Anruf.", recommendation: "IT-Support nach Aufwand – per Fernwartung oder vor Ort in Seelze und Hannover.", packageId: "support" },
      { id: "alt", label: "Alte Software oder Technik", reply: "Veraltete Systeme sind ein Sicherheitsrisiko – gut, dass Sie es angehen.", recommendation: "Eine kurze Bestandsaufnahme mit klaren Prioritäten für die Modernisierung.", packageId: "support" },
      { id: "betreuung", label: "Laufende Betreuung", reply: "Mit fester Betreuung haben Sie einen Ansprechpartner, der Ihre Systeme kennt.", recommendation: "Betreuung & Wartung: Updates, Sicherheit und kleine Änderungen nach Absprache.", packageId: "betreuung" },
    ],
  },
  solves: ["Technische Probleme beheben", "Alte Systeme modernisieren", "Laufende Betreuung nach Bedarf"],
  steps: ["Problem kurz schildern", "Ferndiagnose oder vor Ort", "Lösung umsetzen", "Optional: laufende Betreuung"],
  prepare: ["Kurze Beschreibung des Problems", "Seit wann es auftritt", "Ein Foto oder Screenshot, falls möglich"],
  tips: ["Vieles lässt sich per Fernwartung schnell lösen.", "Regelmäßige Updates verhindern viele Probleme von vornherein."],
  duration: "Kleinere Aufgaben lassen sich oft kurzfristig erledigen.",
};
