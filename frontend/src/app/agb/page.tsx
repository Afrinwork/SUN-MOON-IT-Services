import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/page/LegalPage";
import { terms } from "@/content/legal/terms";

export const metadata: Metadata = { title: "AGB" };

export default function AgbPage() {
  return <LegalPage title="AGB" sections={terms} />;
}
