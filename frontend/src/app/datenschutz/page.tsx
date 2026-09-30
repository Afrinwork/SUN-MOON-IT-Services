import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { LegalPage } from "@/components/layout/page/LegalPage";
import { privacy } from "@/content/legal/privacy";

export const metadata: Metadata = createMetadata({ title: "Datenschutz", description: "Datenschutzerklärung von Sun & Moon IT Software Services.", path: "/datenschutz", noIndex: true });

export default function DatenschutzPage() {
  return <LegalPage title="Datenschutz" sections={privacy} />;
}
