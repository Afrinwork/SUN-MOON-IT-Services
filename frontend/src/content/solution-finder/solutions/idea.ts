import { Rocket } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const idea: Solution = {
  id: "idee", label: "Ich habe eine Idee", icon: Rocket, packageId: "software", serviceHref: "/leistungen/softwareentwicklung", blogTopic: "unternehmensloesungen",
  priceOptions: ["software", "website-start", "betreuung"], related: ["app-entwicklung", "webentwicklung"],
  reply: "Spannend! Aus einer Idee wird ein gutes Produkt, wenn man klein startet und früh testet.",
  followUps: [
    {
      id: "stand", question: "Wie weit ist Ihre Idee schon?",
      answers: [
        { id: "idee", label: "Erst eine Idee", reply: "Der beste Zeitpunkt – jetzt lassen sich Fehler noch günstig vermeiden.", recommendation: "Ein gemeinsames Ideen-Gespräch: Wir schärfen Ziel, Zielgruppe und die wichtigsten Funktionen." },
        { id: "skizzen", label: "Skizzen oder Notizen vorhanden", reply: "Sehr gut – damit können wir direkt einen klickbaren Entwurf erstellen.", recommendation: "Ein klickbarer Prototyp, den Sie testen und zeigen können, bevor entwickelt wird." },
        { id: "prototyp", label: "Es gibt schon einen Prototyp", reply: "Super – dann geht es darum, daraus ein stabiles Produkt zu machen.", recommendation: "Wir prüfen den Prototyp und entwickeln daraus eine erste stabile Version (MVP)." },
      ],
    },
    {
      id: "zielgruppe", question: "Wer soll Ihr Produkt nutzen?",
      answers: [
        { id: "b2c", label: "Endkunden", reply: "Dann zählt eine besonders einfache Bedienung.", extra: "Fokus auf einfache Bedienung – getestet mit echten Nutzern." },
        { id: "b2b", label: "Andere Unternehmen", reply: "Dann sind Rechte, Rollen und Schnittstellen besonders wichtig.", extra: "Rollen, Rechte und Schnittstellen für Geschäftskunden von Anfang an mitgedacht." },
        { id: "intern", label: "Mein eigenes Team", reply: "Interne Tools bringen oft am schnellsten messbaren Nutzen.", extra: "Ein internes Werkzeug, das genau zu Ihren Abläufen passt." },
      ],
    },
  ],
  solves: ["Idee in klare Funktionen übersetzen", "Früh testen, bevor viel Geld fließt", "Technik passend zum Budget wählen"],
  steps: ["Idee gemeinsam schärfen", "Klickbarer Entwurf", "Erste Version (MVP)", "Testen und ausbauen"],
  prepare: ["Was Ihr Produkt löst – in zwei, drei Sätzen", "Wer Ihre Zielgruppe ist", "Vorhandene Skizzen oder Notizen"],
  tips: ["Eine kleine erste Version bringt schneller echtes Feedback als ein großes Projekt.", "Sprechen Sie uns gern auf eine Vertraulichkeitsvereinbarung an."],
  duration: "Eine erste Version entsteht je nach Umfang in einigen Wochen bis wenigen Monaten.",
};
