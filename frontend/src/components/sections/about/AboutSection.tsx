import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";

export function AboutSection() {
  return (
    <section className="bg-white py-14 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center rounded-[2.5rem] bg-surface">
          <div className="absolute inset-8 rounded-[2rem] border border-accent/25" /><div className="absolute inset-16 rounded-[1.5rem] border border-primary/10" />
          <div className="relative w-[78%] rounded-3xl bg-white p-4 shadow-2xl shadow-primary/10">
            <Image src="/brand/logos/company-logo.png" alt="Sun & Moon IT Software Services Logo" width={1774} height={887} sizes="(min-width: 1024px) 20rem, 70vw" className="h-auto w-full" />
          </div>
          <span className="absolute bottom-7 right-7 grid size-12 place-items-center rounded-full bg-accent text-primary-deep"><ShieldCheck /></span>
        </div>
        <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Über Sun &amp; Moon</p><h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-primary md:text-5xl">Ein technischer Partner, der unternehmerisch mitdenkt.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Sun &amp; Moon IT Software Services verbindet moderne Entwicklung mit einem klaren Blick für Geschäftsprozesse. Wir übersetzen komplexe Anforderungen in verständliche, wartbare und wirkungsvolle digitale Lösungen.</p><ButtonLink href="/ueber-uns" className="mt-8">Mehr über Sun &amp; Moon <ArrowRight size={17} /></ButtonLink></div>
      </Container>
    </section>
  );
}
