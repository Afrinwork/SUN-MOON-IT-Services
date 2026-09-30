import { PageHeader } from "@/components/layout/page/PageHeader";
import { Container } from "@/components/ui/container/Container";

export type LegalSection = { title: string; text: string };

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <main>
      <PageHeader eyebrow="Rechtliches" title={title} breadcrumbs={[{ label: title }]} />
      <Container className="max-w-3xl py-16 md:py-20">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-border py-7 last:border-0">
            <h2 className="text-xl font-bold text-primary">{section.title}</h2>
            <p className="mt-3 whitespace-pre-line leading-7 text-muted">{section.text || "Inhalt folgt."}</p>
          </section>
        ))}
      </Container>
    </main>
  );
}
