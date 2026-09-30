import { Bot, Building2, CodeXml, RefreshCw, Smartphone, Wrench } from "lucide-react";
import { appEntwicklung } from "@/content/services/app-entwicklung";
import { kiAutomatisierung } from "@/content/services/ki-automatisierung";
import { microsoft365 } from "@/content/services/microsoft-365";
import { modernisierung } from "@/content/services/modernisierung";
import { softwareentwicklung } from "@/content/services/softwareentwicklung";
import { webentwicklung } from "@/content/services/webentwicklung";
import type { Service } from "@/features/services/types/service.types";

export const services: Service[] = [
  { slug: "webentwicklung", title: "Webentwicklung", short: webentwicklung.intro, icon: CodeXml, content: webentwicklung },
  { slug: "app-entwicklung", title: "App-Entwicklung", short: appEntwicklung.intro, icon: Smartphone, content: appEntwicklung },
  { slug: "softwareentwicklung", title: "Softwareentwicklung", short: softwareentwicklung.intro, icon: Wrench, content: softwareentwicklung },
  { slug: "microsoft-365", title: "Microsoft 365", short: microsoft365.intro, icon: Building2, content: microsoft365 },
  { slug: "ki-automatisierung", title: "KI & Automatisierung", short: kiAutomatisierung.intro, icon: Bot, content: kiAutomatisierung },
  { slug: "modernisierung", title: "Modernisierung", short: modernisierung.intro, icon: RefreshCw, content: modernisierung },
];

export function getService(slug: string): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unbekannte Leistung: ${slug}`);
  return service;
}
