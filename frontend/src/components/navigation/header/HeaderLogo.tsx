import Image from "next/image";
import Link from "next/link";

/** Freigestelltes Logo. Ab xl liegt der Header auf dem schwarzen Hintergrund, dort die helle Variante. */
export function HeaderLogo() {
  return (
    <Link href="/" aria-label="Zur Startseite" className="block shrink-0 xl:-ml-6">
      <Image
        src="/brand/logos/logo-transparent.png"
        alt="Sun & Moon IT Software Services"
        width={1538}
        height={370}
        priority
        sizes="(max-width: 369px) 150px, 180px"
        className="h-9 w-auto min-[370px]:h-10 xl:hidden"
      />
      <Image
        src="/brand/logos/logo-on-dark.png"
        alt="Sun & Moon IT Software Services"
        width={1538}
        height={370}
        sizes="180px"
        className="hidden h-10 w-auto xl:block"
      />
    </Link>
  );
}
