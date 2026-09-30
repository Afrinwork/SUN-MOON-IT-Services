import { TagList } from "@/components/ui/list/TagList";
import { technologyCategories } from "@/content/technologies/technologies";

export function TechnologyGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {technologyCategories.map((category) => (
        <section key={category.title} className="rounded-3xl border border-border bg-surface p-7">
          <h3 className="mb-5 text-xl font-bold text-primary">{category.title}</h3>
          <TagList items={category.items} />
        </section>
      ))}
    </div>
  );
}
