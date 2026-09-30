import { LegalPage } from "@/components/layout/page/LegalPage";
import { siteConfig } from "@/config/site/site.config";
import { formatAddress } from "@/lib/helpers/format-address";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({ path: "/datenschutz", title: "Datenschutzerklärung", description: "Informationen zum Datenschutz." });

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2>1. Verantwortlicher</h2>
      <p>
        {siteConfig.legal.companyName}, {formatAddress(siteConfig.address)}, Telefon: {siteConfig.contact.phone}
      </p>
      <h2>2. Hosting und Server-Logfiles</h2>
      <p>[Hosting-Anbieter, Serverstandort und Speicherdauer der Logfiles ergänzen.]</p>
      <h2>3. Kontaktaufnahme</h2>
      <p>
        Diese Website enthält kein eigenes Kontaktformular und speichert keine Anfragen. Wenn Sie uns anrufen, verarbeiten
        wir Ihre Angaben nur zur Bearbeitung Ihres Anliegens.
      </p>
      <h2>4. Externes Anfrageformular</h2>
      <p>
        Für Anfragen verlinken wir auf ein Formular bei einem externen Anbieter. Erst wenn Sie den Link öffnen, werden
        Daten an diesen Anbieter übertragen. [Anbieter, Zweck, Rechtsgrundlage und Link zu dessen Datenschutzerklärung
        ergänzen.]
      </p>
      <h2>5. Cookies und Tracking</h2>
      <p>Diese Website verwendet keine Tracking- oder Marketing-Cookies. Schriften werden lokal ausgeliefert.</p>
      <h2>6. Ihre Rechte</h2>
      <p>[Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch und Beschwerde ergänzen.]</p>
    </LegalPage>
  );
}
