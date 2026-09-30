import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function ContactDetails() {
  const items = [
    { icon: Phone, label: "Telefon", value: siteConfig.phone, href: telHref },
    { icon: Clock, label: "Erreichbarkeit", value: siteConfig.openingHours },
    { icon: MapPin, label: "Standort", value: siteConfig.address },
  ];
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {items.map(({ icon: Icon, label, value, href }) => (
        <li key={label} className="rounded-3xl border border-border bg-white p-7">
          <span className="grid size-12 place-items-center rounded-2xl bg-primary text-accent"><Icon size={22} /></span>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-accent-strong">{label}</p>
          {href ? <a href={href} className="mt-2 block text-xl font-bold text-primary hover:text-accent-strong">{value}</a> : <p className="mt-2 text-xl font-bold text-primary">{value}</p>}
        </li>
      ))}
    </ul>
  );
}
