export type PriceUnit = "einmalig" | "pro Monat" | "pro Stunde";

export type PricePackage = {
  id: string;
  name: string;
  audience: string;
  /** Preis in Euro („ab …“). null = „Festpreis nach Erstgespräch“. */
  priceFrom: number | null;
  unit: PriceUnit;
  includes: string[];
  highlighted?: boolean;
  serviceHref: string;
};

/**
 * Preise eintragen: bei `priceFrom` eine Zahl setzen (z. B. 1490).
 * Alle Preise netto zzgl. MwSt., sofern nicht anders angegeben – siehe `priceNote`.
 */
export const pricePackages: PricePackage[] = [
  {
    id: "website-start", name: "Website Start", audience: "Für Selbstständige und kleine Betriebe",
    priceFrom: 200, unit: "einmalig", serviceHref: "/leistungen/webentwicklung",
    includes: ["Bis zu 5 Seiten", "Für Handy, Tablet und Desktop optimiert", "Suchmaschinen-Grundlagen (SEO)", "Schnelle Ladezeiten", "Einrichtung von Domain und Hosting"],
  },
  {
    id: "website-business", name: "Website Business", audience: "Für wachsende Unternehmen", highlighted: true,
    priceFrom: 500, unit: "einmalig", serviceHref: "/leistungen/webentwicklung",
    includes: ["Eigene Seiten für jede Leistung", "Blog oder Ratgeber-Bereich", "Erweiterte SEO und lokale Sichtbarkeit", "Mehrsprachig auf Wunsch", "Einweisung zur Pflege"],
  },
  {
    id: "software", name: "Mobile-App & Software", audience: "Für individuelle Abläufe",
    priceFrom: 800, unit: "einmalig", serviceHref: "/leistungen/softwareentwicklung",
    includes: ["Analyse Ihrer Anforderungen", "Umsetzung in klaren Etappen", "Web-App, App oder interne Software", "Anbindung bestehender Systeme", "Dokumentation und Übergabe"],
  },
  {
    id: "microsoft-365", name: "SharePoint & Microsoft 365", audience: "Für Teams, die besser zusammenarbeiten wollen",
    priceFrom: 300, unit: "einmalig", serviceHref: "/leistungen/microsoft-365",
    includes: ["Teams und SharePoint einrichten", "Rechte und Sicherheit (MFA)", "Datenumzug von Netzlaufwerken", "Kurze Schulung fürs Team"],
  },
  {
    id: "betreuung", name: "Betreuung & Wartung", audience: "Für Ruhe nach dem Start",
    priceFrom: 49, unit: "pro Monat", serviceHref: "/kontakt",
    includes: ["Updates und Sicherheitspflege", "Kleine Änderungen nach Absprache", "Überwachung und Backups", "Fester Ansprechpartner"],
  },
  {
    id: "support", name: "IT-Support nach Aufwand", audience: "Für einzelne Aufgaben und Fragen",
    priceFrom: 60, unit: "pro Stunde", serviceHref: "/it-service-hannover",
    includes: ["Hilfe bei Einzelaufgaben", "Fernwartung oder vor Ort", "Abrechnung nach tatsächlichem Aufwand", "Flexibel buchbar"],
  },
];

export const priceNote = "Alle Preise netto zzgl. gesetzlicher MwSt. Sie erhalten vor Projektstart immer ein schriftliches Angebot.";
