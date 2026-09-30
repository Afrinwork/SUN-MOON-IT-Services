import { ServiceDetail } from "@/features/services/components/ServiceDetail";
import { getService } from "@/features/services/data/get-service";
import { pageMetadata } from "@/lib/seo/metadata";

const service = getService("modernisierung");

export const metadata = pageMetadata({ path: "/leistungen/modernisierung", title: service.title, description: service.summary });

export default function ModernisierungPage() {
  return <ServiceDetail slug="modernisierung" />;
}
