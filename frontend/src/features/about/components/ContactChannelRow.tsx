import { WhatsAppIcon } from "@/components/icons/PlatformIcons";
import type { ContactChannel } from "@/content/about/contact-person";

/** Eine Kontaktzeile (Symbol, Bezeichnung, Wert) – als Link, wenn anklickbar. */
export function ContactChannelRow({ channel, dark = false }: { channel: ContactChannel; dark?: boolean }) {
  const Icon = channel.icon;
  const inner = (
    <>
      <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${dark ? "bg-white/10 text-accent" : "bg-primary text-accent"}`}>
        {Icon === "whatsapp" ? <WhatsAppIcon size={20} /> : <Icon size={19} />}
      </span>
      <span className="min-w-0">
        <span className={`block text-xs font-bold uppercase tracking-[0.12em] ${dark ? "text-white/60" : "text-muted"}`}>{channel.label}</span>
        <span className={`block break-words font-bold ${dark ? "text-white" : "text-primary"}`}>{channel.value}</span>
      </span>
    </>
  );
  const className = "flex min-h-14 items-center gap-4 rounded-xl py-2 transition";
  if (!channel.href) return <div className={className}>{inner}</div>;
  return (
    <a href={channel.href} target={channel.external ? "_blank" : undefined} rel={channel.external ? "noopener noreferrer" : undefined} className={`${className} ${dark ? "hover:bg-white/5" : "hover:bg-surface"}`}>
      {inner}
    </a>
  );
}
