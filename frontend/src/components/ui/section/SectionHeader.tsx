type Props = { eyebrow: string; title: string; text?: string; light?: boolean; centered?: boolean };

export function SectionHeader({ eyebrow, title, text, light = false, centered = false }: Props) {
  return (
    <header className={`mb-8 max-w-3xl md:mb-14 ${centered ? "mx-auto text-center" : ""}`}>
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-accent-strong"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-bold tracking-[-0.035em] md:text-5xl ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-7 md:text-lg ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </header>
  );
}
