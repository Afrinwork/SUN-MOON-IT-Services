import type { ClientProject } from "@/features/client-projects/types/client-project.types";

/** Kundenprojekte – neue Einträge hier ergänzen, Detailseiten entstehen automatisch. */
export const clientProjects: ClientProject[] = [];

export function findClientProject(slug: string): ClientProject | undefined {
  return clientProjects.find((p) => p.slug === slug);
}
