"use client";

import Link from "next/link";
import { useRef } from "react";
import { ButtonLink } from "@/components/ui/buttons/Button";
import { contactLink, mainNavigation } from "@/config/navigation/navigation.config";
import { useFocusTrap } from "@/hooks/accessibility/useFocusTrap";
import { cn } from "@/lib/helpers/cn";
import { isActivePath } from "@/lib/helpers/is-active-path";

export function MobileMenu({ pathname }: { pathname: string }) {
  const ref = useRef<HTMLElement>(null);
  useFocusTrap(ref, true);

  return (
    <nav
      ref={ref}
      id="mobile-menu"
      aria-label="Mobile Navigation"
      className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white px-4 py-6"
    >
      <ul className="flex flex-col gap-1">
        {mainNavigation.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block rounded-lg px-3 py-3 text-lg font-medium",
                  active ? "bg-brand-50 text-brand-700" : "text-navy-900 hover:bg-slate-50",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <ButtonLink href={contactLink.href} className="mt-6 w-full">
        {contactLink.label}
      </ButtonLink>
    </nav>
  );
}
