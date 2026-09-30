import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/createMetadata";
import { LegalPage } from "@/components/layout/page/LegalPage";
import { terms } from "@/content/legal/terms";

export const metadata: Metadata = createMetadata({ title: "AGB", description: "Allgemeine Geschäftsbedingungen von Sun & Moon IT Software Services.", path: "/agb", noIndex: true });

export default function AgbPage() {
  return <LegalPage title="AGB" sections={terms} />;
}
