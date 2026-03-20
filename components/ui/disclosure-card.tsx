import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
  summary,
  badgeLabel,
  badgeTone = "neutral",
  children,
  defaultOpen = false,
  className,
}: DisclosureCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <details className="group" open={defaultOpen}>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-[-0.01em] text-slate-900">{title}</p>
            {summary ? <p className="text-sm leading-6 text-slate-500">{summary}</p> : null}
          </div>
          <div className="flex items-center gap-3">
            {badgeLabel ? <Badge tone={badgeTone}>{badgeLabel}</Badge> : null}
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 group-open:hidden">
              Expand
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 group-open:inline">
              Collapse
            </span>
          </div>
        </summary>
        <div className="border-t border-slate-200/70 px-6 pb-6 pt-2">{children}</div>
      </details>
    </Card>
  );
}
