import { serviceMetadata } from "@/features/services/components/ServicePage";
import { WebDevelopmentPage } from "@/features/services/components/WebDevelopmentPage";

export const metadata = serviceMetadata("webentwicklung");

export default function Page() {
  return <WebDevelopmentPage />;
}
