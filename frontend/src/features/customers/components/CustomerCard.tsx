import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Customer } from "@/features/customers/types/customer.types";

export function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-white p-7">
      <p className="text-xs font-bold uppercase tracking-widest text-accent-strong">{customer.industry}</p>
      <h3 className="mt-2 text-xl font-bold text-primary">{customer.name}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted">{customer.text}</p>
      {customer.projectSlug && (
        <Link href={`/projekte/kundenprojekte/${customer.projectSlug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent-strong">Zum Projekt <ArrowRight size={16} /></Link>
      )}
    </article>
  );
}
