import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { FinderFlyingCta } from "@/components/sections/intro/FinderFlyingCta";
import { siteConfig } from "@/config/site.config";
import { introContent } from "@/content/home/intro";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Flug-Button „Lösung finden“, WhatsApp und (nur mobil) direkter Anruf. */
export function IntroContactButtons({ withCall = false }: { withCall?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 md:flex md:flex-wrap md:items-end md:gap-3">
      <div className="col-span-2 flex justify-center md:block"><FinderFlyingCta /></div>
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-white px-3 py-3 text-sm font-bold text-primary transition duration-300 active:scale-[0.98] md:min-h-13 md:rounded-full md:px-6 md:text-base md:hover:-translate-y-0.5 md:hover:shadow-lg md:hover:shadow-primary/10 ${withCall ? "" : "col-span-2"}`}>
        <WhatsAppIcon size={20} /> {introContent.primaryCta}
      </a>
      {withCall && <a href={telHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-white px-3 py-3 text-sm font-bold text-primary transition duration-300 active:scale-[0.98]">
        <Phone size={18} /> {introContent.secondaryCta}
      </a>}
    </div>
  );
}
