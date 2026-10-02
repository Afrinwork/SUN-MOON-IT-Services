type Props = { eyebrow: string; title: string; text?: string; light?: boolean; centered?: boolean };

export function SectionHeader({ eyebrow, title, text, light = false, centered = false }: Props) {
  return (
    <header className={`mb-6 max-w-3xl md:mb-14 ${centered ? "mx-auto text-center" : ""}`}>
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-accent-strong"}`}>{eyebrow}</p>
      <h2 className={`break-words text-[1.75rem] font-bold leading-tight tracking-[-0.035em] min-[380px]:text-3xl md:text-4xl lg:text-5xl ${light ? "text-white" : "text-foreground"}`}>{title}</h2>
      {text && <p className={`mt-3 text-sm leading-6 md:mt-5 md:text-lg md:leading-7 ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </header>
  );
}
