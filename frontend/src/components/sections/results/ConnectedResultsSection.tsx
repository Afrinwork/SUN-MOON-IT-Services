"use client";

import { useLayoutEffect, useRef } from "react";
import { Code2, Compass, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container/Container";

const metrics = [
  { value: 6, label: "Leistungsbereiche" },
  { value: 5, label: "Beratungssprachen" },
  { value: 1, label: "direkter Ansprechpartner" },
  { value: 4, label: "klare Projektphasen" },
];

const journey = [
  { number: "01", icon: Compass, title: "Verstehen", text: "Ziel und echten Bedarf klären" },
  { number: "02", icon: ShieldCheck, title: "Verbinden", text: "Menschen, Daten und Abläufe ordnen" },
  { number: "03", icon: Code2, title: "Umsetzen", text: "Die passende Lösung entwickeln" },
  { number: "04", icon: Rocket, title: "Erreichen", text: "Sicher starten und weiter wachsen" },
];

export function ConnectedResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<Array<HTMLElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) { section.classList.add("is-active"); return; }

    section.classList.add("results-motion-ready");
    numberRefs.current.forEach((element) => { if (element) element.textContent = "0"; });
    let animationFrame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      section.classList.add("is-active");
      const startedAt = performance.now();
      const update = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / 1150);
        const eased = 1 - Math.pow(1 - progress, 3);
        metrics.forEach((metric, index) => {
          const element = numberRefs.current[index];
          if (element) element.textContent = String(Math.round(metric.value * eased));
        });
        if (progress < 1) animationFrame = window.requestAnimationFrame(update);
      };
      animationFrame = window.requestAnimationFrame(update);
      observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(section);
    return () => { observer.disconnect(); window.cancelAnimationFrame(animationFrame); };
  }, []);

  return (
    <section ref={sectionRef} className="connected-results overflow-hidden bg-surface py-10 md:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div><p className="text-xs font-black uppercase tracking-[0.2em] text-accent-strong">Gemeinsam verbunden</p><h2 className="mt-3 text-[1.8rem] font-black leading-tight tracking-[-0.04em] text-primary md:text-5xl">Aus einzelnen Schritten wird ein Ergebnis.</h2></div>
          <p className="max-w-2xl text-sm leading-6 text-muted md:text-base md:leading-7 lg:justify-self-end">Ein klarer Weg von der ersten Frage bis zur funktionierenden Lösung – mit einem festen Ansprechpartner.</p>
        </div>

        <dl className="results-metrics mt-7 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-white md:mt-12 md:grid-cols-4 md:rounded-3xl">
          {metrics.map((metric, index) => <div key={metric.label} className="border-b border-r border-border p-5 even:border-r-0 md:border-b-0 md:border-r md:p-7 md:even:border-r md:last:border-r-0"><dd className="text-primary"><strong ref={(element) => { numberRefs.current[index] = element; }} className="result-count text-4xl font-black tracking-[-0.05em] md:text-5xl">{metric.value}</strong></dd><dt className="mt-2 text-xs font-bold leading-5 text-muted md:text-sm">{metric.label}</dt></div>)}
        </dl>

        <ol className="results-journey -mx-5 mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {journey.map(({ number, icon: Icon, title, text }, index) => <li key={number} className="result-step relative z-10 grid w-[78%] shrink-0 snap-start grid-cols-[2.75rem_1fr] items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm md:block md:min-h-56 md:w-auto md:p-5"><span className="result-node grid size-11 place-items-center rounded-xl bg-primary text-accent md:size-13 md:rounded-2xl"><Icon size={20} /></span><div className="min-w-0 md:mt-8"><span className="text-[0.62rem] font-black tracking-[0.16em] text-accent-strong">{number}</span><h3 className="mt-0.5 font-bold text-primary md:mt-1 md:text-lg">{title}</h3><p className="mt-1 text-xs leading-5 text-muted md:mt-2 md:text-sm md:leading-6">{text}</p></div><i className="result-connector-dot absolute -left-[1.02rem] top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-accent md:block" style={{ animationDelay: `${420 + index * 180}ms` }} /></li>)}
        </ol>
      </Container>
    </section>
  );
}
