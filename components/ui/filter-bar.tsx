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
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="w-full xl:max-w-xl">
          <Input placeholder={placeholder} aria-label={placeholder} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              className="inline-flex h-10 items-center whitespace-nowrap rounded-[14px] border border-[#c8deea]/90 bg-[linear-gradient(180deg,rgba(248,252,255,0.92),rgba(237,247,251,0.82))] px-3.5 text-sm font-medium text-slate-600 shadow-[0_6px_18px_rgba(28,65,118,0.04)] transition hover:-translate-y-[1px] hover:border-[#9dc8df] hover:text-slate-900"
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
