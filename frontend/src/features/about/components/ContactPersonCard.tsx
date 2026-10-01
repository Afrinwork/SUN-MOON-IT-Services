import Image from "next/image";
import { Languages, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { siteConfig } from "@/config/site.config";
import { contactChannels, contactPerson } from "@/content/about/contact-person";
import { ContactChannelRow } from "@/features/about/components/ContactChannelRow";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

/** Desktop: große Visitenkarte – Foto mit Namen links, alle Kontaktwege rechts. */
export function ContactPersonCard() {
  return (
    <article className="grid overflow-hidden rounded-[2rem] border border-border bg-white shadow-2xl shadow-primary/10 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="relative min-h-[34rem] bg-primary-deep">
        <Image src={contactPerson.photo} alt={`${contactPerson.name}, ${contactPerson.role}`} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep via-primary-deep/85 to-transparent p-8 pt-24 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{contactPerson.role}</p>
          <p className="mt-2 text-3xl font-black tracking-[-0.02em]">{contactPerson.name}</p>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/80">
            <Languages size={15} className="text-accent" />
            {contactPerson.languages.map((l) => <span key={l} className="rounded-full border border-white/20 px-2.5 py-1">{l}</span>)}
          </p>
        </div>
      </div>
      <div className="flex flex-col p-10 xl:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Ihr Ansprechpartner</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] text-primary">Persönlich für Sie da.</h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{contactPerson.intro}</p>
        <div className="mt-8 grid gap-x-6 gap-y-2 border-t border-border pt-6 xl:grid-cols-2">
          {contactChannels.map((channel) => <ContactChannelRow key={channel.id} channel={channel} />)}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-bold text-primary-deep shadow-lg shadow-accent/20"><WhatsAppIcon size={19} /> WhatsApp schreiben</a>
          <a href={telHref} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 font-bold text-primary hover:bg-surface"><Phone size={18} /> Anrufen</a>
        </div>
      </div>
    </article>
  );
}
