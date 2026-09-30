import type { ServiceContent } from "@/features/services/types/service.types";

export const appEntwicklung: ServiceContent = {
  intro: "Mobile Apps für Kunden und Teams – intuitiv bedienbar, zuverlässig betrieben und passend für iPhone, Android oder den Browser.",
  features: [
    { title: "Apps für Kunden", text: "Services, Buchungen und aktuelle Informationen direkt auf dem Smartphone bereitstellen." },
    { title: "Apps für Teams", text: "Aufgaben, Zeiten, Fotos und Daten einfach unterwegs erfassen und bearbeiten." },
    { title: "Web-Apps", text: "Ein modernes App-Erlebnis direkt im Browser – auf Wunsch ohne Installation und App Store." },
    { title: "Veröffentlichung & Betrieb", text: "App Store, Google Play, Server, Schnittstellen und Updates aus einer Hand betreuen." },
  ],
  benefits: [
    "Eine Lösung für iPhone und Android",
    "Intuitive Bedienung ohne Schulung",
    "Anbindung an Ihre bestehenden Systeme",
    "Offline nutzbar, wo es sinnvoll ist",
    "Veröffentlichung, Updates und technischer Betrieb",
  ],
  technologies: ["iOS", "Android", "React", "TypeScript", "Cross-Platform Apps", "Progressive Web Apps", "REST APIs", "Push-Nachrichten", "Offline-Funktionen", "App Store Connect", "Google Play Console"],
  faq: [
    { question: "Brauche ich eine App oder reicht eine Web-App?", answer: "Das hängt von Nutzung und Funktionen ab. Für Push-Nachrichten, Kamera, Offline-Nutzung oder eine starke Präsenz auf dem Smartphone kann eine installierbare App sinnvoll sein. Für andere Vorhaben ist eine Web-App oft der schnellere und wirtschaftlichere Weg." },
    { question: "Läuft die App auf iPhone und Android?", answer: "Ja. Je nach Projekt entwickeln wir eine gemeinsame Cross-Platform-Lösung oder gezielt für eine Plattform. Die Entscheidung treffen wir anhand der Funktionen, Zielgruppe und langfristigen Kosten." },
    { question: "Wer veröffentlicht die App?", answer: "Wir begleiten die Einrichtung der Entwicklerkonten, Signierung, Store-Einträge und Einreichung im Apple App Store und bei Google Play. Auch spätere Updates können wir betreuen." },
    { question: "Können bestehende Systeme angebunden werden?", answer: "Ja. Über sichere Schnittstellen können Apps beispielsweise Kundendaten, Termine, Aufträge oder Dokumente mit Ihrer vorhandenen Software austauschen." },
    { question: "Was gehört zum laufenden Betrieb?", answer: "Auf Wunsch kümmern wir uns um Serverauswahl, Bereitstellung, Überwachung, Fehlerbehebung und regelmäßige App-Updates. Der Umfang wird passend zu Ihrer Lösung vereinbart." },
  ],
};
