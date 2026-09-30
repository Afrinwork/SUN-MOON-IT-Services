import { services } from "@/features/services/data/services";
import type { NavGroup, NavLink } from "@/types/navigation/nav-link";

export const mainNavigation: NavLink[] = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/ueber-uns", label: "Über uns" },
];

export const contactLink: NavLink = { href: "/kontakt", label: "Kontakt" };

export const legalNavigation: NavLink[] = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

export const footerNavigation: NavGroup[] = [
  {
    title: "Leistungen",
    links: services.map((service) => ({ href: `/leistungen/${service.slug}`, label: service.title })),
  },
  { title: "Unternehmen", links: [...mainNavigation.slice(1), contactLink] },
  { title: "Rechtliches", links: legalNavigation },
];
