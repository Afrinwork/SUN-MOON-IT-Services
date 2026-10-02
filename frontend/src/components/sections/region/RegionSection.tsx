import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { RegionFact } from "@/components/sections/region/RegionFact";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { Container } from "@/components/ui/container/Container";
import { siteConfig } from "@/config/site.config";
import { serviceAreas } from "@/lib/seo/structuredData";

const facts = [
  { icon: MapPin, label: "Standort", value: siteConfig.address },
  { icon: Clock, label: "Erreichbar", value: siteConfig.openingHours },
  { icon: Phone, label: "Direkt anrufen", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
];

/** Lokaler Bezug: Sitz in Seelze, unterwegs in der Region Hannover. */
export function RegionSection() {
  return (
    <section className="home-region bg-primary-deep py-10 text-white md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Standort</p>
          <h2 className="mt-3 text-[1.75rem] font-black leading-tight tracking-[-0.035em] min-[380px]:text-3xl md:text-5xl">Wir sitzen in Seelze, direkt bei Hannover.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 md:mt-5 md:text-lg md:leading-8">Wenn es vor Ort besser geht, kommen wir vorbei. Vieles lässt sich aber auch schnell am Telefon oder per Fernwartung klären.</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {serviceAreas.map((area) => <li key={area} className="rounded-full border border-white/15 bg-white/7 px-3 py-1.5 text-sm font-bold text-white/85">{area}</li>)}
          </ul>
          <ButtonLink href="/it-service-hannover" variant="secondary" className="mt-8 w-full sm:w-auto">IT-Service in Hannover <ArrowRight size={17} /></ButtonLink>
        </div>
        <ul className="grid gap-3">
          {facts.map((fact) => <li key={fact.label}><RegionFact {...fact} /></li>)}
        </ul>
      </Container>
    </section>
  );
}
