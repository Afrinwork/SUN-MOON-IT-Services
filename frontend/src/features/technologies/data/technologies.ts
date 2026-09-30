import type { Technology, TechnologyCategory } from "../types";

export const technologyCategories: TechnologyCategory[] = [
  "Frontend",
  "Backend",
  "Cloud & DevOps",
  "Microsoft & Automatisierung",
];

export const technologies: Technology[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "GitHub Actions", category: "Cloud & DevOps" },
  { name: "nginx", category: "Cloud & DevOps" },
  { name: "Microsoft 365", category: "Microsoft & Automatisierung" },
  { name: "Power Automate", category: "Microsoft & Automatisierung" },
];
