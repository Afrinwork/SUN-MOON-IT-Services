import { ArrowRight, CheckCircle2, Code2, Layers3, Sparkles } from "lucide-react";
import { HeroBackgroundVideo } from "@/components/sections/hero/HeroBackgroundVideo";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";

export function HeroSection() {
  return (
    <section className="home-hero relative overflow-hidden bg-primary-deep text-white">
      <HeroBackgroundVideo />
      <div className="network-grid hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="hero-glow absolute -right-24 top-20 size-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <Container className="relative grid min-h-[43rem] grid-cols-1 items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="min-w-0">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/7 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/75">
            <Sparkles size={15} className="text-accent" /> Digital. Individuell. Zukunftssicher.
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
            {["Persönliche Beratung", "Klare Prozesse", "Messbare Qualität"].map((item, index) => <span key={item} className={`hero-proof hero-proof-${index + 1} flex items-center gap-2`}><CheckCircle2 size={15} className="text-accent" />{item}</span>)}
          </div>
        </div>
        <div className="hero-visual-enter relative mx-auto min-w-0 w-full max-w-xl" aria-label="Vorschau eines digitalen Dashboards">
          <div className="float-soft rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="overflow-hidden rounded-[1.4rem] bg-white text-foreground">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="flex gap-1.5"><i className="size-2 rounded-full bg-accent" /><i className="size-2 rounded-full bg-border" /><i className="size-2 rounded-full bg-border" /></div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-muted">Business Workspace</span>
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-2xl bg-primary p-5 text-white">
                  <Layers3 className="mb-8 text-accent" />
                  <p className="text-xs text-white/55">Aktive Prozesse</p><strong className="mt-1 block text-3xl">24</strong>
                  <div className="mt-7 h-1.5 rounded-full bg-white/10"><div className="pulse-line h-full w-4/5 rounded-full bg-accent" /></div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border p-4"><p className="text-xs text-muted">Effizienz</p><strong className="text-2xl text-primary">+38%</strong><div className="mt-4 flex h-12 items-end gap-1" aria-hidden="true">{[35, 48, 42, 70, 58, 82, 95].map((h, i) => <i key={i} className="dashboard-bar flex-1 rounded-t bg-accent/70" style={{ height: `${h}%`, animationDelay: `${520 + i * 65}ms` }} />)}</div></div>
                  <div className="flex items-center gap-3 rounded-2xl bg-surface p-4"><span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent-strong"><Code2 size={19} /></span><div><strong className="block text-sm">System verbunden</strong><span className="text-xs text-muted">Alle Dienste laufen stabil</span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
