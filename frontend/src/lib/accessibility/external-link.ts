/** Attribute für Links, die in einem neuen Tab öffnen – sicher (noopener) und für Screenreader angekündigt. */
export function externalLinkProps(label: string) {
  return {
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": `${label} (öffnet in neuem Tab)`,
  } as const;
}
