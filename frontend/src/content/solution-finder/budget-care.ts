import type { Budget, CareOption } from "@/features/solution-finder/types";

export const budgetQuestion = "Welches Budget planen Sie ungefähr?";

export const budgets: Budget[] = [
  { id: "klein", label: "Bis 500 €", reply: "Gut zu wissen – dann starten wir schlank und konzentrieren uns aufs Wesentliche.", maxEuro: 500 },
  { id: "mittel", label: "500 – 2.000 €", reply: "Damit lässt sich schon einiges solide umsetzen.", maxEuro: 2000 },
  { id: "gross", label: "Über 2.000 €", reply: "Prima – damit ist auch ein größerer Umfang gut machbar.", maxEuro: null },
  { id: "offen", label: "Weiß ich noch nicht", reply: "Kein Problem – genau dafür ist das unverbindliche Gespräch da.", maxEuro: null },
];

export const careQuestion = "Wünschen Sie Betreuung nach dem Start?";

export const careOptions: CareOption[] = [
  { id: "einmalig", label: "Nein, einmalig umsetzen", reply: "Alles klar – Sie erhalten eine fertige Lösung mit Übergabe und Einweisung.", withCare: false },
  { id: "betreuung", label: "Ja, mit laufender Betreuung", reply: "Sehr gut – dann kümmern wir uns auch danach um Updates und Sicherheit.", withCare: true },
  { id: "spaeter", label: "Entscheide ich später", reply: "Klar – Betreuung lässt sich jederzeit dazubuchen.", withCare: false },
];
