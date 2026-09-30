import { Check } from "lucide-react";
import { headingId } from "@/features/blog/headingId";
import type { BlogSection } from "@/features/blog/types/blog.types";

export function BlogArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-10 md:space-y-12">
      {sections.map((section) => (
        <section key={section.heading} id={headingId(section.heading)} className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-primary md:text-3xl">{section.heading}</h2>
          {section.paragraphs.map((text) => <p key={text} className="mt-4 text-base leading-8 text-foreground/85 md:text-lg">{text}</p>)}
          {section.list && (
            <ul className="mt-5 space-y-3">
              {section.list.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-7 text-foreground/85">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent-strong"><Check size={12} /></span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
