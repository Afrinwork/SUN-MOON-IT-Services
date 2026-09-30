import { LegalPage } from "@/components/layout/page/LegalPage";
import { siteConfig } from "@/config/site/site.config";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({ path: "/agb", title: "AGB", description: "Allgemeine Geschäftsbedingungen." });

const sections = [
  "§ 2 Vertragsschluss",
  "§ 3 Leistungen und Mitwirkungspflichten",
  "§ 4 Vergütung und Zahlung",
  "§ 5 Nutzungsrechte",
  "§ 6 Haftung",
  "§ 7 Schlussbestimmungen",
];

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <h2>§ 1 Geltungsbereich</h2>
      <p>Diese AGB gelten für alle Verträge zwischen {siteConfig.legal.companyName} und ihren Auftraggebern. [Text ergänzen.]</p>
      {sections.map((title) => (
        <div key={title}>
          <h2>{title}</h2>
          <p>[Text ergänzen.]</p>
        </div>
      ))}
    </LegalPage>
  );
}
