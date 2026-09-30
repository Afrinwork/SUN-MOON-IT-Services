import { Logo } from "@/components/layout/header/Logo";
import { Container } from "@/components/ui/containers/Container";
import { Divider } from "@/components/ui/dividers/Divider";
import { siteConfig } from "@/config/site/site.config";
import { FooterContact } from "./FooterContact";
import { FooterNavigation } from "./FooterNavigation";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col gap-5">
          <Logo inverted />
          <p className="max-w-sm text-sm leading-relaxed">{siteConfig.tagline}</p>
          <FooterContact />
          <SocialLinks />
        </div>
        <FooterNavigation />
      </Container>
      <Divider inverted />
      <Container className="py-6 text-xs text-slate-400">
        © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
      </Container>
    </footer>
  );
}
