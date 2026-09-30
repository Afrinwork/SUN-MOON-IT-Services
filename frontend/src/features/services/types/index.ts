import type { services } from "../data/services";

/** Alle gültigen Leistungs-Slugs – Tippfehler in Links fallen beim Kompilieren auf. */
export type ServiceSlug = (typeof services)[number]["slug"];
