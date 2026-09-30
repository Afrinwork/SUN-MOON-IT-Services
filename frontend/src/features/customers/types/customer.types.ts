export type Customer = {
  name: string;
  industry: string;
  text: string;
  /** Slug eines Kundenprojekts, falls es eine Fallstudie gibt. */
  projectSlug?: string;
};
