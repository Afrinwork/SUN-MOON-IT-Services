import { CheckCircle2 } from "lucide-react";
import { introContent } from "@/content/home/intro";

/** Echte, überprüfbare Stärken statt Werbefloskeln. Mobil: wischbare Chips, Desktop: Raster mit zwei Spalten. */
export function IntroProofPoints() {
  return (
    <ul className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 text-xs font-semibold text-primary [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 md:overflow-visible md:px-0 md:pb-0 md:text-sm">
      {introContent.proofPoints.map((item) => (
        <li key={item} className="flex shrink-0 snap-start items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 md:rounded-none md:border-0 md:bg-transparent md:p-0">
          <CheckCircle2 size={16} className="shrink-0 text-accent-strong" />{item}
        </li>
      ))}
    </ul>
  );
}
