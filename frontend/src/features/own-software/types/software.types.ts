export type Software = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  /** Optionaler externer Link, z. B. zur Produktseite oder Demo. */
  url?: string;
};
