import { Container } from "@/components/ui/containers/Container";
import { Icon } from "@/components/ui/icons/Icon";
import { trustPoints } from "@/content/home/trust";

export function TrustSection() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <li key={point.label} className="flex items-center gap-3 text-sm font-medium text-navy-900">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon name={point.icon} />
              </span>
              {point.label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
