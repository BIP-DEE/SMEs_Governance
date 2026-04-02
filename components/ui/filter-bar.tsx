import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FilterChip =
  | string
  | {
      label: string;
      tone?: "success" | "warning" | "danger" | "info" | "neutral";
    };

type FilterBarProps = {
  placeholder: string;
  filters?: string[];
  chips?: FilterChip[];
  actions?: ReactNode;
  className?: string;
};

export function FilterBar({
  placeholder,
  filters = [],
  chips = [],
  actions,
  className,
}: FilterBarProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="w-full xl:max-w-lg">
          <Input placeholder={placeholder} aria-label={placeholder} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="inline-flex h-8 items-center whitespace-nowrap rounded-full border border-white/8 bg-white/[0.03] px-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 transition hover:border-cyan-300/14 hover:text-white"
            >
              {filter}
            </button>
          ))}
          {actions}
        </div>
      </div>
      {chips.length ? (
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => {
            const item =
              typeof chip === "string" ? { label: chip, tone: "neutral" as const } : chip;

            return (
              <Badge key={item.label} tone={item.tone ?? "neutral"} className="px-3 py-1.5">
                {item.label}
              </Badge>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
