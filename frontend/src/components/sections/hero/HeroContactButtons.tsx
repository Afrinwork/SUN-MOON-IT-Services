import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { siteConfig } from "@/config/site.config";
import { heroContent } from "@/content/home/hero";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Hauptwege im ersten Bildschirm: Assistent, WhatsApp und direkter Anruf. */
export function HeroContactButtons() {
  return (
    <div className="grid grid-cols-[1.18fr_0.82fr] gap-2.5 md:flex md:flex-wrap md:gap-3">
      <Link href="/loesung-finden" className="hero-primary-cta hero-finder-cta col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-black text-primary-deep shadow-lg shadow-accent/20 transition duration-300 active:scale-[0.98] md:min-h-13 md:rounded-full md:px-7 md:text-base md:hover:-translate-y-0.5 md:hover:bg-white">
        <Sparkles size={18} /> {heroContent.finderCta} <ArrowRight size={17} />
      </Link>
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-3 py-3 text-sm font-bold text-white transition duration-300 active:scale-[0.98] md:min-h-13 md:rounded-full md:px-6 md:text-base md:hover:-translate-y-0.5 md:hover:bg-white md:hover:text-primary">
        <WhatsAppIcon size={20} /> {heroContent.primaryCta}
      </a>
      <a href={telHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-3 py-3 text-sm font-bold text-white transition duration-300 active:scale-[0.98] md:min-h-13 md:rounded-full md:px-7 md:text-base md:hover:-translate-y-0.5 md:hover:bg-white/12">
        <Phone size={18} /> <span>{heroContent.secondaryCta}<span className="hidden font-semibold text-white/70 md:inline">: {siteConfig.phone}</span></span>
      </a>
    </div>
  );
}
