import type { SVGProps } from "react";

/** Eigene Microsoft-Produktlogos, die es in react-icons nicht gibt. */
export function PowerAppsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M23.92 8.06 22.43 6.57a2 2 0 0 0-2.93.11L4.85 23.7a2 2 0 0 0 .1 2.72L19.9 41.36a2 2 0 0 0 2.93-.11l1.18-1.38" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="m20.17 15.4 6.17 6.18a2 2 0 0 1 .1 2.72l-7.12 8.27a2 2 0 0 0 .1 2.72l6.15 6.14a2 2 0 0 0 2.93-.11l14.65-17.02a2 2 0 0 0-.1-2.72L28.1 6.64a2 2 0 0 0-2.93.11l-5.11 5.94a2 2 0 0 0 .1 2.71Z" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="m39.24 28.84-1.21 1.4a2 2 0 0 1-2.92.1l-6.15-6.14a2 2 0 0 1-.1-2.72l5.11-5.94a2 2 0 0 1 2.93-.1l1.35 1.35" />
    </svg>
  );
}

export function PowerAutomateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <path fill="#1152d4" d="m5.5 88.4 150 167.6L335.9 54.3a22 22 0 0 0-8.1-1.7H21.4c-18.5.1-28.2 22-15.9 35.8" />
      <path fill="#61b1fb" d="m470.4 310.7 36.2-40.4a21.4 21.4 0 0 0 0-28.5L343.8 59.8a22 22 0 0 0-7.9-5.5L155.5 256 5.5 423.6c-12.3 13.8-2.6 35.7 15.9 35.7h306.4c6.1 0 11.9-2.6 15.9-7.1Z" />
      <path fill="#2a78ee" d="M335.9 54.3 155.5 256 5.5 423.6c-12.3 13.8-2.6 35.7 15.9 35.7h134l272.9-305-84.5-94.5a22 22 0 0 0-7.9-5.5" />
    </svg>
  );
}

export function SharePointIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M22 13.25a5 5 0 0 1-6.27 4.84A4.38 4.38 0 0 1 7 17.63V17H2.83A.84.84 0 0 1 2 16.17V7.83A.84.84 0 0 1 2.83 7h2.95A5.63 5.63 0 0 1 17 7.63v.62a5 5 0 0 1 5 5M7.1 15.25c1.35 0 2.4-.54 2.4-1.84 0-1.22-.92-1.6-2.18-2.14-.45-.18-.77-.36-.77-.65 0-.4.55-.52 1.03-.52.65 0 1.13.2 1.67.5V9.12a5.7 5.7 0 0 0-1.7-.26c-1.35 0-2.52.58-2.52 1.83 0 1.2.9 1.66 2.19 2.1.5.2.78.4.78.67 0 .42-.47.54-1 .54-.8 0-1.37-.27-1.96-.7v1.56c.66.26 1.35.39 2.06.39" />
    </svg>
  );
}

export function PowerBiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect x="3" y="16" width="7" height="13" rx="1.5" fill="#f9e589" />
      <rect x="9" y="9" width="8" height="20" rx="1.5" fill="#f6d751" />
      <rect x="16" y="3" width="8" height="26" rx="1.5" fill="#e6ad10" />
      <rect x="23" y="1" width="6" height="28" rx="1.5" fill="#c87e0e" />
    </svg>
  );
}
