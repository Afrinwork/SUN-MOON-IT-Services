import { LegalPage } from "@/components/layout/page/LegalPage";
import { siteConfig } from "@/config/site/site.config";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({ path: "/impressum", title: "Impressum", description: "Impressum und Anbieterkennzeichnung." });

export default function ImpressumPage() {
  const { street, zip, city, country } = siteConfig.address;
  const { companyName, owner, email, vatId } = siteConfig.legal;
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {companyName}
        <br />
        {street}
        <br />
        {zip} {city}
        <br />
        {country}
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: {siteConfig.contact.phone}
        <br />
        E-Mail: {email}
      </p>
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {vatId}</p>
      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        {owner}, {street}, {zip} {city}
      </p>
      <h2>Verbraucherstreitbeilegung</h2>
      <p>[Angabe zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle ergänzen.]</p>
    </LegalPage>
  );
}
