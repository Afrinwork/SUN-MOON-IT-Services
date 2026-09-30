import type { LegalSection } from "@/components/layout/page/LegalPage";
import { COOKIE_NOTICE_KEY } from "@/features/cookies/cookieNoticeStore";

/** Entwurf – bei neuen Diensten (z. B. Analyse, Karten, Videos von Drittanbietern) unbedingt anpassen. */
export const cookies: LegalSection[] = [
  { title: "Kurz gesagt", text: "Diese Website setzt keine Cookies. Es gibt kein Tracking, keine Analyse-Tools, keine Werbung und keine eingebundenen Inhalte von Drittanbietern." },
  { title: "Was im Browser gespeichert wird", text: `Nur ein einziger technisch notwendiger Eintrag im lokalen Speicher Ihres Browsers:\n\nName: ${COOKIE_NOTICE_KEY}\nZweck: merkt sich, dass Sie den Cookie-Hinweis bestätigt haben\nSpeicherdauer: bis Sie ihn löschen\nWeitergabe: keine – der Eintrag verlässt Ihr Gerät nicht` },
  { title: "Rechtsgrundlage", text: "Der Eintrag ist unbedingt erforderlich, damit der von Ihnen gewünschte Hinweis nicht bei jedem Seitenaufruf erneut erscheint (§ 25 Abs. 2 Nr. 2 TDDDG). Eine Einwilligung ist dafür nicht nötig." },
  { title: "Schriftarten, Videos und Bilder", text: "Alle Schriftarten, Bilder und das Hintergrundvideo liegen auf unserem eigenen Server. Beim Laden werden keine Daten an Google, YouTube oder andere Anbieter übertragen." },
  { title: "Links zu anderen Plattformen", text: "Wenn Sie über einen Link zu einer anderen Plattform wechseln (z. B. WhatsApp, Instagram oder ein externes Formular), gelten dort die Cookie- und Datenschutzregeln des jeweiligen Anbieters. Vor dem Klick werden keine Daten übertragen." },
  { title: "Hinweis erneut anzeigen", text: "Über „Cookie-Einstellungen“ im Footer können Sie den Hinweis jederzeit wieder öffnen. Den gespeicherten Eintrag können Sie auch in Ihren Browser-Einstellungen löschen." },
];
