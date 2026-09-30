import { DesktopNavigation } from "@/components/navigation/desktop/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";
import { Container } from "@/components/ui/containers/Container";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
