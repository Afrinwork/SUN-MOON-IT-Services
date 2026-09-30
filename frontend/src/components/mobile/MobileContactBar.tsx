import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

type Props = { callLabel?: string; whatsappLabel?: string };

/**
 * Nur mobil: feste Kontaktleiste am unteren Rand.
 * Der Platz darunter wird über `.mobile-contact-bar` in globals.css freigehalten.
 */
export function MobileContactBar({ callLabel = "Anrufen", whatsappLabel = "WhatsApp" }: Props) {
  return (
    <div className="mobile-contact-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 pt-3 backdrop-blur md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <div className="grid grid-cols-2 gap-3">
        <a href={telHref} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border font-bold text-primary"><Phone size={17} /> {callLabel}</a>
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent font-bold text-primary-deep"><MessageCircle size={17} /> {whatsappLabel}</a>
      </div>
    </div>
  );
}
