import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroBackgroundVideo } from "@/components/sections/hero/HeroBackgroundVideo";
import { HeroContactButtons } from "@/components/sections/hero/HeroContactButtons";
import { HeroProofPoints } from "@/components/sections/hero/HeroProofPoints";
import { IntentGridMobile } from "@/components/sections/hero/IntentGridMobile";
import { IntentPanel } from "@/components/sections/hero/IntentPanel";
import { Container } from "@/components/ui/container/Container";
import { heroContent } from "@/content/home/hero";

function HeroBackdrop() {
  return (
    <>
      <HeroBackgroundVideo />
      <div className="network-grid hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="hero-glow absolute -right-24 top-20 size-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="hero-glow-secondary absolute -left-32 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="hero-light-beam absolute -top-1/2 left-1/3 h-[150%] w-40 rotate-[24deg] bg-gradient-to-b from-transparent via-accent/10 to-transparent blur-2xl" aria-hidden="true" />
      <div className="hero-particles absolute inset-0" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>
    </>
  );
}

function Eyebrow({ className, text = heroContent.eyebrow }: { className: string; text?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 font-bold uppercase text-white/80 ${className}`}>
      <Sparkles size={14} className="text-accent" /> {text}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="home-hero relative overflow-hidden bg-primary-deep text-white">
      <HeroBackdrop />

      {/* Desktop */}
      <Container className="relative hidden min-h-[43rem] grid-cols-1 items-center gap-14 py-20 md:grid lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="min-w-0">
          <Eyebrow className="reveal mb-6 px-4 py-2 text-xs tracking-widest" />
          <h1 className="reveal delay-1 max-w-3xl text-5xl font-black leading-[1.05] tracking-[-0.04em] lg:text-6xl">
            {heroContent.titleStart} <span className="hero-accent-text inline-block text-accent">{heroContent.titleAccent}</span>
          </h1>
          <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/75 lg:text-xl">{heroContent.text}</p>
          <div className="reveal delay-3 mt-8"><HeroContactButtons /></div>
          <Link href="#leistungen" className="reveal delay-3 mt-5 inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white">
            {heroContent.servicesLink} <ArrowRight size={16} />
          </Link>
          <div className="mt-9 border-t border-white/10 pt-6"><HeroProofPoints /></div>
        </div>
        <IntentPanel />
      </Container>

      {/* Mobil: eigener Aufbau – Kontakt zuerst, dann Anliegen als Kacheln */}
      <Container className="relative py-10 md:hidden">
        <Eyebrow text={heroContent.mobileEyebrow} className="mobile-reveal mobile-delay-1 px-3 py-2 text-[0.62rem] tracking-[0.12em]" />
        <h1 className="mobile-safe-title mobile-reveal mobile-delay-1 mt-5 font-black leading-[1.05] tracking-[-0.04em]">
          {heroContent.mobileTitleStart} <span className="hero-accent-text inline-block text-accent">{heroContent.titleAccent}</span>
        </h1>
        <p className="mobile-reveal mobile-delay-2 mt-4 text-base leading-7 text-white/75">{heroContent.text}</p>
        <div className="mobile-reveal mobile-delay-3 mt-6"><HeroContactButtons /></div>
        <div className="mobile-reveal mobile-delay-4 mt-8"><IntentGridMobile /></div>
        <div className="mobile-reveal mobile-delay-4 mt-7 border-t border-white/10 pt-6"><HeroProofPoints /></div>
      </Container>
    </section>
  );
}
