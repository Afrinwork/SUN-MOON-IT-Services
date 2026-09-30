import { Icon } from "@/components/ui/icons/Icon";

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-slate-700">
          <Icon name="check" className="mt-0.5 shrink-0 text-brand-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}
