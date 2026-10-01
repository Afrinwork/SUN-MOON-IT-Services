import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export const contactPerson = {
  name: "M. Abd Al Hannan",
  role: "Inhaber und Gründer",
  photo: "/images/about/portrait.webp",
  intro: "Ich bin Ihr direkter Ansprechpartner – von der ersten Frage bis zum laufenden Betrieb. Keine Hotline, keine Weiterleitung.",
  languages: ["Deutsch", "Englisch", "Arabisch", "Türkisch", "Kurdisch"],
};

export type ContactChannel = { id: string; icon: LucideIcon | "whatsapp"; label: string; value: string; href?: string; external?: boolean };

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export const contactChannels: ContactChannel[] = [
  { id: "phone", icon: Phone, label: "Telefon", value: siteConfig.phone, href: telHref },
  { id: "whatsapp", icon: "whatsapp", label: "WhatsApp", value: "Direkt schreiben", href: siteConfig.whatsappUrl, external: true },
  { id: "email", icon: Mail, label: "E-Mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { id: "address", icon: MapPin, label: "Standort", value: siteConfig.address },
  { id: "hours", icon: Clock, label: "Erreichbar", value: siteConfig.openingHours },
];
