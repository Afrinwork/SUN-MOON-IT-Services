import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";

export function ContactCTASection() {
  return (
    <section className="bg-surface py-12 md:py-16">
      <Container><div className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-primary-deep md:px-12 lg:flex lg:items-center lg:justify-between lg:py-16"><div className="absolute -right-16 -top-28 size-72 rounded-full border-[3rem] border-white/18" aria-hidden="true" /><div className="relative max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.2em]">Projekt starten</p><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-5xl">Lassen Sie uns Ihre Idee konkret machen.</h2><p className="mt-4 text-base font-medium opacity-75 md:text-lg">Ein unverbindliches Gespräch reicht, um den nächsten sinnvollen Schritt zu finden.</p></div><ButtonLink href="/kontakt" variant="light" className="relative mt-8 lg:mt-0">Projekt anfragen <ArrowRight size={17} /></ButtonLink></div></Container>
    </section>
  );
}
