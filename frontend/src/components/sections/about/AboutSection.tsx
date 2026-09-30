import { Section } from "@/components/ui/containers/Section";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { CheckList } from "@/components/ui/typography/CheckList";
import { aboutContent } from "@/content/about/about";

export function AboutSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeader eyebrow="Unsere Geschichte" title={aboutContent.title} align="left" />
          <div className="space-y-4 text-lg text-slate-600">
            {aboutContent.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="self-start rounded-2xl border border-slate-200 p-6 md:p-8">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-brand-700">Wofür wir stehen</h3>
          <CheckList items={aboutContent.values} />
        </aside>
      </div>
    </Section>
  );
}
