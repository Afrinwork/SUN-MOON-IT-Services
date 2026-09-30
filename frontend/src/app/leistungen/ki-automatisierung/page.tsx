import { ServiceDetail } from "@/features/services/components/ServiceDetail";
import { getService } from "@/features/services/data/get-service";
import { pageMetadata } from "@/lib/seo/metadata";

const service = getService("ki-automatisierung");

export const metadata = pageMetadata({ path: "/leistungen/ki-automatisierung", title: service.title, description: service.summary });

export default function KiAutomatisierungPage() {
  return <ServiceDetail slug="ki-automatisierung" />;
}
