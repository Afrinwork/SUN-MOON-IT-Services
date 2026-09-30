import { ServicePage, serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("microsoft-365");

export default function Page() {
  return <ServicePage slug="microsoft-365" />;
}
