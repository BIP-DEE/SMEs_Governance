"use client";

import { usePathname } from "next/navigation";
import { AppIcon } from "@/components/ui/app-icon";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type TopbarProps = {
  variant: "admin" | "employee";
};

export function Topbar({ variant }: TopbarProps) {
  const pathname = usePathname();
  const meta = pageMeta[pathname] ?? {
    section: variant === "admin" ? "Command" : "Start",
    title: variant === "admin" ? "Governance workspace" : "Employee workspace",
    subtitle: "",
  };
  const topbarClass = variant === "admin" ? "surface-topbar-admin" : "surface-topbar-employee";
  const sectionPillClass =
    variant === "admin"
      ? "border-cyan-300/18 bg-cyan-300/[0.08] text-cyan-100"
      : "border-teal-300/18 bg-teal-300/[0.08] text-teal-100";
  const userChipClass =
    variant === "admin"
      ? "border-white/8 bg-[linear-gradient(180deg,rgba(21,34,55,0.68),rgba(9,16,27,0.62))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      : "border-white/8 bg-[linear-gradient(180deg,rgba(16,39,51,0.68),rgba(8,18,26,0.62))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]";

  return (
    <header className="sticky top-0 z-20 px-4 pt-3 sm:px-6 lg:px-8">
      <div className={cn(topbarClass, "flex min-h-[66px] items-center justify-between gap-3 rounded-[22px] px-4 sm:px-5 lg:px-6")}>
        <div className="min-w-0 pl-12 lg:pl-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            {variant === "admin" ? "Northstar Manufacturing" : "Employee workspace"}
          </div>
          <div className="mt-1 flex min-w-0 flex-wrap items-center gap-2.5">
            <span className={cn("rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]", sectionPillClass)}>
              {meta.section}
            </span>
            <div className="min-w-0 truncate text-sm font-semibold tracking-[-0.02em] text-slate-100">{meta.title}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {variant === "admin" ? (
            <Button size="sm" variant="ghost" href="/settings">
              <AppIcon name="settings" className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </Button>
          ) : null}
          <div className={cn("rounded-[18px] border px-3 py-2", userChipClass)}>
            <div className="text-sm font-medium tracking-[-0.01em] text-slate-100">
              {variant === "admin" ? "Nina Patel" : "Daniel Scott"}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              {variant === "admin" ? "Admin preview" : "Employee preview"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
