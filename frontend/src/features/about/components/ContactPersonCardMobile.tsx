import Image from "next/image";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { siteConfig } from "@/config/site.config";
import { contactChannels, contactPerson } from "@/content/about/contact-person";
import { ContactChannelRow } from "@/features/about/components/ContactChannelRow";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Mobil: kompakte Karte – Foto und Name oben, Kontaktwege als große Tippzeilen, Buttons unten. */
export function ContactPersonCardMobile() {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-primary/10">
      <div className="network-grid flex items-center gap-4 bg-primary-deep p-5 text-white">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full ring-4 ring-accent/40">
          <Image src={contactPerson.photo} alt={`${contactPerson.name}, ${contactPerson.role}`} fill sizes="80px" className="object-cover object-top" />
        </div>
        <div>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent">{contactPerson.role}</p>
          <p className="mt-1 text-xl font-black leading-tight">{contactPerson.name}</p>
          <p className="mt-1 text-xs text-white/70">{contactPerson.languages.join(" · ")}</p>
        </div>
      </div>
      <p className="px-5 pt-5 text-sm leading-6 text-muted">{contactPerson.intro}</p>
      <div className="space-y-1 px-5 py-3">
        {contactChannels.map((channel) => <ContactChannelRow key={channel.id} channel={channel} />)}
      </div>
      <div className="grid grid-cols-2 gap-3 border-t border-border bg-surface p-4">
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent font-bold text-primary-deep"><WhatsAppIcon size={18} /> WhatsApp</a>
        <a href={telHref} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white font-bold text-primary"><Phone size={17} /> Anrufen</a>
      </div>
    </article>
  );
}
