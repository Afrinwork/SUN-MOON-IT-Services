import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/layout/page/PageHeader";
import { Container } from "@/components/ui/container/Container";

export type LegalSection = { title: string; text: string };

/** Mobil: aufklappbare Abschnitte. Desktop: durchgehender Lesetext. */
export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <main>
      <PageHeader eyebrow="Rechtliches" title={title} breadcrumbs={[{ label: title }]} />
      <Container className="max-w-3xl py-8 md:py-20">
        <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border md:hidden">
          {sections.map((section, index) => (
            <details key={section.title} className="group bg-white" open={index === 0}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 font-bold text-primary">
                {section.title}
                <ChevronDown size={18} className="shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="whitespace-pre-line px-4 pb-4 text-sm leading-6 text-muted">{section.text || "Inhalt folgt."}</p>
            </details>
          ))}
        </div>
        <div className="hidden md:block">
          {sections.map((section) => (
            <section key={section.title} className="border-b border-border py-7 last:border-0">
              <h2 className="text-xl font-bold text-primary">{section.title}</h2>
              <p className="mt-3 whitespace-pre-line leading-7 text-muted">{section.text || "Inhalt folgt."}</p>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
