import type { ServiceContent } from "@/features/services/types/service.types";

export const softwareentwicklung: ServiceContent = {
  intro: "Individuelle Software, die zu Ihrem Arbeitsalltag passt – verständlich geplant, zuverlässig umgesetzt und langfristig erweiterbar.",
  features: [
    { title: "Interne Anwendungen", text: "Aufgaben, Aufträge und Informationen an einem übersichtlichen Ort bearbeiten." },
    { title: "Systeme verbinden", text: "Vorhandene Programme so verknüpfen, dass Daten nicht mehrfach eingegeben werden müssen." },
    { title: "Portale für Kunden", text: "Anfragen, Dokumente und Statusinformationen einfach digital bereitstellen." },
    { title: "Bestehendes verbessern", text: "Langsame oder umständliche Software gezielt modernisieren und sinnvoll erweitern." },
  ],
  benefits: [
    "Weniger wiederkehrende Handarbeit",
    "Klare Abläufe und Zuständigkeiten",
    "Eine Lösung, die mit dem Unternehmen wächst",
    "Persönliche Begleitung ohne unnötigen Fachjargon",
  ],
  technologies: ["Java", "Spring Boot", "JPA", "JDBC", "REST APIs", "TypeScript", "React", "SQL Server"],
  faq: [
    { question: "Wann lohnt sich individuelle Software?", answer: "Wenn Standardprogramme wichtige Abläufe nicht abbilden, viel doppelte Arbeit entsteht oder mehrere Einzellösungen unübersichtlich geworden sind. In einem ersten Gespräch prüfen wir ehrlich, ob eine eigene Lösung sinnvoll ist." },
    { question: "Muss ich technische Kenntnisse mitbringen?", answer: "Nein. Sie erklären uns Ihren Arbeitsalltag und das gewünschte Ergebnis. Wir übersetzen das in eine verständliche technische Lösung und erklären Entscheidungen ohne unnötigen Fachjargon." },
    { question: "Was kostet individuelle Software?", answer: "Das hängt von Umfang und Funktionen ab. Nach der ersten Klärung erhalten Sie eine transparente Einschätzung. Größere Vorhaben können in überschaubare Ausbaustufen geteilt werden." },
    { question: "Können bestehende Programme weiterentwickelt werden?", answer: "Ja. Wir prüfen zunächst den aktuellen Stand, die technische Basis und die wichtigsten Engpässe. Danach empfehlen wir gezielte Verbesserungen oder, falls sinnvoller, eine schrittweise Modernisierung." },
    { question: "Was passiert nach der Fertigstellung?", answer: "Wir begleiten Einführung und Übergabe, dokumentieren die Lösung und bleiben auf Wunsch für Wartung, Anpassungen und neue Funktionen erreichbar." },
  ],
};
