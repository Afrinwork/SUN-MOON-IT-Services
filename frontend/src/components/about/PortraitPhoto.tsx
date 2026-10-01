import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const portrait = {
  src: "/images/about/portrait.webp",
  alt: "Inhaber und Gründer von Sun & Moon IT Software Services",
  width: 800,
  height: 1000,
  role: "Inhaber und Gründer",
};

/** Desktop: großes Porträt mit Rahmen und Rollenbezeichnung. */
export function PortraitPhoto({ priority = false }: { priority?: boolean }) {
  return (
    <figure className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 rounded-[2.5rem] border border-accent/25" aria-hidden="true" />
      <Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} priority={priority} sizes="(min-width: 1024px) 24rem, 60vw" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/20" />
      <figcaption className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-xl">
        <ShieldCheck size={17} className="text-accent" /> {portrait.role}
      </figcaption>
    </figure>
  );
}

/** Mobil: kompakte Karte mit rundem Foto. */
export function PortraitCardMobile() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
      <div className="relative size-[5.5rem] shrink-0 overflow-hidden rounded-full ring-4 ring-white">
        <Image src={portrait.src} alt={portrait.alt} fill sizes="88px" className="object-cover object-top" />
      </div>
      <div>
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-strong">{portrait.role}</p>
        <p className="mt-1 font-bold leading-snug text-primary">Ihr persönlicher Ansprechpartner – vor Ort in Seelze &amp; Hannover</p>
      </div>
    </div>
  );
}
