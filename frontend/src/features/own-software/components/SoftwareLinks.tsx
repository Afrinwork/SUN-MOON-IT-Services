import { ExternalLink } from "lucide-react";

export function SoftwareLinks({ url }: { url?: string }) {
  if (!url) return null;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-primary-deep transition hover:-translate-y-0.5 hover:bg-white">
      Zur Anwendung <ExternalLink size={16} />
    </a>
  );
}
