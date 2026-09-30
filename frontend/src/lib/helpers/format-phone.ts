/** "+49 30 123 456" -> "tel:+4930123456" */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
