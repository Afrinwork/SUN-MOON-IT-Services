import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { Container } from "@/components/ui/container/Container";
import { SolutionFinder } from "@/features/solution-finder/components/SolutionFinder";
import { createMetadata } from "@/lib/seo/createMetadata";

export const metadata: Metadata = createMetadata({
  title: "Lösung finden – Ihr IT-Assistent",
  description: "Wählen Sie, was Sie brauchen – und erhalten Sie sofort Ablauf, ungefähren Preis und möglichen Start für Website, App, Software, Microsoft 365 oder KI.",
  path: "/loesung-finden",
});

export default function LoesungFindenPage() {
  return (
    <main>
      <PageHeader eyebrow="Lösungs-Assistent" title="In 30 Sekunden zur passenden Lösung." text="Wählen Sie, was Sie brauchen – Sie sehen sofort, wie es abläuft, was es ungefähr kostet und wann es losgehen kann." breadcrumbs={[{ label: "Lösung finden" }]} />
      <section className="bg-surface py-8 md:py-16">
        <Container className="max-w-4xl">
          <SolutionFinder />
          <p className="mt-10 flex items-start gap-2 text-xs text-muted md:ml-12">
            <ShieldCheck size={15} className="mt-0.5 shrink-0 text-accent-strong" />
            Ihre Auswahl bleibt in Ihrem Browser – es werden keine Daten gespeichert oder übertragen.
          </p>
        </Container>
      </section>
    </main>
  );
}
