import { cn } from "@/lib/helpers/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  inverted?: boolean;
  /** h1 nur, wenn der Abschnitt die Seitenüberschrift ist */
  as?: "h1" | "h2";
};

export function SectionHeader({ eyebrow, title, text, align = "center", inverted = false, as: Heading = "h2" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 max-w-2xl md:mb-12", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>}
      <Heading className={cn("text-3xl font-bold tracking-tight md:text-4xl", inverted ? "text-white" : "text-navy-900")}>
        {title}
      </Heading>
      {text && <p className={cn("mt-4 text-lg", inverted ? "text-slate-300" : "text-slate-600")}>{text}</p>}
    </div>
  );
}
