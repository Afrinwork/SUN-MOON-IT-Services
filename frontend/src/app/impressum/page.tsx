import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/page/LegalPage";
import { imprint } from "@/content/legal/imprint";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return <LegalPage title="Impressum" sections={imprint} />;
}
