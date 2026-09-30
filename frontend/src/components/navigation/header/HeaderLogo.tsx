import Image from "next/image";
import Link from "next/link";

export function HeaderLogo() {
  return (
    <Link href="/" aria-label="Zur Startseite" className="relative block h-12 w-44 shrink-0 overflow-hidden min-[370px]:w-52">
      <Image
        src="/brand/logos/company-logo.png"
        alt="Sun & Moon IT Software Services"
        width={1777}
        height={887}
        priority
        sizes="(max-width: 369px) 176px, 208px"
        className="absolute -top-[1.9rem] left-0 h-auto w-full"
      />
    </Link>
  );
}
