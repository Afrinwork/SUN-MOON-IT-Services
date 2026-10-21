import Image from "next/image";
import Link from "next/link";

/** Helle Logo-Variante, der Header liegt auf allen Größen auf dem schwarzen Hintergrund. */
export function HeaderLogo() {
  return (
    <Link href="/" aria-label="Zur Startseite" className="block shrink-0 xl:-ml-6">
      <Image
        src="/brand/logos/logo-on-dark.png"
        alt="Sun & Moon IT Software Services"
        width={1538}
        height={370}
        priority
        sizes="(max-width: 369px) 130px, 180px"
        className="h-8 w-auto min-[370px]:h-9 xl:h-10"
      />
    </Link>
  );
}
