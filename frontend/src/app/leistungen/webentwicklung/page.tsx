import { ServiceDetail } from "@/features/services/components/ServiceDetail";
import { getService } from "@/features/services/data/get-service";
import { pageMetadata } from "@/lib/seo/metadata";

const service = getService("webentwicklung");

export const metadata = pageMetadata({ path: "/leistungen/webentwicklung", title: service.title, description: service.summary });

export default function WebentwicklungPage() {
  return <ServiceDetail slug="webentwicklung" />;
}
