import { ArrowRight, CheckCircle2, Code2, Layers3, Sparkles } from "lucide-react";
import { HeroBackgroundVideo } from "@/components/sections/hero/HeroBackgroundVideo";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";

const proofPoints = ["Persönliche Beratung", "Klare Prozesse", "Messbare Qualität"];
const chartValues = [35, 48, 42, 70, 58, 82, 95];

function DesktopDashboard() {
  return (
    <div className="hero-visual-enter relative mx-auto min-w-0 w-full max-w-xl" aria-label="Vorschau eines digitalen Dashboards">
      <div className="float-soft rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="overflow-hidden rounded-[1.4rem] bg-white text-foreground">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex gap-1.5" aria-hidden="true"><i className="size-2 rounded-full bg-accent" /><i className="size-2 rounded-full bg-border" /><i className="size-2 rounded-full bg-border" /></div>
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-muted">Business Workspace</span>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl bg-primary p-5 text-white">
              <Layers3 className="mb-8 text-accent" />
              <p className="text-xs text-white/55">Aktive Prozesse</p><strong className="mt-1 block text-3xl">24</strong>
              <div className="mt-7 h-1.5 rounded-full bg-white/10"><div className="pulse-line h-full w-4/5 rounded-full bg-accent" /></div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border p-4"><p className="text-xs text-muted">Effizienz</p><strong className="text-2xl text-primary">+38%</strong><div className="mt-4 flex h-12 items-end gap-1" aria-hidden="true">{chartValues.map((height, index) => <i key={height} className="dashboard-bar flex-1 rounded-t bg-accent/70" style={{ height: `${height}%`, animationDelay: `${520 + index * 65}ms` }} />)}</div></div>
              <div className="flex items-center gap-3 rounded-2xl bg-surface p-4"><span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent-strong"><Code2 size={19} /></span><div><strong className="block text-sm">System verbunden</strong><span className="text-xs text-muted">Alle Dienste laufen stabil</span></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDashboard() {
  return (
    <div className="mobile-hero-card mobile-reveal mobile-delay-3" aria-label="Status der digitalen Systeme">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><Code2 size={19} /></span>
          <div><strong className="block text-sm">System verbunden</strong><span className="text-xs text-white/55">Alle Dienste laufen stabil</span></div>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-bold text-accent"><i className="size-2 rounded-full bg-accent" /> Live</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
        <div><span className="block text-[0.65rem] uppercase tracking-widest text-white/70">Prozesse</span><strong className="mt-1 block text-xl">24 aktiv</strong></div>
        <div><span className="block text-[0.65rem] uppercase tracking-widest text-white/70">Effizienz</span><strong className="mt-1 block text-xl text-accent">+38%</strong></div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="home-hero relative overflow-hidden bg-primary-deep text-white">
      <HeroBackgroundVideo />
      <div className="network-grid hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="hero-glow absolute -right-24 top-20 size-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

      <Container className="relative hidden min-h-[43rem] grid-cols-1 items-center gap-14 py-20 md:grid lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="min-w-0">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/75">
            <Sparkles size={15} className="text-accent" /> IT-Dienstleister · Seelze &amp; Hannover
          </div>
          <h1 className="reveal delay-1 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl">
            Digitale Lösungen, die Ihr Unternehmen <span className="text-accent">weiterbringen.</span>
          </h1>
          <p className="reveal delay-2 mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            Websites, Apps und individuelle Software – entwickelt passend zu Ihren Abläufen, Zielen und echten Herausforderungen.
          </p>
          <div className="reveal delay-3 mt-9 flex flex-col gap-3 md:flex-row">
            <ButtonLink href="#leistungen">Leistungen entdecken <ArrowRight size={17} /></ButtonLink>
            <ButtonLink href="#projekte" variant="secondary">Projekte ansehen</ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
            {proofPoints.map((item, index) => <span key={item} className={`hero-proof hero-proof-${index + 1} flex items-center gap-2`}><CheckCircle2 size={15} className="text-accent" />{item}</span>)}
          </div>
        </div>
        <DesktopDashboard />
      </Container>

      <Container className="relative py-12 md:hidden">
        <div className="mobile-reveal mobile-delay-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/75">
          <Sparkles size={14} className="text-accent" /> IT-Dienstleister · Seelze &amp; Hannover
        </div>
        <h1 className="mobile-safe-title mobile-reveal mobile-delay-1 mt-6 font-black leading-[1.02] tracking-[-0.045em]">
          Digitale Lösungen, die <span className="text-accent">weiterbringen.</span>
        </h1>
        <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/68">
          Websites, Apps und individuelle Software – passend zu Ihren Abläufen und Zielen entwickelt.
        </p>

        <MobileDashboard />

        <div className="mobile-reveal mobile-delay-4 mt-6 grid gap-3">
          <ButtonLink href="#leistungen" className="w-full">Leistungen entdecken <ArrowRight size={17} /></ButtonLink>
          <ButtonLink href="#projekte" variant="secondary" className="w-full">Projekte ansehen</ButtonLink>
        </div>
        <ul className="mobile-reveal mobile-delay-4 mt-7 grid gap-3 border-t border-white/10 pt-6 text-sm text-white/62">
          {proofPoints.map((item) => <li key={item} className="flex items-center gap-2.5"><CheckCircle2 size={16} className="shrink-0 text-accent" />{item}</li>)}
        </ul>
      </Container>
    </section>
  );
}
