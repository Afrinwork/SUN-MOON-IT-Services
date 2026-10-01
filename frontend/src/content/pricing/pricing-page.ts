import type { FaqItem } from "@/components/ui/faq/FaqList";
import type { Feature } from "@/components/ui/list/FeatureGrid";

export const pricingPage = {
  seoTitle: "Preise für Website, App & Software",
  seoDescription: "Was kostet eine Website, App oder individuelle Software? Pakete, Betreuung und IT-Support im Überblick – transparent und mit Angebot vorab.",
  title: "Klare Preise. Keine Überraschungen.",
  intro: "Jedes Projekt ist anders. Diese Pakete geben Ihnen Orientierung – den genauen Preis erhalten Sie nach einem kurzen, unverbindlichen Gespräch.",
  steps: [
    { title: "1. Gespräch", text: "Sie erzählen uns kurz, was Sie brauchen – per Telefon oder WhatsApp." },
    { title: "2. Einschätzung", text: "Wir sagen ehrlich, was sinnvoll ist und was nicht." },
    { title: "3. Angebot", text: "Sie erhalten ein schriftliches Angebot mit klarem Leistungsumfang." },
    { title: "4. Umsetzung", text: "Erst nach Ihrer Freigabe starten wir – in abgestimmten Etappen." },
  ] satisfies Feature[],
  priceFactors: [
    "Umfang: Anzahl der Seiten, Funktionen oder Abläufe",
    "Inhalte: vorhanden oder neu zu erstellen",
    "Anbindungen an bestehende Systeme",
    "Mehrsprachigkeit",
    "Gewünschte Betreuung nach dem Start",
  ],
  faq: [
    { question: "Gibt es versteckte Kosten?", answer: "Nein. Sie erhalten vorab ein schriftliches Angebot. Zusätzliche Wünsche besprechen wir immer, bevor Kosten entstehen." },
    { question: "Kann ein Projekt in Etappen umgesetzt werden?", answer: "Ja. Gerade bei Software und größeren Websites starten wir oft mit dem Wichtigsten und erweitern später." },
    { question: "Was kostet die Betreuung nach dem Start?", answer: "Das hängt vom Umfang ab. Die Betreuung ist freiwillig – alternativ buchen Sie Hilfe nur bei Bedarf." },
    { question: "Ist das Erstgespräch unverbindlich?", answer: "Ja. Im ersten Gespräch schätzen wir Ihr Vorhaben ein – ohne Verpflichtung für Sie." },
  ] satisfies FaqItem[],
};
