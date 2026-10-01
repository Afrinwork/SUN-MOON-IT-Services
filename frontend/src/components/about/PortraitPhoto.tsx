import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { contactPerson } from "@/content/about/contact-person";

const alt = `${contactPerson.name}, ${contactPerson.role} von Sun & Moon IT Software Services`;

/** Desktop: großes Porträt mit Name und Rolle. */
export function PortraitPhoto({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 rounded-[2.5rem] border border-accent/25" aria-hidden="true" />
      <Image src={contactPerson.photo} alt={alt} width={800} height={1000} priority={priority} sizes="(min-width: 1024px) 24rem, 60vw" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/20" />
      <figcaption className="absolute -bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-white shadow-xl">
        <ShieldCheck size={20} className="shrink-0 text-accent" />
        <span>
          <span className="block font-bold leading-tight">{contactPerson.name}</span>
          <span className="block text-xs text-white/75">{contactPerson.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Mobil: kompakte Karte mit rundem Foto. */
export function PortraitCardMobile() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
      <div className="relative size-[5.5rem] shrink-0 overflow-hidden rounded-full ring-4 ring-white">
        <Image src={contactPerson.photo} alt={alt} fill sizes="88px" className="object-cover object-top" />
      </div>
      <div>
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-strong">{contactPerson.role}</p>
        <p className="mt-1 text-lg font-black leading-snug text-primary">{contactPerson.name}</p>
        <p className="mt-0.5 text-sm text-muted">Ihr persönlicher Ansprechpartner</p>
      </div>
    </div>
  );
}
