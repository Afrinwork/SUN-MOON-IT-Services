import { ArrowRight, Bot, Braces, Check, ChevronDown, Cloud, Code2, Database, GitBranch, Layers3, Settings, ShieldCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { coreTechnologies, technologyCategories } from "@/content/technologies/technologies";

const categoryIcons: Record<string, LucideIcon> = {
  "microsoft-cloud": Cloud,
  "sharepoint-power-platform": Layers3,
  "java-software": Code2,
  "web-apis": Braces,
  "data-reporting": Database,
  "automation-ai": Bot,
  "administration-security": ShieldCheck,
  "devops-tools": GitBranch,
  "ux-processes": Users,
  "it-management": Settings,
};

export function TechnologyPageContent() {
  return (
    <>
      <header className="network-grid bg-primary-deep text-white">
        <Container className="hidden gap-16 py-20 md:grid lg:grid-cols-[1fr_0.8fr] lg:items-end lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "Technologien" }]} />
            <p className="reveal mt-10 text-xs font-bold uppercase tracking-[0.2em] text-accent">Technologiekompetenz</p>
            <h1 className="reveal delay-1 mt-4 max-w-4xl text-6xl font-black leading-[1.02] tracking-[-0.045em]">Technik, die im Betrieb <span className="text-accent">überzeugt.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68">Von Microsoft 365 über Java und Webentwicklung bis zu Daten, Automatisierung und IT-Administration – sinnvoll kombiniert für tragfähige Lösungen.</p>
          </div>
          <div className="reveal delay-2 border-y border-white/12 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Kerntechnologien</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {coreTechnologies.map((technology) => <li key={technology} className="flex items-center gap-2 text-sm font-semibold"><span className="size-1.5 rounded-full bg-accent" />{technology}</li>)}
            </ul>
          </div>
        </Container>

        <Container className="py-10 md:hidden">
          <Breadcrumb items={[{ label: "Technologien" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">Unser Werkzeugkasten</p>
          <h1 className="mobile-reveal mobile-delay-1 mt-3 text-[2.5rem] font-black leading-[1.02] tracking-[-0.045em]">Technologie.<br /><span className="text-accent">Klar eingesetzt.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/68">Breites technisches Know-how – passend zur Aufgabe ausgewählt.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 grid grid-cols-2 border-y border-white/10 py-5">
            <div><strong className="block text-2xl text-accent">10</strong><span className="text-xs text-white/55">Fachbereiche</span></div>
            <div className="border-l border-white/10 pl-5"><strong className="block text-2xl text-accent">Full Stack</strong><span className="text-xs text-white/55">Von UI bis Betrieb</span></div>
          </div>
        </Container>
      </header>

      <section className="bg-white">
        <Container className="hidden gap-16 py-20 md:grid lg:grid-cols-[0.58fr_1.42fr] lg:py-24">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Kompetenzbereiche</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Breit aufgestellt. Präzise eingesetzt.</h2>
            <p className="mt-5 leading-7 text-muted">Entscheidend ist nicht die Anzahl der Werkzeuge, sondern ihre passende Kombination für Ihre Anforderungen.</p>
            <nav className="mt-8 border-l border-border" aria-label="Technologiebereiche">
              {technologyCategories.map((category, index) => <a key={category.id} href={`#${category.id}`} className="flex items-center gap-3 border-l-2 border-transparent px-4 py-2.5 text-sm text-muted transition hover:border-accent hover:text-primary"><span className="text-xs font-bold text-accent-strong">{String(index + 1).padStart(2, "0")}</span>{category.shortTitle}</a>)}
            </nav>
          </aside>

          <div>
            {technologyCategories.map((category, index) => {
              const Icon = categoryIcons[category.id];
              return (
                <article key={category.id} id={category.id} className="scroll-mt-28 border-t border-border py-10 first:pt-0 first:border-t-0">
                  <div className="grid gap-6 xl:grid-cols-[1fr_1.4fr]">
                    <div>
                      <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-primary text-accent"><Icon size={20} /></span><span className="text-sm font-black text-accent-strong">{String(index + 1).padStart(2, "0")}</span></div>
                      <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-primary">{category.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-muted">{category.description}</p>
                    </div>
                    <ul className="grid content-start gap-x-6 sm:grid-cols-2">
                      {category.items.map((item) => <li key={item} className="flex min-h-11 items-center gap-2.5 border-b border-border/75 py-2 text-sm font-semibold text-foreground"><Check size={14} className="shrink-0 text-accent-strong" />{item}</li>)}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>

        <Container className="py-12 md:hidden">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-strong">10 Fachbereiche</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-primary">Unser technisches Spektrum.</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Öffnen Sie einen Bereich für alle zugehörigen Technologien und Methoden.</p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-border">
            {technologyCategories.map((category, index) => {
              const Icon = categoryIcons[category.id];
              return (
                <details key={category.id} className="group border-b border-border bg-white last:border-b-0">
                  <summary className="grid min-h-20 cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-3 px-4 py-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-surface-accent text-accent-strong"><Icon size={18} /></span>
                    <span><span className="block text-[0.6rem] font-black tracking-widest text-accent-strong">{String(index + 1).padStart(2, "0")}</span><strong className="mt-1 block text-sm leading-5 text-primary">{category.shortTitle}</strong></span>
                    <ChevronDown size={17} className="text-muted transition group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-border bg-surface px-4 py-5">
                    <p className="text-sm leading-6 text-muted">{category.description}</p>
                    <ul className="mt-4 grid gap-2">
                      {category.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm font-semibold leading-5 text-foreground"><Check size={14} className="mt-0.5 shrink-0 text-accent-strong" />{item}</li>)}
                    </ul>
                  </div>
                </details>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-primary p-5 text-white">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent">Technologieberatung</p>
            <h2 className="mt-2 text-xl font-black">Welcher Stack passt zu Ihrem Projekt?</h2>
            <p className="mt-2 text-sm leading-6 text-white/62">Wir bewerten Anforderungen und bestehende Systeme, bevor wir Werkzeuge auswählen.</p>
            <a href="/kontakt" className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-accent px-4 font-bold text-primary-deep">Projekt besprechen <ArrowRight size={17} /></a>
          </div>
        </Container>
      </section>
    </>
  );
}
