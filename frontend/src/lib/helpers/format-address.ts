type Address = { street: string; zip: string; city: string; country?: string };

/** "Musterstraße 1, 12345 Berlin" */
export function formatAddress({ street, zip, city }: Address): string {
  return `${street}, ${zip} ${city}`;
}
