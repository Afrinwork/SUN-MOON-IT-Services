import type { IconName } from "@/components/ui/icons/Icon";

export const trustPoints: readonly { icon: IconName; label: string }[] = [
  { icon: "shield", label: "DSGVO-konform" },
  { icon: "mapPin", label: "Aus Deutschland" },
  { icon: "clock", label: "Schnelle Reaktionszeit" },
  { icon: "handshake", label: "Persönlicher Ansprechpartner" },
];
