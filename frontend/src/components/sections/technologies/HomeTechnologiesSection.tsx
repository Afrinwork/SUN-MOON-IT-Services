import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
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
import { PowerAppsIcon, PowerAutomateIcon, PowerBiIcon, SharePointIcon } from "@/components/icons/MicrosoftProductIcons";
import { Container } from "@/components/ui/container/Container";

type Technology = { name: string; icon: ReactNode };

const technologies: Technology[] = [
  { name: "Apple / iOS", icon: <FaApple className="text-white" /> },
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
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#d6b900]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#e34f26]" /> },
  { name: "CSS3", icon: <SiCss className="text-[#1572b6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-[#6db33f]" /> },
  { name: "Git", icon: <SiGit className="text-[#f05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ed]" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
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

        <ul className="-mx-5 mt-6 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:mx-0 md:mt-10 md:grid md:grid-cols-4 md:gap-x-3 md:gap-y-4 md:overflow-visible md:px-0 lg:grid-cols-6 xl:grid-cols-7">
          {technologies.map((technology, index) => (
            <li key={technology.name} className="tech-icon group flex w-24 shrink-0 snap-start flex-col items-center justify-center gap-2.5 py-3 text-center md:w-auto md:gap-3 md:py-5" style={{ "--tech-delay": `${(index % 7) * -0.45}s` } as CSSProperties}>
              <span className="tech-icon__glyph grid size-12 place-items-center text-[2.75rem] [&>svg]:size-11 md:size-14 md:[&>svg]:size-12">{technology.icon}</span>
              <span className="text-xs font-bold leading-5 text-white/85 transition group-hover:text-white">{technology.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-muted md:hidden">Zum Entdecken wischen →</p>
      </Container>
    </section>
  );
}
