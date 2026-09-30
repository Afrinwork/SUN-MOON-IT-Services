import Link from "next/link";
import { ArrowRight, Check, Code2, Compass, Map, MessageCircle, PenTool, Rocket, Search, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb/Breadcrumb";
import { Container } from "@/components/ui/container/Container";
import { projectSteps } from "@/content/process/project-process";

const stepIcons: LucideIcon[] = [Search, Map, PenTool, Code2, ShieldCheck, Rocket];

const principles = [
  { title: "Transparent", text: "Sie kennen Stand, Entscheidungen und nächste Schritte." },
  { title: "Pragmatisch", text: "Wir konzentrieren uns auf das, was echten Nutzen schafft." },
  { title: "Gemeinsam", text: "Feedback fließt früh ein – nicht erst kurz vor dem Start." },
];

export function ProcessPageContent() {
  return (
    <>
      <header className="network-grid bg-primary-deep text-white">
        <Container className="hidden gap-16 py-20 md:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-24">
          <div>
            <Breadcrumb items={[{ label: "Ablauf" }]} />
            <p className="reveal mt-10 text-xs font-bold uppercase tracking-[0.2em] text-accent">Zusammenarbeit</p>
            <h1 className="reveal delay-1 mt-4 max-w-4xl text-6xl font-black leading-[1.02] tracking-[-0.045em]">Ein klarer Weg von der Idee zum <span className="text-accent">stabilen Betrieb.</span></h1>
            <p className="reveal delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68">Sie wissen jederzeit, woran wir arbeiten, welche Entscheidung ansteht und was als Nächstes passiert.</p>
          </div>
          <ul className="reveal delay-2 divide-y divide-white/10 border-y border-white/10">
            {principles.map((principle, index) => <li key={principle.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5"><span className="text-sm font-black text-accent">0{index + 1}</span><span><strong className="block">{principle.title}</strong><span className="mt-1 block text-sm leading-6 text-white/55">{principle.text}</span></span></li>)}
          </ul>
        </Container>

        <Container className="py-10 md:hidden">
          <Breadcrumb items={[{ label: "Ablauf" }]} />
          <p className="mobile-reveal mobile-delay-1 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">So arbeiten wir</p>
          <h1 className="mobile-reveal mobile-delay-1 mt-3 text-[2.5rem] font-black leading-[1.02] tracking-[-0.045em]">Schritt für Schritt.<br /><span className="text-accent">Ohne Umwege.</span></h1>
          <p className="mobile-reveal mobile-delay-2 mt-5 text-base leading-7 text-white/68">Ein verständlicher Prozess vom ersten Gespräch bis zur laufenden Betreuung.</p>
          <div className="mobile-reveal mobile-delay-3 mt-7 grid grid-cols-2 border-y border-white/10 py-5">
            <div><strong className="block text-2xl text-accent">06</strong><span className="text-xs text-white/55">klare Phasen</span></div>
            <div className="border-l border-white/10 pl-5"><strong className="block text-2xl text-accent">Direkt</strong><span className="text-xs text-white/55">persönlich abgestimmt</span></div>
          </div>
        </Container>
      </header>

      <section className="bg-white">
        <Container className="hidden gap-16 py-20 md:grid lg:grid-cols-[0.55fr_1.45fr] lg:py-24">
          <aside className="self-start lg:sticky lg:top-28">
            <Compass size={25} className="text-accent-strong" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Projekt-Roadmap</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary">Orientierung in jeder Phase.</h2>
            <p className="mt-5 leading-7 text-muted">Der Ablauf bleibt verbindlich, aber nicht starr. Neue Erkenntnisse können einfließen, ohne das Projekt aus dem Blick zu verlieren.</p>
            <Link href="/kontakt" className="mt-7 inline-flex items-center gap-2 font-bold text-primary transition hover:text-accent-strong">Projekt besprechen <ArrowRight size={17} /></Link>
          </aside>

          <ol>
            {projectSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.number} className="grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 xl:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-primary text-accent"><Icon size={20} /></span><span className="text-sm font-black text-accent-strong">{step.number}</span></div>
                    <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-primary">{step.title}</h2>
                    <p className="mt-4 leading-7 text-muted">{step.description}</p>
                  </div>
                  <div className="self-end">
                    <p className="border-l-2 border-accent pl-4 text-sm font-bold leading-6 text-primary">Ergebnis: {step.result}</p>
                    <ul className="mt-5 space-y-3">{step.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm text-muted"><Check size={15} className="shrink-0 text-accent-strong" />{point}</li>)}</ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>

        <Container className="py-12 md:hidden">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-strong">Projekt-Roadmap</p>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-primary">Sechs Phasen. Ein gemeinsames Ziel.</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Öffnen Sie eine Phase für weitere Details.</p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-border">
            {projectSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <details key={step.number} className="group border-b border-border bg-white last:border-b-0" open={index === 0}>
                  <summary className="grid min-h-20 cursor-pointer list-none grid-cols-[2.5rem_1fr_auto] items-center gap-3 px-4 py-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-surface-accent text-accent-strong"><Icon size={18} /></span>
                    <span><span className="block text-[0.6rem] font-black tracking-widest text-accent-strong">PHASE {step.number}</span><strong className="mt-1 block text-sm text-primary">{step.shortTitle}</strong></span>
                    <span className="text-xl font-light text-muted transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t border-border bg-surface px-4 py-5">
                    <h3 className="font-bold text-primary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                    <p className="mt-4 border-l-2 border-accent pl-3 text-sm font-bold leading-6 text-primary">{step.result}</p>
                    <ul className="mt-4 space-y-2">{step.points.map((point) => <li key={point} className="flex gap-2 text-sm leading-5 text-muted"><Check size={14} className="mt-0.5 shrink-0 text-accent-strong" />{point}</li>)}</ul>
                  </div>
                </details>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-primary p-5 text-white">
            <MessageCircle size={21} className="text-accent" />
            <h2 className="mt-4 text-xl font-black">Bereit für den ersten Schritt?</h2>
            <p className="mt-2 text-sm leading-6 text-white/62">Ein kurzes Gespräch reicht, um Ihr Vorhaben einzuordnen.</p>
            <Link href="/kontakt" className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-accent px-4 font-bold text-primary-deep">Unverbindlich anfragen <ArrowRight size={17} /></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
