import { Spinner } from "@/components/ui/feedback/Spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-brand-500">
      <Spinner className="size-8" label="Seite wird geladen" />
    </div>
  );
}
