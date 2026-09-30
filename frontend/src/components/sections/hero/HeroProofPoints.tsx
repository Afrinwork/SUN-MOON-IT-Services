import { CheckCircle2 } from "lucide-react";
import { heroContent } from "@/content/home/hero";

/** Echte, überprüfbare Stärken statt Werbefloskeln. Mobil: 2 Spalten, Desktop: eine Zeile. */
export function HeroProofPoints() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/75 md:flex md:flex-wrap md:gap-x-6">
      {heroContent.proofPoints.map((item, index) => (
        <li key={item} className={`hero-proof hero-proof-${Math.min(index + 1, 3)} flex items-start gap-2`}>
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />{item}
        </li>
      ))}
    </ul>
  );
}
