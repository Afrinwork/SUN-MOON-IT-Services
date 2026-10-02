import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";

export function ContactCTASection() {
  return (
    <section className="home-contact bg-primary py-10 md:py-20">
      <Container><div className="relative overflow-hidden rounded-2xl bg-accent px-5 py-7 text-primary-deep min-[380px]:px-6 md:rounded-[2rem] md:px-12 md:py-14 lg:flex lg:items-center lg:justify-between lg:py-16"><div className="absolute -right-16 -top-28 size-72 rounded-full border-[3rem] border-white/18" aria-hidden="true" /><div className="relative max-w-2xl"><p className="text-[0.65rem] font-black uppercase tracking-[0.2em] md:text-xs">Kostenloses Erstgespräch</p><h2 className="mt-2 text-[1.65rem] font-black leading-tight tracking-[-0.035em] min-[380px]:text-3xl md:mt-3 md:text-5xl">Was möchten Sie verbessern?</h2><p className="mt-3 text-sm font-medium leading-6 opacity-95 md:mt-4 md:text-lg">Erzählen Sie uns kurz von Ihrem Vorhaben. Wir sagen Ihnen verständlich, wie es weitergehen kann.</p></div><ButtonLink href="/kontakt" variant="light" className="relative mt-5 w-full sm:w-auto lg:mt-0">Unverbindlich anfragen <ArrowRight size={17} /></ButtonLink></div></Container>
    </section>
  );
}
