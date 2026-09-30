// Zentrale Firmendaten – NUR hier pflegen. Platzhalter in [eckigen Klammern] vor dem Livegang ersetzen.
// Kontakt läuft ausschließlich über Telefon und ein externes Formular (kein Mailversand, kein Login).
export const siteConfig = {
  name: "M&L IT Software Services",
  shortName: "M&L IT",
  tagline: "Web, Software & Automatisierung – persönlich und zuverlässig.",
  description:
    "M&L IT Software Services entwickelt Websites, Apps und individuelle Software, betreut Microsoft 365 und automatisiert Prozesse mit KI.",

  domain: "[ihre-domain.de]",
  // Reihenfolge: eigene Domain > Vercel-Vorschau-URL > lokal
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  locale: "de_DE",
  language: "de",

  contact: {
    phone: "[+49 000 000000]",
    /** Externes Anfrageformular (z. B. Google Forms, Microsoft Forms, Tally). Leer = Button wird ausgeblendet. */
    formUrl: "",
    hours: "Mo–Fr 9–18 Uhr",
  },

  address: {
    street: "[Straße Hausnummer]",
    zip: "[PLZ]",
    city: "[Ort]",
    country: "Deutschland",
  },

  social: {
    linkedin: "",
    github: "https://github.com/Afrinwork",
    xing: "",
    instagram: "",
  },

  // Nur für das Impressum: gesetzliche Pflichtangaben (§ 5 DDG), keine Kontakt-E-Mail auf der Website.
  legal: {
    companyName: "[M&L IT Software Services – Inhaber Vorname Nachname]",
    owner: "[Vorname Nachname]",
    email: "[impressum@ihre-domain.de]",
    vatId: "[USt-IdNr. oder Zeile entfernen]",
  },
} as const;

export type SiteConfig = typeof siteConfig;
