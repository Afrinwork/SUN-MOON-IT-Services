import { ServiceDetail } from "@/features/services/components/ServiceDetail";
import { getService } from "@/features/services/data/get-service";
import { pageMetadata } from "@/lib/seo/metadata";

const service = getService("microsoft-365");

export const metadata = pageMetadata({ path: "/leistungen/microsoft-365", title: service.title, description: service.summary });

export default function Microsoft365Page() {
  return <ServiceDetail slug="microsoft-365" />;
}
