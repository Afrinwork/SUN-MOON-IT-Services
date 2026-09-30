import type { ReactNode } from "react";
import { cn } from "@/lib/helpers/cn";

type CardProps = { children: ReactNode; className?: string; interactive?: boolean };

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        interactive && "transition hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
