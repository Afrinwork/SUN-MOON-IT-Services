import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { siteConfig } from "@/config/site.config";
import { heroContent } from "@/content/home/hero";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Direkter Kontakt: WhatsApp (Hauptweg) und Anruf. Mobil gestapelt, Desktop nebeneinander mit Nummer. */
export function HeroContactButtons() {
  return (
    <div className="grid grid-cols-[1.18fr_0.82fr] gap-2.5 md:flex md:flex-wrap md:gap-3">
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-primary-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-3 py-3 text-sm font-bold text-primary-deep shadow-lg shadow-accent/20 transition duration-300 active:scale-[0.98] md:min-h-13 md:rounded-full md:px-7 md:text-base md:hover:-translate-y-0.5 md:hover:bg-white">
        <WhatsAppIcon size={20} /> {heroContent.primaryCta}
      </a>
      <a href={telHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-3 py-3 text-sm font-bold text-white transition duration-300 active:scale-[0.98] md:min-h-13 md:rounded-full md:px-7 md:text-base md:hover:-translate-y-0.5 md:hover:bg-white/12">
        <Phone size={18} /> <span>{heroContent.secondaryCta}<span className="hidden font-semibold text-white/70 md:inline">: {siteConfig.phone}</span></span>
      </a>
    </div>
  );
}
