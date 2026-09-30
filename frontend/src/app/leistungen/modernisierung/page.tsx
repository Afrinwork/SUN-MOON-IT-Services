import { ServicePage, serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("modernisierung");

export default function Page() {
  return <ServicePage slug="modernisierung" />;
}
