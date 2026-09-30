import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; className?: string };

const styles = {
  primary: "bg-accent text-primary-deep hover:bg-white hover:-translate-y-0.5",
  secondary: "border border-white/25 bg-white/5 text-white hover:bg-white/12 hover:-translate-y-0.5",
  light: "bg-white text-primary hover:-translate-y-0.5 hover:shadow-xl",
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  return (
    <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
