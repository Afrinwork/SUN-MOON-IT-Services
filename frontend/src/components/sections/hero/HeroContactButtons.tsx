import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { siteConfig } from "@/config/site.config";
import { heroContent } from "@/content/home/hero";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Direkter Kontakt: WhatsApp (Hauptweg) und Anruf. Mobil gestapelt, Desktop nebeneinander mit Nummer. */
export function HeroContactButtons() {
  return (
    <div className="grid gap-3 md:flex md:flex-wrap">
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero-primary-cta inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 font-bold text-primary-deep shadow-lg shadow-accent/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white">
        <WhatsAppIcon size={20} /> {heroContent.primaryCta}
      </a>
      <a href={telHref} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/12">
        <Phone size={18} /> <span>{heroContent.secondaryCta}<span className="hidden font-semibold text-white/70 md:inline">: {siteConfig.phone}</span></span>
      </a>
    </div>
  );
}
