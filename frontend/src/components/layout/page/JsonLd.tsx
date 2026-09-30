/** Bettet strukturierte Daten (schema.org) für Suchmaschinen ein. */
export function JsonLd({ data }: { data: object }) {
  // "<" escapen, damit Inhalte das Script-Tag nicht beenden können
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
