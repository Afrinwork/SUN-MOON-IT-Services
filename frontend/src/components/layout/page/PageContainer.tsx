import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container/Container";

type Props = { title?: string; text?: string; backHref?: string; backLabel?: string };

/** Einfache zentrierte Hinweisseite, z. B. für 404. */
export function PageContainer({
  title = "Seite nicht gefunden.",
  text = "Die angeforderte Seite existiert nicht oder wurde verschoben.",
  backHref = "/",
  backLabel = "Zur Startseite",
}: Props) {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-surface py-20">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Fehler 404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-primary md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">{text}</p>
        <Link href={backHref} className="mt-8 inline-flex items-center gap-2 font-bold text-accent-strong"><ArrowLeft size={17} /> {backLabel}</Link>
      </Container>
    </main>
  );
}
