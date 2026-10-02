/**
 * Zusatzfunktionen, die der Assistent im Freitext erkennt („Ich möchte einen Online-Shop …“).
 * Preise sind grobe Richtwerte in Euro netto (von–bis) und kommen zur ungefähren Gesamtsumme dazu.
 * Bitte an die eigenen Preise anpassen. Stichwörter klein schreiben; sie zählen am Wortanfang („termin“ findet „Terminbuchung“).
 */
export type FinderFeature = { id: string; label: string; keywords: string[]; from: number; to: number };

export const finderFeatures: FinderFeature[] = [
  { id: "shop", label: "Online-Shop", keywords: ["shop", "verkaufen", "produkte", "warenkorb", "bestell"], from: 400, to: 1200 },
  { id: "zahlung", label: "Online bezahlen", keywords: ["zahlung", "bezahl", "paypal", "stripe", "kreditkarte"], from: 150, to: 400 },
  { id: "termine", label: "Terminbuchung", keywords: ["termin", "buchung", "buchen", "kalender", "reservier"], from: 150, to: 400 },
  { id: "login", label: "Login / Kundenbereich", keywords: ["login", "anmeld", "kundenbereich", "konto", "registrier", "mitglied", "portal"], from: 300, to: 900 },
  { id: "sprachen", label: "Weitere Sprachen", keywords: ["sprach", "englisch", "türkisch", "arabisch", "kurdisch", "übersetz"], from: 100, to: 300 },
  { id: "schnittstelle", label: "Anbindung an andere Programme", keywords: ["schnittstelle", "api", "anbind", "datev", "lexoffice", "sevdesk", "warenwirtschaft", "erp", "crm"], from: 250, to: 800 },
  { id: "verwaltung", label: "Verwaltung mit Datenbank", keywords: ["datenbank", "verwalt", "lager", "kundendaten", "kundenverwalt", "auftr", "excel", "liste"], from: 300, to: 900 },
  { id: "auswertung", label: "Auswertungen & Dashboard", keywords: ["auswert", "statistik", "dashboard", "bericht", "report", "power bi"], from: 200, to: 600 },
  { id: "rechnungen", label: "Rechnungen / PDF erstellen", keywords: ["rechnung", "pdf", "angebot", "lieferschein"], from: 150, to: 450 },
  { id: "push", label: "Push-Nachrichten", keywords: ["push", "benachrichtig", "erinner"], from: 150, to: 400 },
  { id: "karte", label: "Karte / Standort", keywords: ["karte", "standort", "gps", "maps", "route"], from: 100, to: 300 },
  { id: "chat", label: "Chat oder KI-Assistent", keywords: ["chat", "chatbot", "ki", "openai", "gpt", "assistent"], from: 250, to: 800 },
  { id: "automatisierung", label: "Automatische Abläufe", keywords: ["automat", "power automate", "workflow", "freigabe"], from: 150, to: 500 },
  { id: "blog", label: "Blog / News", keywords: ["blog", "news", "neuigkeit", "artikel"], from: 100, to: 250 },
  { id: "newsletter", label: "Newsletter", keywords: ["newsletter", "mailing"], from: 80, to: 200 },
  { id: "logo", label: "Logo / Design", keywords: ["logo", "corporate", "farben", "branding"], from: 100, to: 350 },
  { id: "texte", label: "Texte schreiben", keywords: ["text", "inhalte schreiben", "formulier"], from: 100, to: 300 },
  { id: "umzug", label: "Daten übernehmen", keywords: ["umzug", "übernehm", "import", "migration", "alte daten"], from: 100, to: 400 },
];
