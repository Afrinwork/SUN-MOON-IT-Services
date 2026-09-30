import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/helpers/cn";
import { externalLinkProps } from "@/lib/accessibility/external-link";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  secondary: "border border-navy-900/15 bg-white text-navy-900 hover:border-brand-500 hover:text-brand-700",
  ghost: "text-navy-900 hover:text-brand-600",
  inverted: "border border-white/30 text-white hover:bg-white/10",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string): string {
  return cn(base, variants[variant], className);
}

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  /** Öffnet in neuem Tab (z. B. externes Anfrageformular); `label` für Screenreader */
  external?: { label: string };
};

export function ButtonLink({ href, variant = "primary", className, children, external }: ButtonLinkProps) {
  const classes = buttonClasses(variant, className);
  if (external || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes} {...(external && externalLinkProps(external.label))}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
