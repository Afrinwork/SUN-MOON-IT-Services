import { company } from "@/content/about/company";

export function CompanyIntro() {
  return (
    <div className="max-w-3xl space-y-5 text-lg leading-8 text-muted">
      <p>{company.intro}</p>
      {company.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}
