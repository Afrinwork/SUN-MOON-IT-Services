import Image from "next/image";
import Link from "next/link";

/** Freigestelltes Logo (transparenter Hintergrund, ohne Zuschnitt-Trick). */
export function HeaderLogo() {
  return (
    <Link href="/" aria-label="Zur Startseite" className="block shrink-0">
      <Image
        src="/brand/logos/logo-transparent.png"
        alt="Sun & Moon IT Software Services"
        width={1538}
        height={370}
        priority
        sizes="(max-width: 369px) 150px, 180px"
        className="h-9 w-auto min-[370px]:h-10"
      />
    </Link>
  );
}
