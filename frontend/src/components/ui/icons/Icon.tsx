import {
  ArrowRight,
  Check,
  Clock,
  Cloud,
  Code,
  ExternalLink,
  FileText,
  Gauge,
  Globe,
  Handshake,
  MapPin,
  Menu,
  Phone,
  RefreshCw,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  X,
  type LucideProps,
} from "lucide-react";

const icons = {
  arrowRight: ArrowRight,
  check: Check,
  clock: Clock,
  cloud: Cloud,
  code: Code,
  external: ExternalLink,
  fileText: FileText,
  gauge: Gauge,
  globe: Globe,
  handshake: Handshake,
  mapPin: MapPin,
  menu: Menu,
  phone: Phone,
  refresh: RefreshCw,
  shield: Shield,
  smartphone: Smartphone,
  sparkles: Sparkles,
  users: Users,
  close: X,
};

export type IconName = keyof typeof icons;

type IconProps = LucideProps & { name: IconName };

/** Dekorative Icons – für Screenreader ausgeblendet; Bedeutung immer auch als Text angeben. */
export function Icon({ name, size = 20, ...props }: IconProps) {
  const Component = icons[name];
  return <Component size={size} aria-hidden="true" focusable="false" {...props} />;
}
