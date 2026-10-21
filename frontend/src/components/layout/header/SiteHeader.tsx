import { DesktopNavigation } from "@/components/navigation/desktop/DesktopNavigation";
import { GlassNavBar } from "@/components/navigation/desktop/GlassNavBar";
import { HeaderLogo } from "@/components/navigation/header/HeaderLogo";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";
import { Container } from "@/components/ui/container/Container";

/** Dunkler Header auf allen Größen. Mobil und Tablet: Logo und Menü-Knopf in der Glas-Leiste, ab xl: Logo, Glas-Navigation, Button. */
export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 bg-gradient-to-b from-black via-black/85 to-transparent">
      <Container className="flex h-16 items-center justify-between md:h-18 xl:h-22 2xl:max-w-[92rem]">
        <div className="w-full xl:hidden">
          <GlassNavBar><div className="flex items-center justify-between gap-3 pl-2.5"><HeaderLogo /><MobileNavigation /></div></GlassNavBar>
        </div>
        <div className="hidden w-full items-center justify-between xl:flex">
          <HeaderLogo />
          <DesktopNavigation />
        </div>
      </Container>
    </header>
  );
}
