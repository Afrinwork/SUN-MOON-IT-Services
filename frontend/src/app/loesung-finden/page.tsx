import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Clock3, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
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
    <main className="solution-finder-page min-h-screen bg-surface">
      <section className="finder-intro network-grid relative overflow-hidden bg-primary-deep pb-20 pt-6 text-white md:pb-28 md:pt-12">
        <div className="finder-intro-glow absolute -right-24 -top-24 size-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <Container className="relative max-w-5xl">
          <Link href="/" className="inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-white/70 transition hover:text-white"><ChevronLeft size={17} /> Startseite</Link>
          <div className="mt-4 max-w-3xl md:mt-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent"><Sparkles size={14} /> Lösungs-Assistent</p>
            <h1 className="mt-4 max-w-3xl text-[2rem] font-black leading-[1.06] tracking-[-0.045em] min-[380px]:text-4xl md:text-6xl">Finden wir heraus, was zu Ihrem Unternehmen passt.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/72 md:text-lg md:leading-8">Beantworten Sie ein paar kurze Fragen. Sie erhalten sofort eine passende Empfehlung, einen Preisrahmen und die nächsten Schritte.</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-white/75">
              <li className="flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-2"><Clock3 size={14} className="text-accent" /> etwa 2 Minuten</li>
              <li className="flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-2"><LockKeyhole size={14} className="text-accent" /> bleibt im Browser</li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="relative -mt-12 pb-10 md:-mt-16 md:pb-20">
        <Container className="max-w-5xl">
          <SolutionFinder />
          <p className="mx-auto mt-5 flex max-w-2xl items-start justify-center gap-2 text-center text-xs leading-5 text-muted">
            <ShieldCheck size={15} className="mt-0.5 shrink-0 text-accent-strong" />
            Ihre Auswahl bleibt in diesem Browser. Es werden keine Antworten gespeichert oder übertragen.
          </p>
        </Container>
      </section>
    </main>
  );
}
