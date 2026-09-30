import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/page/LegalPage";
import { privacy } from "@/content/legal/privacy";

export const metadata: Metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return <LegalPage title="Datenschutz" sections={privacy} />;
}
