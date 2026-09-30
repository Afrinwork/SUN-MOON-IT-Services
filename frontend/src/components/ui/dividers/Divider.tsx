import { cn } from "@/lib/helpers/cn";

export function Divider({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return <hr className={cn("border-t", inverted ? "border-white/10" : "border-slate-200", className)} />;
}
