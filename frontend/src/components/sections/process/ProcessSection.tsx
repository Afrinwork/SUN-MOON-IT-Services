import { Section } from "@/components/ui/containers/Section";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { processContent } from "@/content/process/steps";

/** Mobil: vertikale Zeitleiste. Desktop: vier Spalten mit durchgehender Linie. */
export function ProcessSection() {
  return (
    <Section>
      <SectionHeader eyebrow={processContent.eyebrow} title={processContent.title} align="left" />
      <ol className="relative grid grid-cols-1 gap-8 border-l-2 border-brand-100 pl-6 md:grid-cols-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8">
        {processContent.steps.map((step, index) => (
          <li key={step.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[33px] top-1 size-4 rounded-full border-4 border-white bg-brand-500 md:-top-[41px] md:left-0"
            />
            <span className="text-sm font-bold tabular-nums text-brand-700">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 text-lg font-semibold text-navy-900">{step.title}</h3>
            <p className="mt-2 text-slate-600">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
