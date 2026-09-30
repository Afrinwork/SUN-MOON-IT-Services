import Link from "next/link";
import { Card } from "@/components/ui/cards/Card";
import { Icon } from "@/components/ui/icons/Icon";
import { servicesOverviewContent } from "@/content/services/overview";
import type { Service } from "@/types/service/service";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/leistungen/${service.slug}`} className="group block h-full rounded-2xl">
      <Card interactive className="flex h-full flex-col">
        <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-navy-900 text-brand-500">
          <Icon name={service.icon} size={24} />
        </span>
        <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-slate-600">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          {servicesOverviewContent.moreLabel}
          <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </Card>
    </Link>
  );
}
