import Link from "next/link";
import { ArrowUpRight, BadgeEuro, BriefcaseBusiness, Layers3, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container/Container";

const shortcuts = [
  { href: "/leistungen", label: "Leistungen", hint: "Was wir umsetzen", icon: Layers3 },
  { href: "/preise", label: "Preise", hint: "Klare Orientierung", icon: BadgeEuro },
  { href: "/projekte", label: "Projekte", hint: "Ergebnisse ansehen", icon: BriefcaseBusiness },
  { href: "/kontakt", label: "Kontakt", hint: "Direkt sprechen", icon: MessageCircle },
] as const;

export function MobileHomeNav() {
  return (
    <section className="mobile-home-nav bg-white py-5 md:hidden" aria-labelledby="mobile-home-nav-title">
      <Container>
        <div className="mb-3 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-accent-strong">Schneller Einstieg</p>
            <h2 id="mobile-home-nav-title" className="mt-1 text-xl font-black tracking-[-0.035em] text-primary">Direkt zum Ziel.</h2>
          </div>
          <span className="text-xs font-semibold text-muted">1 Tipp genügt</span>
        </div>
        <nav className="grid grid-cols-2 gap-2" aria-label="Schnelleinstieg">
          {shortcuts.map(({ href, label, hint, icon: Icon }, index) => (
            <Link key={href} href={href} className="mobile-shortcut group relative min-h-24 overflow-hidden rounded-2xl border border-border bg-surface p-3.5 transition active:scale-[0.98]">
              <span className="grid size-8 place-items-center rounded-xl bg-primary text-accent"><Icon size={16} /></span>
              <span className="mt-3 block text-sm font-black leading-none text-primary">{label}</span>
              <span className="mt-1 block text-[0.68rem] font-medium text-muted">{hint}</span>
              <ArrowUpRight size={15} className="absolute right-3 top-3 text-accent-strong transition group-active:translate-x-0.5 group-active:-translate-y-0.5" />
              <i className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-active:scale-x-100" aria-hidden="true" style={{ transitionDelay: `${index * 25}ms` }} />
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
