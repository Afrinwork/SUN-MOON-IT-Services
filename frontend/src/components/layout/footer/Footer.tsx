import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container/Container";
import { footerGroups, legalLinks } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import { CookieSettingsButton } from "@/features/cookies/components/CookieSettingsButton";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 text-xl font-black">Sun <span className="text-accent">&amp;</span> Moon <span className="block text-sm font-medium text-white/50">IT Software Services</span></div>
          <p className="max-w-sm leading-7 text-white/60">Digitale Lösungen, die Abläufe vereinfachen, Wachstum ermöglichen und langfristig funktionieren.</p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-3"><Mail size={16} className="text-accent" /> {siteConfig.email}</p>
            <p className="flex items-center gap-3"><Phone size={16} className="text-accent" /> {siteConfig.phone}</p>
            <p className="flex items-center gap-3"><MapPin size={16} className="text-accent" /> {siteConfig.address}</p>
          </div>
        </div>
        {footerGroups.map((group) => (
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
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map(([label, href]) => <Link key={href} href={href} className="transition hover:text-white">{label}</Link>)}
            <CookieSettingsButton />
          </div>
        </Container>
      </div>
    </footer>
  );
}
