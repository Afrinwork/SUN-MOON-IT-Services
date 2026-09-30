import { ServiceDetail } from "@/features/services/components/ServiceDetail";
import { getService } from "@/features/services/data/get-service";
import { pageMetadata } from "@/lib/seo/metadata";

const service = getService("softwareentwicklung");

export const metadata = pageMetadata({ path: "/leistungen/softwareentwicklung", title: service.title, description: service.summary });

export default function SoftwareentwicklungPage() {
  return <ServiceDetail slug="softwareentwicklung" />;
}
