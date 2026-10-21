import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface CircularGalleryItem {
  image: string;
  text?: string;
  alt?: string;
  description?: string;
}

/** Typen für die React-Bits-Komponente (CircularGallery.jsx). */
export interface CircularGalleryProps extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
  items?: CircularGalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  fontUrl?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  itemSize?: number;
  itemAspect?: number;
  gap?: number;
  wave?: number;
  fadeEdges?: number;
  shadow?: number;
  grayscale?: boolean;
  showTitles?: boolean;
  snap?: boolean;
  autoScroll?: number;
  openOnClick?: boolean;
  intro?: boolean;
  onItemClick?: (item: CircularGalleryItem, index: number) => void;
  onActiveChange?: (index: number) => void;
  dpr?: number;
  style?: CSSProperties;
}

export default function CircularGallery(props: CircularGalleryProps): ReactNode;
