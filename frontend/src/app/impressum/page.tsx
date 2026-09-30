import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { LegalPage } from "@/components/layout/page/LegalPage";
import { imprint } from "@/content/legal/imprint";

export const metadata: Metadata = createMetadata({ title: "Impressum", description: "Impressum von Sun & Moon IT Software Services.", path: "/impressum", noIndex: true });

export default function ImpressumPage() {
  return <LegalPage title="Impressum" sections={imprint} />;
}
