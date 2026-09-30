import type { BlogPost } from "@/features/blog/types/blog.types";

export const softwareModernisieren: BlogPost = {
  slug: "alte-software-modernisieren",
  title: "Alte Software modernisieren: Neu entwickeln oder schrittweise erneuern?",
  description: "Wann sich eine Neuentwicklung lohnt, warum schrittweise Modernisierung oft sicherer ist und wie der Betrieb dabei weiterläuft.",
  topic: "unternehmensloesungen",
  published: "2026-09-30",
  readingMinutes: 3,
  sections: [
    {
      heading: "Warnsignale veralteter Software",
      paragraphs: ["Diese Anzeichen zeigen, dass Handlungsbedarf besteht:"],
      list: [
        "Updates sind nicht mehr möglich oder riskant",
        "Nur noch eine Person kennt das System",
        "Neue Funktionen dauern unverhältnismäßig lange",
        "Das Programm läuft langsam oder stürzt ab",
      ],
    },
    {
      heading: "Komplett neu – oder Schritt für Schritt?",
      paragraphs: [
        "Eine Neuentwicklung klingt verlockend, ist aber riskant: Wissen aus Jahren steckt im alten System. Meist ist es sicherer, einzelne Teile nacheinander zu erneuern. So bleibt der Betrieb stabil und Sie sehen früh Ergebnisse.",
      ],
    },
    {
      heading: "So läuft eine Modernisierung ab",
      paragraphs: [
        "Zuerst analysieren wir Technik, Code und Risiken. Dann legen wir gemeinsam Prioritäten fest und modernisieren in kleinen Etappen – ohne Stillstand im Tagesgeschäft.",
      ],
    },
  ],
};
