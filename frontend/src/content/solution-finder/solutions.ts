import { Building2, Cloud, Globe, LifeBuoy, Rocket, Smartphone, Sparkles } from "lucide-react";
import type { Solution } from "@/features/solution-finder/types";

/**
 * Antworten des Lösungs-Assistenten. Alles hier ist fest hinterlegt – nichts wird erfunden.
 * Dauer-Angaben sind bewusst als Richtwerte formuliert; bei Bedarf anpassen.
 */
export const solutions: Solution[] = [
  {
    id: "idee", label: "Ich habe eine Idee", icon: Rocket, packageId: "software", serviceHref: "/leistungen/softwareentwicklung",
    reply: "Spannend! Aus einer Idee wird ein gutes Produkt, wenn man klein startet und früh testet.",
    solves: ["Idee in klare Funktionen übersetzen", "Früh testen, bevor viel Geld fließt", "Technik passend zum Budget wählen"],
    steps: ["Idee gemeinsam schärfen", "Klickbarer Entwurf", "Erste Version (MVP)", "Testen und ausbauen"],
    duration: "Eine erste Version entsteht je nach Umfang in einigen Wochen bis wenigen Monaten.",
  },
  {
    id: "unternehmen", label: "Abläufe im Unternehmen verbessern", icon: Building2, packageId: "software", serviceHref: "/leistungen/softwareentwicklung",
    reply: "Gute Nachricht: Viele Abläufe lassen sich mit überschaubarem Aufwand deutlich vereinfachen.",
    solves: ["Excel-Listen und Zettelwirtschaft ablösen", "Doppelte Dateneingaben vermeiden", "Abläufe automatisch anstoßen"],
    steps: ["Ablauf gemeinsam ansehen", "Größten Engpass zuerst", "Lösung umsetzen", "Team einweisen"],
    duration: "Erste spürbare Verbesserungen sind oft schon nach wenigen Wochen möglich.",
  },
  {
    id: "app", label: "Ich brauche eine App", icon: Smartphone, packageId: "software", serviceHref: "/leistungen/app-entwicklung",
    reply: "Ob Kunden-App oder Mitarbeiter-App – wir klären zuerst, ob eine Store-App oder eine Web-App besser passt.",
    solves: ["Kunden direkt auf dem Smartphone erreichen", "Mitarbeiter unterwegs arbeiten lassen", "Papierprozesse mobil abbilden"],
    steps: ["Ziel und Nutzer klären", "Entwurf der Bildschirme", "Entwicklung in Etappen", "Veröffentlichung im Store"],
    duration: "Eine Web-App ist oft in wenigen Wochen nutzbar, eine Store-App braucht meist etwas länger.",
  },
  {
    id: "website", label: "Ich brauche eine Website", icon: Globe, packageId: "website-start", serviceHref: "/leistungen/webentwicklung",
    reply: "Eine gute Website wird gefunden, überzeugt in Sekunden und bringt Anfragen – genau darauf bauen wir sie aus.",
    solves: ["Bei Google gefunden werden", "Besucher schnell überzeugen", "Mehr Anfragen per WhatsApp und Telefon"],
    steps: ["Ziele und Inhalte klären", "Design-Entwurf", "Umsetzung mit SEO", "Livegang und Einweisung"],
    duration: "Eine klare Unternehmenswebsite ist oft in wenigen Wochen online.",
  },
  {
    id: "microsoft-365", label: "Microsoft 365 besser nutzen", icon: Cloud, packageId: "microsoft-365", serviceHref: "/leistungen/microsoft-365",
    reply: "Microsoft 365 kann viel mehr als E-Mail – meist ist das Potenzial schon in Ihrer Lizenz enthalten.",
    solves: ["Dateien zentral statt verstreut", "Weniger E-Mail-Chaos dank Teams", "Sichere Zugänge mit MFA"],
    steps: ["Bestand prüfen", "Struktur planen", "Einrichten und Daten umziehen", "Team kurz schulen"],
    duration: "Eine Einrichtung dauert häufig wenige Tage bis Wochen – je nach Datenmenge.",
  },
  {
    id: "ki", label: "KI im Unternehmen einsetzen", icon: Sparkles, packageId: "software", serviceHref: "/leistungen/ki-automatisierung",
    reply: "KI lohnt sich dort, wo Routine Zeit frisst. Wir starten mit einem kleinen Pilot und messen den Nutzen.",
    solves: ["Routinearbeit automatisieren", "Texte und Dokumente schneller bearbeiten", "KI datenschutzbewusst einsetzen"],
    steps: ["Passenden Einsatzfall finden", "Werkzeug auswählen", "Pilot umsetzen", "Nutzen prüfen und ausbauen"],
    duration: "Ein erster Pilot ist oft in wenigen Wochen startklar.",
  },
  {
    id: "support", label: "Ich brauche IT-Hilfe", icon: LifeBuoy, packageId: "support", serviceHref: "/it-service-hannover",
    reply: "Kein Problem – schildern Sie kurz, was nicht funktioniert. Vieles lässt sich per Fernwartung lösen, sonst kommen wir vorbei.",
    solves: ["Technische Probleme beheben", "Alte Systeme modernisieren", "Laufende Betreuung nach Bedarf"],
    steps: ["Problem kurz schildern", "Ferndiagnose oder vor Ort", "Lösung umsetzen", "Optional: laufende Betreuung"],
    duration: "Kleinere Aufgaben lassen sich oft kurzfristig erledigen.",
  },
];
