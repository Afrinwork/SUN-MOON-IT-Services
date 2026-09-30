"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/buttons/Button";
import { contactLink, mainNavigation } from "@/config/navigation/navigation.config";
import { cn } from "@/lib/helpers/cn";
import { isActivePath } from "@/lib/helpers/is-active-path";

export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
      <ul className="flex items-center gap-6">
        {mainNavigation.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn("text-sm font-medium transition-colors hover:text-brand-600", active ? "text-brand-600" : "text-navy-900")}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <ButtonLink href={contactLink.href} className="px-5 py-2">
        {contactLink.label}
      </ButtonLink>
    </nav>
  );
}
