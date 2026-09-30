import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/page/LegalPage";
import { cookies } from "@/content/legal/cookies";
import { createMetadata } from "@/lib/seo/createMetadata";

export const metadata: Metadata = createMetadata({ title: "Cookie-Hinweis", description: "Welche Daten diese Website im Browser speichert – kurz und transparent.", path: "/cookies", noIndex: true });

export default function CookiesPage() {
  return <LegalPage title="Cookie-Hinweis" sections={cookies} />;
}
