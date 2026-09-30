import type { ReactNode } from "react";
import { cn } from "@/lib/helpers/cn";

type NoticeProps = { children: ReactNode; tone?: "info" | "warning" };

const tones = {
  info: "border-brand-100 bg-brand-50 text-navy-900",
  warning: "border-amber-300 bg-amber-50 text-amber-900",
};

export function Notice({ children, tone = "info" }: NoticeProps) {
  return <div className={cn("rounded-lg border p-4 text-sm", tones[tone])}>{children}</div>;
}
