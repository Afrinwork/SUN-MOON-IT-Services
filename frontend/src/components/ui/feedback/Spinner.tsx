import { cn } from "@/lib/helpers/cn";

type SpinnerProps = { className?: string; label?: string };

export function Spinner({ className, label = "Wird geladen" }: SpinnerProps) {
  return (
    <span role="status" className="inline-flex">
      <span className={cn("size-5 animate-spin rounded-full border-2 border-current border-t-transparent", className)} />
      <span className="sr-only">{label}</span>
    </span>
  );
}
