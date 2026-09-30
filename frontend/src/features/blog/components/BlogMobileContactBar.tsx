import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Nur mobil: feste Kontaktleiste am unteren Rand, damit Leser direkt anfragen können. */
export function BlogMobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 py-3 backdrop-blur md:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <div className="grid grid-cols-2 gap-3">
        <a href={telHref} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border font-bold text-primary"><Phone size={17} /> Anrufen</a>
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent font-bold text-primary-deep"><MessageCircle size={17} /> WhatsApp</a>
      </div>
    </div>
  );
}
