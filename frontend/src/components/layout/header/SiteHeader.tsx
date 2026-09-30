import { DesktopNavigation } from "@/components/navigation/desktop/DesktopNavigation";
import { HeaderLogo } from "@/components/navigation/header/HeaderLogo";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";
import { Container } from "@/components/ui/container/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <HeaderLogo />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
