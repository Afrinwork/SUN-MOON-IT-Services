import { Menu } from "lucide-react";
import Link from "next/link";
import { HeaderLogo } from "@/components/navigation/header/HeaderLogo";
import { Container } from "@/components/ui/container/Container";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import { mainNavigation as nav } from "@/config/navigation.config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <HeaderLogo />
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-muted transition hover:text-accent-strong">{label}</Link>)}
          <ButtonLink href="/kontakt" className="min-h-10 px-5 py-2">Projekt anfragen</ButtonLink>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-border text-primary">
            <Menu size={21} /><span className="sr-only">Menü öffnen</span>
          </summary>
          <nav className="absolute right-0 top-14 w-64 rounded-2xl border border-border bg-white p-3 shadow-2xl" aria-label="Mobile Navigation">
            {nav.map(([label, href]) => <Link key={href} href={href} className="block rounded-xl px-4 py-3 font-semibold text-primary hover:bg-surface">{label}</Link>)}
            <ButtonLink href="/kontakt" className="mt-2 w-full">Projekt anfragen</ButtonLink>
          </nav>
        </details>
      </Container>
    </header>
  );
}
