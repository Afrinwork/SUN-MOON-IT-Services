import { CardGrid } from "@/components/ui/card/CardGrid";
import { EmptyState } from "@/components/ui/empty/EmptyState";
import { CustomerCard } from "@/features/customers/components/CustomerCard";
import { customers } from "@/features/customers/data/customers";

export function CustomerGrid() {
  if (customers.length === 0) return <EmptyState text="Referenzen unserer Kunden folgen in Kürze." />;
  return <CardGrid>{customers.map((c) => <li key={c.name}><CustomerCard customer={c} /></li>)}</CardGrid>;
}
