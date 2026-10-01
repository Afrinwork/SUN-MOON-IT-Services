import { ArrowRight } from "lucide-react";
import { PortraitCardMobile, PortraitPhoto } from "@/components/about/PortraitPhoto";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";

export function AboutSection() {
  return (
    <section className="bg-white py-14 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="hidden md:block"><PortraitPhoto /></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Über Sun &amp; Moon</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-primary md:text-5xl">Ein technischer Partner, der unternehmerisch mitdenkt.</h2>
          <div className="mt-6 md:hidden"><PortraitCardMobile /></div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Bei Sun &amp; Moon sprechen Sie direkt mit dem Menschen, der Ihr Projekt umsetzt – ohne Hotline, ohne Weiterleitung. Wir übersetzen Ihre Anforderungen in verständliche, wartbare und wirkungsvolle digitale Lösungen.</p>
          <ButtonLink href="/ueber-uns" className="mt-8">Mehr über Sun &amp; Moon <ArrowRight size={17} /></ButtonLink>
        </div>
      </Container>
    </section>
  );
}
