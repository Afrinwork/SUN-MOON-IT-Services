import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/ui/container/Container";

const sampleQuestions = ["Was kostet eine Firmenwebsite?", "Brauche ich eine App oder reicht eine Website?", "Wie werden wir unsere Excel-Listen los?"];

/** Hinweis auf /loesung-finden für Besucher, die ihr Anliegen noch nicht benennen können. */
export function FinderTeaserSection() {
  return (
    <section className="home-finder bg-surface-accent py-6 md:py-20">
      <Container>
        {/* Desktop */}
        <div className="hidden items-center gap-12 md:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Noch nicht sicher?</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.035em] text-primary lg:text-5xl">Sie wissen noch nicht genau, was Sie brauchen?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">Das geht den meisten so. Beantworten Sie ein paar Fragen. Am Ende sehen Sie, was zu Ihnen passt und was es ungefähr kostet.</p>
            <Link href="/loesung-finden" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-deep">
              Fragen beantworten <ArrowRight size={17} />
            </Link>
          </div>
          <div>
            <p className="mb-3 text-sm font-bold text-muted">Zum Beispiel:</p>
            <ul className="grid gap-3">
              {sampleQuestions.map((question) => (
                <li key={question}>
                  <Link href="/loesung-finden" className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-5 font-bold text-primary transition hover:border-accent/50">
                    <span className="flex-1">{question}</span>
                    <ArrowRight size={17} className="text-muted transition group-hover:translate-x-1 group-hover:text-accent-strong" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobil: eine kompakte, gut tippbare Karte */}
        <Link href="/loesung-finden" className="flex items-center gap-4 rounded-2xl bg-primary p-5 text-white md:hidden">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-accent"><Compass size={22} /></span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg font-black leading-tight">Noch unsicher?</span>
            <span className="mt-1 block text-sm leading-5 text-white/70">Ein paar Fragen beantworten und passende Lösung sehen</span>
          </span>
          <ArrowRight size={20} className="shrink-0 text-accent" />
        </Link>
      </Container>
    </section>
  );
}
