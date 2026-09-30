import { siteConfig } from "@/config/site/site.config";
import { externalLinkProps } from "@/lib/accessibility/external-link";

const labels: Record<keyof typeof siteConfig.social, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  xing: "XING",
  instagram: "Instagram",
};

export function SocialLinks() {
  const links = (Object.keys(labels) as (keyof typeof labels)[])
    .map((key) => ({ label: labels[key], href: siteConfig.social[key] as string }))
    .filter((link) => link.href.length > 0);

  if (links.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-4 text-sm">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="hover:text-white" {...externalLinkProps(link.label)}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
