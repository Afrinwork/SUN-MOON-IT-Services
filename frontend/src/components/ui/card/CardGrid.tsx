import type { ReactNode } from "react";

export function CardGrid({ children }: { children: ReactNode }) {
  return <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</ul>;
}
