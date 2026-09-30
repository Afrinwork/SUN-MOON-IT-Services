import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container/Container";

export function PageContainer() {
  return (
    <main className="grid min-h-[65vh] place-items-center bg-surface py-20">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">M&L IT Software Services</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-primary md:text-6xl">Diese Seite entsteht gerade.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">Die Startseite ist bereits als Designvorschau umgesetzt. Weitere Inhalte folgen in der nächsten Ausbaustufe.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 font-bold text-accent-strong"><ArrowLeft size={17} /> Zur Startseite</Link>
      </Container>
    </main>
  );
}
