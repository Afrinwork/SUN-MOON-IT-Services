import type { ReactNode } from "react";
import { cn } from "@/lib/helpers/cn";

type BadgeProps = { children: ReactNode; tone?: "brand" | "inverted" };

export function Badge({ children, tone = "brand" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tone === "brand" ? "bg-brand-50 text-brand-700" : "border border-white/15 bg-white/5 text-white",
      )}
    >
      {children}
    </span>
  );
}
