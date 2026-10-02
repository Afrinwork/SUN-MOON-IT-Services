import { ArrowRight } from "lucide-react";
import { PortraitCardMobile, PortraitPhoto } from "@/components/about/PortraitPhoto";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";

export function AboutSection() {
  return (
    <section className="home-about bg-white py-10 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="hidden md:block"><PortraitPhoto /></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Über Sun &amp; Moon</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-primary md:text-5xl">Direkter Kontakt statt Hotline.</h2>
          <div className="mt-6 md:hidden"><PortraitCardMobile /></div>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-muted md:mt-6 md:text-lg md:leading-8">Sie sprechen direkt mit dem Menschen, der Ihr Projekt umsetzt – ohne Hotline und ohne Weiterleitung. So werden Anforderungen schnell zu verständlichen, wartbaren Lösungen.</p>
          <ButtonLink href="/ueber-uns" className="mt-6 w-full md:mt-8 md:w-auto">Mehr über Sun &amp; Moon <ArrowRight size={17} /></ButtonLink>
        </div>
      </Container>
    </section>
  );
}
