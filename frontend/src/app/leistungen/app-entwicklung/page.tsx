import { AppDevelopmentPage } from "@/features/services/components/AppDevelopmentPage";
import { serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("app-entwicklung");

export default function Page() {
  return <AppDevelopmentPage />;
}
