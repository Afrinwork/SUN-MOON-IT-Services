import { ModernizationPage } from "@/features/services/components/ModernizationPage";
import { serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("modernisierung");

export default function Page() {
  return <ModernizationPage />;
}
