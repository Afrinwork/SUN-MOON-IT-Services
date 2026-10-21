import Link from "next/link";
import { ArrowRight, Languages, MapPin } from "lucide-react";
import { IntentGrid } from "@/components/sections/intro/IntentGrid";
import { IntroContactButtons } from "@/components/sections/intro/IntroContactButtons";
import { IntroProofPoints } from "@/components/sections/intro/IntroProofPoints";
import { Container } from "@/components/ui/container/Container";
import { introContent } from "@/content/home/intro";

function Eyebrow({ text }: { text: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-surface-accent px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent-strong md:px-4 md:text-xs">
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" /> {text}
    </p>
  );
}

function Facts() {
  return (
    <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-muted">
      <span className="inline-flex items-center gap-1.5"><MapPin size={15} className="text-accent-strong" /> {introContent.regions}</span>
      <span className="inline-flex items-center gap-1.5"><Languages size={15} className="text-accent-strong" /> {introContent.languages}</span>
    </p>
  );
}

/** Eigener heller Abschnitt unter der Begrüßung: was wir machen, Kontaktwege und Einstieg nach Anliegen. */
export function IntroSection() {
  return (
    <section className="bg-white py-14 md:py-28">
      <Container>
        {/* Desktop */}
        <div className="hidden gap-14 md:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
          <div className="min-w-0">
            <Eyebrow text={introContent.eyebrow} />
            <h2 className="mt-6 text-5xl font-black leading-[1.04] tracking-[-0.045em] text-primary lg:text-[3.6rem]">
              {introContent.titleStart} <span className="text-accent-strong">{introContent.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{introContent.text}</p>
            <div className="mt-9"><IntroContactButtons /></div>
            <Link href="#leistungen" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
              {introContent.servicesLink} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <div className="mt-10 border-t border-border pt-6"><IntroProofPoints /></div>
          </div>
          <div className="min-w-0">
            <IntentGrid />
            <div className="mt-6"><Facts /></div>
          </div>
        </div>

        {/* Mobil: Überschrift, Text, Kontakt, Vertrauenspunkte */}
        <div className="md:hidden">
          <Eyebrow text={introContent.mobileEyebrow} />
          <h2 className="mobile-safe-title mt-5 font-black leading-[1.05] tracking-[-0.04em] text-primary">
            {introContent.titleStart} <span className="text-accent-strong">{introContent.titleAccent}</span>
          </h2>
          <p className="mt-4 text-[0.95rem] leading-6 text-muted">{introContent.mobileText}</p>
          <div className="mt-6"><IntroContactButtons withCall /></div>
          <div className="mt-6"><IntroProofPoints /></div>
        </div>
      </Container>
    </section>
  );
}
