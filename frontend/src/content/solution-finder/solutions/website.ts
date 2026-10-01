import { Globe } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const website: Solution = {
  id: "website", label: "Ich brauche eine Website", icon: Globe, packageId: "website-start", serviceHref: "/leistungen/webentwicklung", blogTopic: "webseite",
  reply: "Eine gute Website wird gefunden, überzeugt in Sekunden und bringt Anfragen.",
  followUp: {
    question: "Haben Sie schon eine Website?",
    answers: [
      { id: "neu", label: "Nein, ich starte neu", reply: "Perfekt – dann bauen wir von Anfang an sauber und suchmaschinenfreundlich.", recommendation: "Website Start: ein klarer, schneller Auftritt mit allem Wichtigen – ideal für den Einstieg.", packageId: "website-start" },
      { id: "relaunch", label: "Ja, sie soll erneuert werden", reply: "Ein Relaunch ist eine gute Chance: Wir übernehmen, was funktioniert, und verbessern den Rest.", recommendation: "Website Business: neue Struktur, eigene Leistungsseiten und bessere Sichtbarkeit bei Google.", packageId: "website-business" },
      { id: "anpassen", label: "Ja, nur Anpassungen nötig", reply: "Dann reicht oft schon wenig Aufwand – wir prüfen zuerst, was am meisten bringt.", recommendation: "Gezielte Verbesserungen nach Aufwand – z. B. Ladezeit, Texte oder Google-Sichtbarkeit.", packageId: "support" },
    ],
  },
  solves: ["Bei Google gefunden werden", "Besucher schnell überzeugen", "Mehr Anfragen per WhatsApp und Telefon"],
  steps: ["Ziele und Inhalte klären", "Design-Entwurf", "Umsetzung mit SEO", "Livegang und Einweisung"],
  prepare: ["Ihr Logo und vorhandene Bilder", "Stichpunkte zu Ihren Leistungen", "Beispiele von Websites, die Ihnen gefallen"],
  tips: ["Schnelle Ladezeiten sind ein wichtiger Faktor für Google.", "Ein direkter Kontaktweg wie WhatsApp bringt oft mehr Anfragen als lange Formulare."],
  duration: "Eine klare Unternehmenswebsite ist oft in wenigen Wochen online.",
};
