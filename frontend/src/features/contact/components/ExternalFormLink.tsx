import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site.config";

/** Verweist auf ein externes Anfrageformular – erscheint nur, wenn eine URL hinterlegt ist. */
export function ExternalFormLink() {
  if (!siteConfig.externalFormUrl) return null;
  return (
    <a href={siteConfig.externalFormUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-primary-deep transition hover:-translate-y-0.5">
      Zum Anfrageformular <ExternalLink size={16} />
    </a>
  );
}
