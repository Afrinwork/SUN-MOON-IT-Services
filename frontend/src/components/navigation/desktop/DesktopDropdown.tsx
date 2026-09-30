import Link from "next/link";
import type { NavChild } from "@/config/navigation.config";

export function DesktopDropdown({ items }: { items: NavChild[] }) {
  const wide = items.length > 4;
  return (
    <div className="desktop-dropdown invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <ul className={`grid gap-1 rounded-2xl border border-border bg-white p-3 shadow-2xl shadow-primary/10 ${wide ? "w-[36rem] grid-cols-2" : "w-80"}`}>
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className="block rounded-xl px-4 py-3 transition hover:bg-surface focus-visible:bg-surface">
              <span className="block text-sm font-bold text-primary">{item.label}</span>
              {item.text && <span className="mt-1 block text-xs leading-5 text-muted">{item.text}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
