import Link from "next/link";
import { footerNavigation } from "@/config/navigation/navigation.config";

export function FooterNavigation() {
  return (
    <nav aria-label="Fußzeilen-Navigation" className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {footerNavigation.map((group) => (
        <div key={group.title}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{group.title}</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
