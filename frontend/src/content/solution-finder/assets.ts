/**
 * „Was haben Sie schon?“ – was fehlt, kommt als Posten zum ungefähren Preis dazu.
 * `featureId` verweist auf content/solution-finder/features.ts (dort stehen die Preise).
 */
export const assetsQuestion = "Was haben Sie schon? Tippen Sie an, was vorhanden ist.";

export type FinderAsset = { id: string; label: string; featureId: string };

export const finderAssets: FinderAsset[] = [
  { id: "logo", label: "Ein Logo", featureId: "logo" },
  { id: "texte", label: "Texte über uns und unsere Leistungen", featureId: "texte" },
  { id: "fotos", label: "Eigene Fotos", featureId: "fotos" },
];

/** Nur bei Themen, bei denen Logo, Texte und Bilder eine Rolle spielen. */
export const assetSolutionIds = ["website", "app", "idee", "unternehmen"];
