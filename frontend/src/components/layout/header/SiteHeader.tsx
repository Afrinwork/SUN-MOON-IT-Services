import { DesktopNavigation } from "@/components/navigation/desktop/DesktopNavigation";
import { HeaderLogo } from "@/components/navigation/header/HeaderLogo";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";
import { Container } from "@/components/ui/container/Container";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl xl:border-0 xl:bg-transparent xl:bg-gradient-to-b xl:from-black xl:via-black/85 xl:to-transparent xl:backdrop-blur-none">
      <Container className="flex h-16 items-center justify-between md:h-18 xl:h-22 2xl:max-w-[92rem]">
        <HeaderLogo />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
