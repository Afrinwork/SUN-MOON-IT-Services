import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroContactButtons } from "@/components/sections/hero/HeroContactButtons";
import { HeroProofPoints } from "@/components/sections/hero/HeroProofPoints";
import { IntentPanel } from "@/components/sections/hero/IntentPanel";
import { Container } from "@/components/ui/container/Container";
import { heroContent } from "@/content/home/hero";

function Eyebrow({ className, text = heroContent.eyebrow }: { className: string; text?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 font-bold uppercase text-white/80 ${className}`}>
      <Sparkles size={14} className="text-accent" /> {text}
    </div>
  );
}

/** Direkt unter der Begrüßung: was wir machen, Kontaktwege und Einstieg nach Anliegen. */
export function HeroIntroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-deep text-white">
      <div>
        {/* Desktop */}
        <Container className="relative hidden grid-cols-1 items-center gap-14 py-20 md:grid lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="min-w-0">
            <Eyebrow className="mb-6 px-4 py-2 text-xs tracking-widest" />
            <h2 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-[-0.04em] lg:text-6xl">
              {heroContent.titleStart} <span className="inline-block text-accent">{heroContent.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 lg:text-xl">{heroContent.text}</p>
            <div className="mt-8"><HeroContactButtons flying /></div>
            <Link href="#leistungen" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white">
              {heroContent.servicesLink} <ArrowRight size={16} />
            </Link>
            <div className="mt-9 border-t border-white/10 pt-6"><HeroProofPoints /></div>
          </div>
          <IntentPanel />
        </Container>

        {/* Mobil: kurz gehalten – Überschrift, Text, Kontakt, Vertrauenspunkte */}
        <Container className="relative py-8 md:hidden">
          <Eyebrow text={heroContent.mobileEyebrow} className="px-3 py-2 text-[0.62rem] tracking-[0.12em]" />
          <h2 className="mobile-safe-title mt-5 font-black leading-[1.05] tracking-[-0.04em]">
            {heroContent.mobileTitleStart} <span className="inline-block text-accent">{heroContent.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-[34rem] text-[0.95rem] leading-6 text-white/75">{heroContent.mobileText}</p>
          <div className="mt-5"><HeroContactButtons /></div>
          <div className="mt-5 border-t border-white/10 pt-4"><HeroProofPoints /></div>
        </Container>
      </div>
    </section>
  );
}
