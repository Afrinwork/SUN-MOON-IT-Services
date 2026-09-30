/** true, wenn `pathname` die Seite `href` oder eine Unterseite davon ist. */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
