import { DesktopNavigation } from "@/components/navigation/desktop/DesktopNavigation";
import { HeaderLogo } from "@/components/navigation/header/HeaderLogo";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";
import { Container } from "@/components/ui/container/Container";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between md:h-18">
        <HeaderLogo />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
