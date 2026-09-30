import type { ReactNode } from "react";
import { Container } from "@/components/ui/containers/Container";
import { Notice } from "@/components/ui/feedback/Notice";
import { PageHeader } from "./PageHeader";

type LegalPageProps = { title: string; children: ReactNode };

/** Rahmen für Impressum, Datenschutz und AGB. */
export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <PageHeader title={title} />
      <Container className="py-16">
        <div className="legal-text max-w-3xl text-slate-700">
          <Notice tone="warning">
            Entwurf: Inhalte in [eckigen Klammern] sind Platzhalter und müssen vor der Veröffentlichung ersetzt und
            rechtlich geprüft werden.
          </Notice>
          {children}
        </div>
      </Container>
    </>
  );
}
