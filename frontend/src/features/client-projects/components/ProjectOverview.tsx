import { Briefcase } from "lucide-react";
import { CardGrid } from "@/components/ui/card/CardGrid";
import { CardLink } from "@/components/ui/card/CardLink";
import { EmptyState } from "@/components/ui/empty/EmptyState";
import { clientProjects } from "@/features/client-projects/data/client-projects";

export function ProjectOverview() {
  if (clientProjects.length === 0) return <EmptyState text="Ausgewählte Kundenprojekte stellen wir hier in Kürze vor." />;
  return (
    <CardGrid>
      {clientProjects.map((p) => <li key={p.slug}><CardLink href={`/projekte/kundenprojekte/${p.slug}`} eyebrow={p.category} title={p.title} text={p.short} icon={<Briefcase size={23} />} /></li>)}
    </CardGrid>
  );
}
