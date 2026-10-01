import { Building2 } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

export const business: Solution = {
  id: "unternehmen", label: "Abläufe im Unternehmen verbessern", icon: Building2, packageId: "software", serviceHref: "/leistungen/softwareentwicklung", blogTopic: "unternehmensloesungen",
  priceOptions: ["software", "microsoft-365", "betreuung"], related: ["ki-automatisierung", "microsoft-365"],
  reply: "Gute Nachricht: Viele Abläufe lassen sich mit überschaubarem Aufwand deutlich vereinfachen.",
  followUps: [
    {
      id: "problem", question: "Wo hakt es aktuell am meisten?",
      answers: [
        { id: "excel", label: "Excel-Listen und Papier", reply: "Ein Klassiker – und gut lösbar. Danach arbeiten alle mit denselben, aktuellen Daten.", recommendation: "Eine eigene Web-Anwendung ersetzt die Listen – mit Rechten, automatischen Prüfungen und Auswertungen." },
        { id: "programme", label: "Zu viele einzelne Programme", reply: "Dann verbinden wir Ihre Systeme, statt alles neu zu bauen.", recommendation: "Schnittstellen zwischen Ihren Programmen: Daten fließen automatisch, ohne Abtippen." },
        { id: "handarbeit", label: "Viel manuelle Routinearbeit", reply: "Hier steckt oft das größte Sparpotenzial im ganzen Unternehmen.", recommendation: "Automatisierte Abläufe – z. B. mit Power Automate oder einer kleinen eigenen Lösung.", packageId: "microsoft-365" },
      ],
    },
    {
      id: "bereich", question: "Welcher Bereich ist betroffen?",
      answers: [
        { id: "buero", label: "Verwaltung und Büro", reply: "Dort lassen sich Routinen besonders gut vereinfachen.", extra: "Fokus auf Ablage, Freigaben und wiederkehrende Büroaufgaben." },
        { id: "vertrieb", label: "Vertrieb und Kunden", reply: "Mehr Übersicht über Kunden bringt direkt mehr Umsatz.", extra: "Kunden, Angebote und Anfragen übersichtlich an einem Ort." },
        { id: "aussendienst", label: "Lager, Technik oder Außendienst", reply: "Dann denken wir mobil – direkt vom Smartphone aus.", extra: "Mobile Erfassung vor Ort, z. B. Aufträge, Fotos und Unterschriften." },
      ],
    },
  ],
  solves: ["Excel-Listen und Zettelwirtschaft ablösen", "Doppelte Dateneingaben vermeiden", "Abläufe automatisch anstoßen"],
  steps: ["Ablauf gemeinsam ansehen", "Größten Engpass zuerst", "Lösung umsetzen", "Team einweisen"],
  prepare: ["Kurze Beschreibung des Ablaufs", "Welche Programme Sie heute nutzen", "Wer im Team damit arbeitet"],
  tips: ["Starten Sie mit dem Ablauf, der am häufigsten vorkommt – dort spart man am meisten.", "Bestehende Programme können meist weiter genutzt und angebunden werden."],
  duration: "Erste spürbare Verbesserungen sind oft schon nach wenigen Wochen möglich.",
};
