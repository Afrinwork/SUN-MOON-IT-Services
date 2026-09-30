import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Code2, Gauge, Layers3, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { MobileContactBar } from "@/components/mobile/MobileContactBar";
import { Container } from "@/components/ui/container/Container";
import { RelatedServices } from "@/features/services/components/RelatedServices";
import { getService } from "@/features/services/data/services";

type TechnologyDetail = { name: string; detail: string; example: string };

type MobileServiceContentProps = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  benefitTitle: string;
  technologyTitle: string;
  faqTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  revealAttribute: `data-${string}`;
  technologyDetails?: TechnologyDetail[];
};

const featureIcons = [Layers3, Sparkles, ShieldCheck, Wrench];

export function MobileServiceContent({ slug, eyebrow, title, intro, benefitTitle, technologyTitle, faqTitle, ctaEyebrow, ctaTitle, ctaText, revealAttribute, technologyDetails }: MobileServiceContentProps) {
  const { content } = getService(slug);
  const revealProps = { [revealAttribute]: "" };

  return (
    <div className="md:hidden">
      <section className="bg-white py-12">
        <Container {...revealProps}>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-accent-strong">{eyebrow}</p>
          <h2 className="mt-3 text-[1.85rem] font-black leading-[1.08] tracking-[-0.035em] text-primary">{title}</h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-muted">{intro}</p>
          <div className="mt-8 space-y-3">
            {content.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return <article key={feature.title} className="rounded-2xl border border-border bg-surface p-4"><div className="flex items-start gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-accent-strong shadow-sm"><Icon size={18} /></span><div className="min-w-0"><span className="text-[0.6rem] font-black text-accent-strong">0{index + 1}</span><h3 className="mt-1 font-bold text-primary">{feature.title}</h3><p className="mt-1.5 text-sm leading-6 text-muted">{feature.text}</p></div></div></article>;
            })}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-12 text-white">
        <Container {...revealProps}>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-accent">Ihr Nutzen</p>
          <h2 className="mt-3 text-[1.8rem] font-black leading-tight tracking-[-0.035em]">{benefitTitle}</h2>
          <ul className="mt-7 space-y-2.5">
            {content.benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 rounded-xl bg-white/6 p-3.5 text-sm font-semibold leading-6"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-primary-deep"><Check size={12} /></span>{benefit}</li>)}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container {...revealProps}>
          <div className="flex items-end justify-between gap-4"><div><p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-accent-strong">Technik</p><h2 className="mt-3 text-[1.8rem] font-black leading-tight tracking-[-0.035em] text-primary">{technologyTitle}</h2></div><Code2 className="mb-1 shrink-0 text-accent-strong" size={23} /></div>
          {technologyDetails ? (
            <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-surface">
              {technologyDetails.map((technology) => <details key={technology.name} className="group border-b border-border last:border-b-0"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold text-primary">{technology.name}<ChevronDown size={17} className="shrink-0 text-accent-strong transition group-open:rotate-180" /></summary><div className="px-4 pb-4"><p className="text-sm leading-6 text-muted">{technology.detail}</p><p className="mt-3 border-t border-border pt-3 text-xs leading-5 text-accent-strong">{technology.example}</p></div></details>)}
            </div>
          ) : (
            <ul className="mt-7 flex flex-wrap gap-2">{content.technologies.map((technology) => <li key={technology} className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-bold text-primary">{technology}</li>)}</ul>
          )}
        </Container>
      </section>

      <section className="bg-primary py-12 text-white">
        <Container {...revealProps}>
          <div className="flex items-center gap-3"><Gauge size={20} className="text-accent" /><p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-accent">Kurz erklärt</p></div>
          <h2 className="mt-3 text-[1.8rem] font-black leading-tight tracking-[-0.035em]">{faqTitle}</h2>
          <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-primary-deep">
            {content.faq.map((item) => <details key={item.question} className="group border-b border-white/10 last:border-b-0"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-bold leading-5">{item.question}<ChevronDown size={17} className="shrink-0 text-accent transition group-open:rotate-180" /></summary><p className="px-4 pb-4 text-sm leading-6 text-white/65">{item.answer}</p></details>)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container {...revealProps}>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-accent-strong">Mehr entdecken</p>
          <h2 className="mt-3 mb-7 text-[1.8rem] font-black leading-tight tracking-[-0.035em] text-primary">Weitere Leistungen</h2>
          <RelatedServices currentSlug={slug} />
        </Container>
      </section>

      <section className="bg-primary px-5 py-6 text-white">
        <div className="rounded-2xl bg-primary-deep p-5">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-accent">{ctaEyebrow}</p>
          <h2 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em]">{ctaTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-white/65">{ctaText}</p>
          <Link href="/kontakt" className="mt-5 flex min-h-12 items-center justify-between rounded-xl bg-accent px-4 font-bold text-primary-deep">Unverbindlich besprechen <ArrowRight size={17} /></Link>
        </div>
      </section>

      <MobileContactBar />
    </div>
  );
}
