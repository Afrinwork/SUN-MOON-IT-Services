import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Mobil: große Direktkontakt-Buttons direkt unter der Überschrift. Desktop: nebeneinander. */
export function LocalQuickContact() {
  return (
    <div className="grid w-full grid-cols-2 gap-3 md:flex md:w-auto">
      <a href={telHref} className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-accent px-6 font-bold text-primary-deep md:rounded-full"><Phone size={17} /> Anrufen</a>
      <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 font-bold text-white md:rounded-full"><MessageCircle size={17} /> WhatsApp</a>
    </div>
  );
}
