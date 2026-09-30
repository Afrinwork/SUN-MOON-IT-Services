import type { ClientProject } from "@/features/client-projects/types/client-project.types";

export function ProjectStory({ project }: { project: ClientProject }) {
  const steps = [
    ["Ausgangslage", project.challenge],
    ["Lösung", project.solution],
    ["Ergebnis", project.result],
  ];
  return (
    <ol className="grid gap-4 lg:grid-cols-3">
      {steps.map(([title, text]) => (
        <li key={title} className="rounded-3xl border border-border bg-white p-7">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent-strong">{title}</h3>
          <p className="mt-3 leading-7 text-foreground">{text || "Inhalt folgt."}</p>
        </li>
      ))}
    </ol>
  );
}
