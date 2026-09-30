"use client";

import { useEffect } from "react";
import { Button, ButtonLink } from "@/components/ui/buttons/Button";
import { Container } from "@/components/ui/containers/Container";

type ErrorPageProps = { error: Error & { digest?: string }; retry: () => void };

export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <h1 className="text-4xl font-bold tracking-tight text-navy-900">Etwas ist schiefgelaufen</h1>
      <p className="mt-4 text-lg text-slate-600">Beim Laden der Seite ist ein Fehler aufgetreten.</p>
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Button onClick={() => retry()}>Erneut versuchen</Button>
        <ButtonLink href="/" variant="secondary">
          Zur Startseite
        </ButtonLink>
      </div>
    </Container>
  );
}
