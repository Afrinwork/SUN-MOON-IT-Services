import { Section } from "@/components/ui/containers/Section";
import { Icon } from "@/components/ui/icons/Icon";
import { SectionHeader } from "@/components/ui/typography/SectionHeader";
import { whyUsContent } from "@/content/home/why-us";

/** Zweispaltig: Überschrift links (sticky ab lg), Argumente als Liste mit Trennlinien rechts – bewusst ohne Karten. */
export function WhyUsSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader eyebrow={whyUsContent.eyebrow} title={whyUsContent.title} align="left" />
        </div>
        <ul className="divide-y divide-slate-200 border-y border-slate-200">
          {whyUsContent.items.map((item) => (
            <li key={item.title} className="flex gap-5 py-6">
              <Icon name={item.icon} size={24} className="mt-1 shrink-0 text-brand-600" />
              <div>
                <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1 text-slate-600">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
