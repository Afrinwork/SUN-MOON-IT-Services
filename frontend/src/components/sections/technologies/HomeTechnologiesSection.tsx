import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode, SVGProps } from "react";
import { BiLogoMicrosoftTeams, BiLogoVisualStudio } from "react-icons/bi";
import { BsOpenai } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
import { FaAndroid, FaApple, FaJava, FaMicrosoft } from "react-icons/fa6";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import {
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { VscAzure, VscAzureDevops, VscTerminalPowershell } from "react-icons/vsc";
import { Container } from "@/components/ui/container/Container";

function PowerAppsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M23.92 8.06 22.43 6.57a2 2 0 0 0-2.93.11L4.85 23.7a2 2 0 0 0 .1 2.72L19.9 41.36a2 2 0 0 0 2.93-.11l1.18-1.38" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="m20.17 15.4 6.17 6.18a2 2 0 0 1 .1 2.72l-7.12 8.27a2 2 0 0 0 .1 2.72l6.15 6.14a2 2 0 0 0 2.93-.11l14.65-17.02a2 2 0 0 0-.1-2.72L28.1 6.64a2 2 0 0 0-2.93.11l-5.11 5.94a2 2 0 0 0 .1 2.71Z" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="m39.24 28.84-1.21 1.4a2 2 0 0 1-2.92.1l-6.15-6.14a2 2 0 0 1-.1-2.72l5.11-5.94a2 2 0 0 1 2.93-.1l1.35 1.35" />
    </svg>
  );
}

function PowerAutomateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path fill="#1152d4" d="m5.5 88.4 150 167.6L335.9 54.3a22 22 0 0 0-8.1-1.7H21.4c-18.5.1-28.2 22-15.9 35.8" />
      <path fill="#61b1fb" d="m470.4 310.7 36.2-40.4a21.4 21.4 0 0 0 0-28.5L343.8 59.8a22 22 0 0 0-7.9-5.5L155.5 256 5.5 423.6c-12.3 13.8-2.6 35.7 15.9 35.7h306.4c6.1 0 11.9-2.6 15.9-7.1Z" />
      <path fill="#2a78ee" d="M335.9 54.3 155.5 256 5.5 423.6c-12.3 13.8-2.6 35.7 15.9 35.7h134l272.9-305-84.5-94.5a22 22 0 0 0-7.9-5.5" />
    </svg>
  );
}

function SharePointIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M22 13.25a5 5 0 0 1-6.27 4.84A4.38 4.38 0 0 1 7 17.63V17H2.83A.84.84 0 0 1 2 16.17V7.83A.84.84 0 0 1 2.83 7h2.95A5.63 5.63 0 0 1 17 7.63v.62a5 5 0 0 1 5 5M7.1 15.25c1.35 0 2.4-.54 2.4-1.84 0-1.22-.92-1.6-2.18-2.14-.45-.18-.77-.36-.77-.65 0-.4.55-.52 1.03-.52.65 0 1.13.2 1.67.5V9.12a5.7 5.7 0 0 0-1.7-.26c-1.35 0-2.52.58-2.52 1.83 0 1.2.9 1.66 2.19 2.1.5.2.78.4.78.67 0 .42-.47.54-1 .54-.8 0-1.37-.27-1.96-.7v1.56c.66.26 1.35.39 2.06.39" />
    </svg>
  );
}

function PowerBiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect x="3" y="16" width="7" height="13" rx="1.5" fill="#f9e589" />
      <rect x="9" y="9" width="8" height="20" rx="1.5" fill="#f6d751" />
      <rect x="16" y="3" width="8" height="26" rx="1.5" fill="#e6ad10" />
      <rect x="23" y="1" width="6" height="28" rx="1.5" fill="#c87e0e" />
    </svg>
  );
}

type Technology = { name: string; icon: ReactNode };

const technologies: Technology[] = [
  { name: "Apple / iOS", icon: <FaApple className="text-[#111827]" /> },
  { name: "Android", icon: <FaAndroid className="text-[#3ddc84]" /> },
  { name: "WordPress", icon: <SiWordpress className="text-[#21759b]" /> },
  { name: "Java", icon: <FaJava className="text-[#e76f00]" /> },
  { name: "OpenAI", icon: <BsOpenai className="text-[#10a37f]" /> },
  { name: "SharePoint", icon: <SharePointIcon className="text-[#038387]" /> },
  { name: "Power Apps", icon: <PowerAppsIcon className="text-[#742774]" /> },
  { name: "Power Automate", icon: <PowerAutomateIcon /> },
  { name: "Power BI", icon: <PowerBiIcon /> },
  { name: "SQL Server", icon: <DiMsqlServer className="text-[#cc2927]" /> },
  { name: "Microsoft 365", icon: <FaMicrosoft className="text-[#f25022]" /> },
  { name: "Microsoft Azure", icon: <VscAzure className="text-[#0078d4]" /> },
  { name: "Microsoft Teams", icon: <BiLogoMicrosoftTeams className="text-[#6264a7]" /> },
  { name: "Microsoft Outlook", icon: <PiMicrosoftOutlookLogoFill className="text-[#0078d4]" /> },
  { name: "React", icon: <SiReact className="text-[#149eca]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#d6b900]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#e34f26]" /> },
  { name: "CSS3", icon: <SiCss className="text-[#1572b6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-[#6db33f]" /> },
  { name: "Git", icon: <SiGit className="text-[#f05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ed]" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Visual Studio", icon: <BiLogoVisualStudio className="text-[#5c2d91]" /> },
  { name: "Azure DevOps", icon: <VscAzureDevops className="text-[#0078d4]" /> },
  { name: "PowerShell", icon: <VscTerminalPowershell className="text-[#5391fe]" /> },
];

export function HomeTechnologiesSection() {
  return (
    <section className="home-technologies overflow-hidden bg-white py-9 md:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-strong">Technologien &amp; Plattformen</p>
            <h2 className="mt-3 text-[1.75rem] font-black leading-tight tracking-[-0.035em] text-primary min-[380px]:text-3xl md:text-4xl">Mit diesen Systemen arbeiten wir.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted md:mt-4 md:text-base md:leading-7">Zum Beispiel Microsoft 365, WordPress, React, iOS und Android. Wir wählen aus, was zu Ihrem Projekt passt.</p>
          </div>
          <Link href="/technologien" className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-accent-strong transition hover:text-primary">
            Alle Technologien <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="-mx-5 mt-6 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:mx-0 md:mt-8 md:grid md:grid-cols-4 md:gap-3 md:overflow-visible md:px-0 lg:grid-cols-6 xl:grid-cols-7">
          {technologies.map((technology) => (
            <li key={technology.name} className="group flex min-h-24 w-28 shrink-0 snap-start flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface/70 p-3 text-center transition duration-300 active:scale-[0.98] md:min-h-28 md:w-auto md:gap-3 md:p-4 md:hover:-translate-y-1 md:hover:border-accent/45 md:hover:bg-white md:hover:shadow-xl md:hover:shadow-primary/7">
              <span className="grid size-9 place-items-center text-[2rem] transition duration-300 group-hover:scale-110 [&>svg]:size-8">{technology.icon}</span>
              <span className="text-xs font-bold leading-5 text-primary">{technology.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-muted md:hidden">Zum Entdecken wischen →</p>
      </Container>
    </section>
  );
}
