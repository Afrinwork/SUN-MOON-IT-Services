import { DesktopNavItem } from "@/components/navigation/desktop/DesktopNavItem";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { mainNavigation } from "@/config/navigation.config";

export function DesktopNavigation() {
  return (
    <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
      <ul className="flex items-center gap-7">
        {mainNavigation.map((item) => <DesktopNavItem key={item.href} item={item} />)}
      </ul>
      <ButtonLink href="/kontakt" className="min-h-10 px-5 py-2">Projekt anfragen</ButtonLink>
    </nav>
  );
}
