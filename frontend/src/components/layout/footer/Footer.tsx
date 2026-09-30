import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container/Container";

const groups = [
  { title: "Leistungen", links: [["Webentwicklung", "/leistungen/webentwicklung"], ["App-Entwicklung", "/leistungen/app-entwicklung"], ["Softwareentwicklung", "/leistungen/softwareentwicklung"], ["KI & Automatisierung", "/leistungen/ki-automatisierung"]] },
  { title: "Unternehmen", links: [["Projekte", "/projekte"], ["Kunden", "/kunden"], ["Über uns", "/ueber-uns"], ["Kontakt", "/kontakt"]] },
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3 text-xl font-black">M<span className="text-accent">&</span>L <span className="text-sm font-medium text-white/50">IT Software Services</span></div>
          <p className="max-w-sm leading-7 text-white/60">Digitale Lösungen, die Abläufe vereinfachen, Wachstum ermöglichen und langfristig funktionieren.</p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-3"><Mail size={16} className="text-accent" /> kontakt@ml-it-services.de</p>
            <p className="flex items-center gap-3"><Phone size={16} className="text-accent" /> +49 (0) 000 000000</p>
            <p className="flex items-center gap-3"><MapPin size={16} className="text-accent" /> Deutschland</p>
          </div>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">{group.title}</h2>
            <ul className="space-y-3 text-sm text-white/65">
              {group.links.map(([label, href]) => <li key={href}><Link href={href} className="transition hover:text-white">{label}</Link></li>)}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 M&L IT Software Services</p>
          <div className="flex gap-5"><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><Link href="/agb">AGB</Link></div>
        </Container>
      </div>
    </footer>
  );
}
