import type { TechnologyCategory } from "@/features/technologies/types/technology.types";

export const technologyCategories: TechnologyCategory[] = [
  { title: "Websites & Web-Apps", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Software & Schnittstellen", items: ["Java", "Spring Boot", "REST-APIs"] },
  { title: "Microsoft 365", items: ["SharePoint", "Teams", "Power Automate"] },
  { title: "Betrieb & Infrastruktur", items: ["Docker", "Vercel", "Git"] },
];
