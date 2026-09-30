import type { FaqItem } from "@/components/ui/faq/FaqList";

export const hannoverPage = {
  seoTitle: "IT-Service & IT-Dienstleister in Hannover und Seelze",
  seoDescription: "Ihr IT-Dienstleister aus Seelze für die Region Hannover: Websites, Apps, Software, Microsoft 365 und IT-Betreuung – persönlich, schnell erreichbar, mehrsprachig.",
  title: "Ihr IT-Dienstleister für Hannover und Seelze.",
  intro: "Websites, Software, Microsoft 365 und IT-Betreuung aus einer Hand – persönlich, schnell erreichbar und verständlich erklärt.",
  reasons: [
    { title: "Aus der Region", text: "Sitz in Seelze – schnell vor Ort in Hannover und Umgebung." },
    { title: "Kurze Wege", text: "Direkter Kontakt per Telefon oder WhatsApp, ohne Hotline." },
    { title: "Mehrsprachig", text: "Beratung auf Deutsch, Englisch, Arabisch, Türkisch und Kurdisch." },
    { title: "Alles aus einer Hand", text: "Von der Website bis zur Microsoft-365-Verwaltung." },
  ],
  faq: [
    { question: "Kommen Sie auch vor Ort?", answer: "Ja. In Seelze, Hannover und Umgebung unterstützen wir bei Bedarf direkt vor Ort. Vieles lässt sich auch per Telefon oder Fernwartung lösen." },
    { question: "Für welche Unternehmen arbeiten Sie?", answer: "Vor allem für kleine und mittlere Unternehmen – vom Handwerksbetrieb über Praxen bis zum Dienstleister." },
    { question: "Wie schnell können wir starten?", answer: "Nach einem kurzen Erstgespräch erhalten Sie zeitnah ein Angebot. Kleine Aufgaben lassen sich oft schon in wenigen Tagen umsetzen." },
  ] satisfies FaqItem[],
};
