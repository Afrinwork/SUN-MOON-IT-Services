import type { Service } from "@/types/service/service";
import type { ServiceSlug } from "../types";
import { services } from "./services";

export function getService(slug: ServiceSlug): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unbekannte Leistung: ${slug}`);
  return service;
}
