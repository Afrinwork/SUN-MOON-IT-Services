import { MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/seo/structuredData";

/** Mobil: wischbare Chip-Leiste. Desktop: umbrechende Chips. */
export function ServiceAreaList() {
  return (
    <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
      {serviceAreas.map((area) => (
        <li key={area} className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-primary">
          <MapPin size={15} className="text-accent-strong" /> {area}
        </li>
      ))}
    </ul>
  );
}
