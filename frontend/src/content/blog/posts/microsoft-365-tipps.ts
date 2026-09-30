import type { BlogPost } from "@/features/blog/types/blog.types";

export const microsoft365Tipps: BlogPost = {
  slug: "microsoft-365-kleine-unternehmen",
  title: "Microsoft 365 im kleinen Unternehmen: 5 Funktionen, die Zeit sparen",
  description: "Teams, SharePoint, Power Automate & Co.: fünf Microsoft-365-Funktionen, die kleine Unternehmen oft bezahlen, aber kaum nutzen – mit konkreten Beispielen.",
  topic: "microsoft-365",
  published: "2026-09-30",
  readingMinutes: 4,
  sections: [
    {
      heading: "Bezahlt, aber kaum genutzt",
      paragraphs: [
        "Viele Unternehmen nutzen Microsoft 365 nur für E-Mail und Word. Dabei steckt in der Lizenz deutlich mehr – Funktionen, die Abläufe vereinfachen und Suchzeiten verkürzen.",
      ],
    },
    {
      heading: "Die 5 Funktionen im Überblick",
      paragraphs: ["Diese Werkzeuge bringen im Alltag besonders schnell Nutzen:"],
      list: [
        "SharePoint: alle Dokumente zentral statt auf Netzlaufwerken und USB-Sticks",
        "Teams: Chats und Dateien pro Projekt statt langer E-Mail-Ketten",
        "Power Automate: Freigaben und Benachrichtigungen automatisch",
        "Microsoft Forms: Umfragen und einfache Anfragen ohne Zusatz-Tool",
        "Mehrstufige Anmeldung: mehr Sicherheit mit wenigen Klicks",
      ],
    },
    {
      heading: "Ein Beispiel aus der Praxis",
      paragraphs: [
        "Urlaubsanträge per E-Mail gehen schnell unter. Mit einer SharePoint-Liste und Power Automate landet jeder Antrag automatisch bei der richtigen Person, die Entscheidung wird dokumentiert und der Kalender aktualisiert.",
      ],
    },
    {
      heading: "Der richtige Einstieg",
      paragraphs: [
        "Starten Sie mit einem Ablauf, der heute am meisten nervt. Wir richten ihn gemeinsam ein, schulen Ihr Team kurz und bauen dann Schritt für Schritt aus.",
      ],
    },
  ],
};
