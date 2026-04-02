import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type DisclosureCardProps = {
  title: string;
  summary?: string;
  badgeLabel?: string;
  badgeTone?: "success" | "warning" | "danger" | "info" | "neutral";
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function DisclosureCard({
  title,
  summary: _summary,
  badgeLabel,
  badgeTone = "neutral",
  children,
  defaultOpen = false,
  className,
}: DisclosureCardProps) {
  return (
    <div className={cn("border-t border-white/6 pt-3", className)}>
      <details className="group" open={defaultOpen}>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 marker:content-none [&::-webkit-details-marker]:hidden">
          <p className="text-sm font-semibold tracking-[-0.01em] text-slate-100">{title}</p>
          <div className="flex items-center gap-3">
            {badgeLabel ? <Badge tone={badgeTone}>{badgeLabel}</Badge> : null}
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 group-open:hidden">
              View
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 group-open:inline">
              Hide
            </span>
          </div>
        </summary>
        <div className="pb-1 pt-3">{children}</div>
      </details>
    </div>
  );
}
