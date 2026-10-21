import type { ReactNode } from "react";
import { BiLogoMicrosoftTeams, BiLogoVisualStudio } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { FaAndroid, FaApple, FaJava, FaMicrosoft, FaWindows } from "react-icons/fa6";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import {
  SiCss, SiDocker, SiGit, SiGithub, SiGoogleplay, SiHtml5, SiJavascript, SiJson, SiNextdotjs, SiPwa,
  SiReact, SiSpringboot, SiTailwindcss, SiTypescript, SiVercel, SiWordpress,
} from "react-icons/si";
import { VscAzure, VscAzureDevops, VscTerminalPowershell, VscVscode } from "react-icons/vsc";
import {
  BadgeCheck, Bell, Bot, Bug, ClipboardCheck, CircleDot, Database, FileCode2, KeyRound, LayoutTemplate, LifeBuoy,
  MonitorSmartphone, MousePointerClick, Plug, RefreshCw, Repeat, Server, Shield, Smartphone, Users, WifiOff,
} from "lucide-react";
import { PowerAppsIcon, PowerAutomateIcon, PowerBiIcon, SharePointIcon } from "@/components/icons/MicrosoftProductIcons";

/**
 * Logo je Technologie. Reihenfolge zählt: spezielle Begriffe vor allgemeinen (z. B. „Azure DevOps“ vor „Azure“).
 * Für allgemeine Begriffe ohne Marke gibt es ein passendes Linien-Icon.
 */
const rules: [RegExp, ReactNode][] = [
  [/power ?bi|dax|power query|dashboard/i, <PowerBiIcon key="pbi" />],
  [/power automate|workflow|prozessautomat|business process/i, <PowerAutomateIcon key="pa" />],
  [/power apps|canvas apps|power fx|dataverse/i, <PowerAppsIcon key="papps" className="text-[#742774]" />],
  [/sharepoint|spfx/i, <SharePointIcon key="sp" className="text-[#038387]" />],
  [/teams/i, <BiLogoMicrosoftTeams key="teams" className="text-[#6264a7]" />],
  [/outlook|exchange/i, <PiMicrosoftOutlookLogoFill key="outlook" className="text-[#0078d4]" />],
  [/azure devops|ci\/cd/i, <VscAzureDevops key="ado" className="text-[#0078d4]" />],
  [/azure/i, <VscAzure key="azure" className="text-[#0078d4]" />],
  [/entra|active directory|identity|conditional access|multi-factor|rbac|berechtigung|zugriff/i, <KeyRound key="id" className="text-[#0078d4]" />],
  [/intune|defender|security|sicherheit/i, <Shield key="sec" className="text-[#0078d4]" />],
  [/windows server/i, <FaWindows key="win" className="text-[#0078d4]" />],
  [/microsoft|graph api|cloud admin/i, <FaMicrosoft key="ms" className="text-[#f25022]" />],
  [/sql server|microsoft sql/i, <DiMsqlServer key="mssql" className="text-[#cc2927]" />],
  [/spring/i, <SiSpringboot key="spring" className="text-[#6db33f]" />],
  [/java(?!script)|jdbc|jpa|objektorient|klassen/i, <FaJava key="java" className="text-[#e76f00]" />],
  [/javascript/i, <SiJavascript key="js" className="text-[#d6b900]" />],
  [/typescript/i, <SiTypescript key="ts" className="text-[#3178c6]" />],
  [/react/i, <SiReact key="react" className="text-[#149eca]" />],
  [/next\.js/i, <SiNextdotjs key="next" className="text-black" />],
  [/html/i, <SiHtml5 key="html" className="text-[#e34f26]" />],
  [/^css/i, <SiCss key="css" className="text-[#1572b6]" />],
  [/tailwind/i, <SiTailwindcss key="tw" className="text-[#06b6d4]" />],
  [/json/i, <SiJson key="json" className="text-black" />],
  [/xml/i, <FileCode2 key="xml" className="text-[#e76f00]" />],
  [/wordpress/i, <SiWordpress key="wp" className="text-[#21759b]" />],
  [/progressive web/i, <SiPwa key="pwa" className="text-[#5a0fc8]" />],
  [/ios|apple|app store/i, <FaApple key="apple" className="text-black" />],
  [/google play/i, <SiGoogleplay key="gplay" className="text-[#414141]" />],
  [/android/i, <FaAndroid key="android" className="text-[#3ddc84]" />],
  [/powershell/i, <VscTerminalPowershell key="ps" className="text-[#5391fe]" />],
  [/github/i, <SiGithub key="gh" className="text-black" />],
  [/\bgit\b|versionsverwaltung/i, <SiGit key="git" className="text-[#f05032]" />],
  [/visual studio code/i, <VscVscode key="vscode" className="text-[#007acc]" />],
  [/visual studio/i, <BiLogoVisualStudio key="vs" className="text-[#5c2d91]" />],
  [/docker/i, <SiDocker key="docker" className="text-[#2496ed]" />],
  [/vercel/i, <SiVercel key="vercel" className="text-black" />],
  [/\bki\b|ki-|\bai\b/i, <Bot key="ai" className="text-[#10a37f]" />],
  [/sql|datenbank|datenmodell|relational|daten/i, <Database key="db" className="text-[#cc2927]" />],
  [/push/i, <Bell key="push" />],
  [/offline/i, <WifiOff key="offline" />],
  [/responsive|cross-platform/i, <MonitorSmartphone key="responsive" />],
  [/release|signierung|zertifikat/i, <BadgeCheck key="release" />],
  [/server/i, <Server key="server" />],
  [/wartung|update/i, <RefreshCw key="update" />],
  [/rest|api|schnittstelle|web services|anbindung|integration|backend/i, <Plug key="api" />],
  [/debug|troubleshoot|fehleranalyse/i, <Bug key="bug" />],
  [/scrum|agile/i, <Repeat key="agile" />],
  [/usability|ux|ui-|benutzerf|benutzerz|navigation|informationsarch/i, <MousePointerClick key="ux" />],
  [/reporting|visualisierung/i, <LayoutTemplate key="report" />],
  [/prozess|requirements|acceptance|digitalisierung/i, <ClipboardCheck key="process" />],
  [/benutzer|gruppen|rollen/i, <Users key="users" />],
  [/support|incident|problem|itil|administration/i, <LifeBuoy key="support" />],
  [/app/i, <Smartphone key="app" />],
];

export function technologyIcon(name: string): ReactNode {
  return rules.find(([pattern]) => pattern.test(name))?.[1] ?? <CircleDot />;
}
