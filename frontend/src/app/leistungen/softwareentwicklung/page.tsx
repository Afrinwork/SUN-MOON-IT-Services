import { ServicePage, serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("softwareentwicklung");

export default function Page() {
  return <ServicePage slug="softwareentwicklung" />;
}
