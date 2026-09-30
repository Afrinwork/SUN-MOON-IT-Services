import { Badge } from "@/components/ui/badges/Badge";
import { technologies, technologyCategories } from "../data/technologies";

export function TechnologyList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {technologyCategories.map((category) => (
        <div key={category}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-500">{category}</h3>
          <ul className="flex flex-wrap gap-2">
            {technologies
              .filter((tech) => tech.category === category)
              .map((tech) => (
                <li key={tech.name}>
                  <Badge tone="inverted">{tech.name}</Badge>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
