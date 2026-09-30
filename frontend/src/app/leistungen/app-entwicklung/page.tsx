import { ServicePage, serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("app-entwicklung");

export default function Page() {
  return <ServicePage slug="app-entwicklung" />;
}
