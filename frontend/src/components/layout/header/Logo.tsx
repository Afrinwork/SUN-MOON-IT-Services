import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site/site.config";
import { themeConfig } from "@/config/theme/theme.config";
import { cn } from "@/lib/helpers/cn";

/** Logo aus Bildmarke + Firmenname aus der Config (Name ändern = nur site.config.ts). */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label={`${siteConfig.name} – Startseite`}>
      <Image src={themeConfig.logoMark} alt="" width={36} height={36} priority />
      <span className={cn("flex flex-col leading-none", inverted ? "text-white" : "text-navy-900")}>
        <span className="text-lg font-black tracking-tight">{siteConfig.shortName}</span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em]">Software Services</span>
      </span>
    </Link>
  );
}
