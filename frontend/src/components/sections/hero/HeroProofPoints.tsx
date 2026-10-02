import { CheckCircle2 } from "lucide-react";
import { heroContent } from "@/content/home/hero";

/** Echte, überprüfbare Stärken statt Werbefloskeln. Mobil: 2 Spalten, Desktop: eine Zeile. */
export function HeroProofPoints() {
  return (
    <ul className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 text-xs text-white/75 [scrollbar-width:none] md:mx-0 md:flex-wrap md:gap-x-6 md:overflow-visible md:px-0 md:pb-0 md:text-sm">
      {heroContent.proofPoints.map((item, index) => (
        <li key={item} className={`hero-proof hero-proof-${Math.min(index + 1, 3)} flex shrink-0 snap-start items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:border-0 md:bg-transparent md:px-0 md:py-0`}>
          <CheckCircle2 size={14} className="shrink-0 text-accent md:size-4" />{item}
        </li>
      ))}
    </ul>
  );
}
