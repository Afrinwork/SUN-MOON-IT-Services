import { Microsoft365Page } from "@/features/services/components/Microsoft365Page";
import { serviceMetadata } from "@/features/services/components/ServicePage";

export const metadata = serviceMetadata("microsoft-365");

export default function Page() {
  return <Microsoft365Page />;
}
