import { ServiceDetail } from "@/features/services/components/ServiceDetail";
import { getService } from "@/features/services/data/get-service";
import { pageMetadata } from "@/lib/seo/metadata";

const service = getService("app-entwicklung");

export const metadata = pageMetadata({ path: "/leistungen/app-entwicklung", title: service.title, description: service.summary });

export default function AppEntwicklungPage() {
  return <ServiceDetail slug="app-entwicklung" />;
}
