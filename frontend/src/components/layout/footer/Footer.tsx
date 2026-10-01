import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { EmailIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons/PlatformIcons";
import { Container } from "@/components/ui/container/Container";
import { footerGroups, legalLinks } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import { CookieSettingsButton } from "@/features/cookies/components/CookieSettingsButton";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <Container className="grid grid-cols-1 gap-x-6 gap-y-10 py-12 min-[380px]:grid-cols-2 md:gap-12 md:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="min-[380px]:col-span-2 lg:col-span-1">
          <Image src="/brand/logos/logo-on-dark.png" alt={siteConfig.name} width={1538} height={370} sizes="190px" className="mb-6 h-10 w-auto" />
          <p className="max-w-sm leading-7 text-white/60">Digitale Lösungen, die Abläufe vereinfachen, Wachstum ermöglichen und langfristig funktionieren.</p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex min-w-0 items-center gap-3"><EmailIcon size={17} className="shrink-0 text-accent" /><span className="min-w-0 break-all">{siteConfig.email}</span></p>
            <p className="flex items-center gap-3"><Phone size={16} className="shrink-0 text-accent" /> {siteConfig.phone}</p>
            <p className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-accent" /><span>{siteConfig.address}</span></p>
          </div>
          <div className="mt-6 flex items-center gap-2" aria-label="Kontakt und soziale Netzwerke">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" className="grid size-10 place-items-center rounded-full bg-white text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25D366]/25"><WhatsAppIcon size={25} /></a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="grid size-10 place-items-center rounded-full bg-white text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ee2a7b]/25"><InstagramIcon size={25} /></a>
            {siteConfig.tiktokUrl ? (
              <a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok" className="grid size-10 place-items-center rounded-full border border-white/15 bg-black text-white transition duration-300 hover:-translate-y-1 hover:border-[#25f4ee]/60"><TikTokIcon size={27} /></a>
            ) : (
              <span role="img" aria-label="TikTok – Profillink folgt" title="TikTok – Profillink folgt" className="grid size-10 place-items-center rounded-full border border-white/15 bg-black text-white/80"><TikTokIcon size={27} /></span>
            )}
            <a href={`mailto:${siteConfig.email}`} aria-label="E-Mail" title="E-Mail" className="grid size-10 place-items-center rounded-full bg-accent text-primary-deep transition duration-300 hover:-translate-y-1 hover:bg-white"><EmailIcon size={21} /></a>
          </div>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">{group.title}</h2>
            <ul className="space-y-1 text-sm text-white/70">
              {group.links.map(([label, href]) => <li key={href}><Link href={href} className="inline-block py-1.5 transition hover:text-white">{label}</Link></li>)}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-sm md:flex-row md:items-center">
          <span className="font-bold text-white">Wir sprechen:</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-white/60" aria-label="Sprachen">
            <Link href="/sprachen" className="transition hover:text-white">Deutsch</Link>
            <Link href="/en" hrefLang="en" className="transition hover:text-white">English</Link>
            <Link href="/ar" hrefLang="ar" lang="ar" dir="rtl" className="transition hover:text-white">العربية</Link>
            <Link href="/tr" hrefLang="tr" className="transition hover:text-white">Türkçe</Link>
            <Link href="/ku" hrefLang="ku" className="transition hover:text-white">Kurdî</Link>
          </nav>
        </Container>
      </div>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map(([label, href]) => <Link key={href} href={href} className="inline-block py-1.5 transition hover:text-white">{label}</Link>)}
            <CookieSettingsButton />
          </div>
        </Container>
      </div>
    </footer>
  );
}
