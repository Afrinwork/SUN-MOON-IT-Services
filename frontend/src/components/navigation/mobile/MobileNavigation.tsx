import { Menu } from "lucide-react";
import { MobileNavItem } from "@/components/navigation/mobile/MobileNavItem";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { mainNavigation } from "@/config/navigation.config";

export function MobileNavigation() {
  return (
    <details className="group relative lg:hidden">
      <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-border text-primary">
        <Menu size={21} /><span className="sr-only">Menü öffnen</span>
      </summary>
      <nav className="absolute right-0 top-14 max-h-[75vh] w-72 overflow-y-auto rounded-2xl border border-border bg-white p-3 shadow-2xl" aria-label="Mobile Navigation">
        {mainNavigation.map((item) => <MobileNavItem key={item.href} item={item} />)}
        <ButtonLink href="/kontakt" className="mt-2 w-full">Projekt anfragen</ButtonLink>
      </nav>
    </details>
  );
}
