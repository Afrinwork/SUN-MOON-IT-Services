import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button/ButtonLink";
import type { BlogTopic } from "@/content/blog/topics";

export function BlogRelatedService({ service }: { service: BlogTopic["service"] }) {
  return (
    <aside className="mt-12 rounded-3xl bg-primary p-6 text-white md:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">Passende Leistung</p>
      <p className="mt-2 text-xl font-bold md:text-2xl">{service.label} – persönlich beraten, verständlich umgesetzt.</p>
      <ButtonLink href={service.href} className="mt-6">Mehr erfahren <ArrowRight size={17} /></ButtonLink>
    </aside>
  );
}
