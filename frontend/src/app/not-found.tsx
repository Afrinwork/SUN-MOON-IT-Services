import { ButtonLink } from "@/components/ui/buttons/Button";
import { Container } from "@/components/ui/containers/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm font-semibold text-brand-700">Fehler 404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900">Seite nicht gefunden</h1>
      <p className="mt-4 text-lg text-slate-600">Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
      <ButtonLink href="/" className="mt-8">
        Zur Startseite
      </ButtonLink>
    </Container>
  );
}
