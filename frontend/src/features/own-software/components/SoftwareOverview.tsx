import { Layers3 } from "lucide-react";
import { CardGrid } from "@/components/ui/card/CardGrid";
import { CardLink } from "@/components/ui/card/CardLink";
import { EmptyState } from "@/components/ui/empty/EmptyState";
import { ownSoftware } from "@/features/own-software/data/software";

export function SoftwareOverview() {
  if (ownSoftware.length === 0) return <EmptyState text="Unsere eigenen Softwarelösungen stellen wir hier in Kürze vor." />;
  return (
    <CardGrid>
      {ownSoftware.map((s) => <li key={s.slug}><CardLink href={`/projekte/eigene-software/${s.slug}`} title={s.title} text={s.short} icon={<Layers3 size={23} />} /></li>)}
    </CardGrid>
  );
}
