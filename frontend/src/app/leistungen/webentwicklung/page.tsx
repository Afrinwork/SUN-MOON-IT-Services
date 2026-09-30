import { ServicePage, serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("webentwicklung");

export default function Page() {
  return <ServicePage slug="webentwicklung" />;
}
