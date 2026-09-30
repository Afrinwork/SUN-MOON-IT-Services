import { Icon } from "@/components/ui/icons/Icon";
import { siteConfig } from "@/config/site/site.config";
import { formatAddress } from "@/lib/helpers/format-address";
import { toTelHref } from "@/lib/helpers/format-phone";
import { cn } from "@/lib/helpers/cn";

type FooterContactProps = { className?: string; linkClassName?: string };

/** Telefon + Adresse (keine E-Mail – Kontakt läuft über Telefon bzw. externes Formular). */
export function FooterContact({ className, linkClassName = "hover:text-white" }: FooterContactProps) {
  const { phone, hours } = siteConfig.contact;
  return (
    <ul className={cn("flex flex-col gap-2.5 text-sm", className)}>
      <li className="flex items-center gap-2">
        <Icon name="phone" size={16} className="shrink-0 text-brand-500" />
        <a href={toTelHref(phone)} className={linkClassName}>{phone}</a>
      </li>
      <li className="flex items-center gap-2">
        <Icon name="clock" size={16} className="shrink-0 text-brand-500" />
        <span>{hours}</span>
      </li>
      <li className="flex items-start gap-2">
        <Icon name="mapPin" size={16} className="mt-0.5 shrink-0 text-brand-500" />
        <span>{formatAddress(siteConfig.address)}</span>
      </li>
    </ul>
  );
}
