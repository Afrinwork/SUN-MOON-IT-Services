export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  tags: readonly string[];
  /** z. B. "/images/projects/projekt.webp" */
  image?: string;
};
