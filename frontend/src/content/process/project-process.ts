export type ProjectStep = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  result: string;
  points: string[];
};

export const projectSteps: ProjectStep[] = [
  {
    number: "01",
    title: "Kennenlernen & Verstehen",
    shortTitle: "Verstehen",
    description: "Wir sprechen über Ihr Unternehmen, die Ausgangslage und das konkrete Ziel. Dabei klären wir, wer die Lösung nutzt und welches Problem sie im Alltag lösen soll.",
    result: "Gemeinsames Verständnis der Aufgabe",
    points: ["Unverbindliches Erstgespräch", "Ziele und Nutzergruppen", "Bestehende Systeme und Abläufe"],
  },
  {
    number: "02",
    title: "Analysieren & Planen",
    shortTitle: "Planen",
    description: "Aus den Anforderungen entsteht ein nachvollziehbarer Projektumfang. Funktionen werden priorisiert, Abhängigkeiten geprüft und die nächsten Schritte realistisch geplant.",
    result: "Klarer Umfang und belastbare Roadmap",
    points: ["Anforderungen und Prioritäten", "Technische Machbarkeit", "Aufwand und Projektetappen"],
  },
  {
    number: "03",
    title: "Konzipieren & Gestalten",
    shortTitle: "Konzept",
    description: "Wir strukturieren Inhalte, Nutzerwege und technische Bausteine. Wo sinnvoll, machen erste Entwürfe oder Prototypen die Lösung früh verständlich.",
    result: "Abgestimmtes fachliches und visuelles Konzept",
    points: ["Informations- und Nutzerführung", "Oberflächen und Prototypen", "Technische Architektur"],
  },
  {
    number: "04",
    title: "Iterativ Entwickeln",
    shortTitle: "Entwickeln",
    description: "Die Lösung entsteht in überschaubaren Schritten. Sie sehen regelmäßig funktionierende Zwischenstände und können früh Rückmeldung geben.",
    result: "Früh sichtbarer und prüfbarer Fortschritt",
    points: ["Saubere, wartbare Umsetzung", "Regelmäßige Zwischenstände", "Direkte Feedbackschleifen"],
  },
  {
    number: "05",
    title: "Prüfen & Veröffentlichen",
    shortTitle: "Go-live",
    description: "Vor der Veröffentlichung prüfen wir Funktionen, Darstellung, Sicherheit und Performance. Anschließend wird die Lösung kontrolliert bereitgestellt.",
    result: "Stabiler und vorbereiteter Produktivstart",
    points: ["Funktions- und Qualitätstests", "Desktop- und Mobilprüfung", "Deployment und Übergabe"],
  },
  {
    number: "06",
    title: "Betreuen & Weiterentwickeln",
    shortTitle: "Betreuung",
    description: "Nach dem Start bleiben wir ansprechbar. Updates, Wartung und neue Anforderungen werden planbar umgesetzt, wenn sich Ihr Unternehmen weiterentwickelt.",
    result: "Zuverlässiger Betrieb und langfristige Entwicklung",
    points: ["Wartung und technische Betreuung", "Fehleranalyse und Updates", "Sinnvolle Erweiterungen"],
  },
];
