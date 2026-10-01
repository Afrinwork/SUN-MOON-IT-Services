import type { TeamSize } from "@/features/solution-finder/types";

export const teamQuestion = "Wie groß ist Ihr Team?";

export const teamSizes: TeamSize[] = [
  { id: "klein", label: "1–5 Personen", reply: "Für kleine Teams zählen schlanke Lösungen ohne unnötigen Ballast." },
  { id: "mittel", label: "6–20 Personen", reply: "Bei dieser Größe lohnen sich klare Strukturen und Zuständigkeiten besonders." },
  { id: "gross", label: "Mehr als 20 Personen", reply: "Dann planen wir von Anfang an mit Rollen, Rechten und einer sauberen Einführung." },
];
