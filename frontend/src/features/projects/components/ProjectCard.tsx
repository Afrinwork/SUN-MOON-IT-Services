import Link from "next/link";
import { Badge } from "@/components/ui/badges/Badge";
import { Card } from "@/components/ui/cards/Card";
import type { Project } from "@/types/project/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projekte/${project.slug}`} className="block h-full rounded-2xl">
      <Card interactive className="flex h-full flex-col">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">{project.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-navy-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-slate-600">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
