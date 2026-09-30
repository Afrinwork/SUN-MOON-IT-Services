import Image from "next/image";
import Link from "next/link";

export function HeaderLogo() {
  return (
    <Link href="/" aria-label="Zur Startseite" className="relative block h-12 w-52 shrink-0 overflow-hidden">
      <Image
        src="/brand/logos/company-logo.png"
        alt="Sun & Moon IT Services"
        width={1777}
        height={887}
        priority
        sizes="208px"
        className="absolute -top-[1.9rem] left-0 h-auto w-full"
      />
    </Link>
  );
}
