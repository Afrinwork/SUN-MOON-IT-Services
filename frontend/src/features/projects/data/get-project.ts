import type { Project } from "@/types/project/project";
import { projects } from "./projects";

/** undefined, wenn es den Slug nicht gibt (Seite zeigt dann 404). */
export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
