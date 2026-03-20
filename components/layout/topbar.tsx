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
      ? "border-[#9ec6e8] bg-[rgba(232,243,255,0.82)] text-sky-900"
      : "border-[#b9d8e9] bg-[rgba(237,248,252,0.88)] text-teal-900";
  const userChipClass =
    variant === "admin"
      ? "border-[#bcdceb] bg-[linear-gradient(180deg,rgba(244,251,255,0.94),rgba(232,245,250,0.86))] shadow-[0_10px_22px_rgba(28,65,118,0.06)]"
      : "border-[#c7e0e7] bg-[linear-gradient(180deg,rgba(246,252,253,0.94),rgba(234,248,249,0.88))] shadow-[0_10px_22px_rgba(21,97,107,0.06)]";

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8">
      <div className={cn(topbarClass, "flex min-h-[66px] items-center justify-between rounded-[22px] px-4 sm:px-5 lg:px-6")}>
        <div className="min-w-0 pl-12 lg:pl-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-950/50">
            {variant === "admin" ? "Northstar Manufacturing" : "Employee workspace"}
          </div>
          <div className="mt-1 flex min-w-0 flex-wrap items-center gap-3">
            <span className={cn("rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]", sectionPillClass)}>
              {meta.section}
            </span>
            <div className="min-w-0 truncate text-sm font-semibold tracking-[-0.02em] text-slate-950">{meta.title}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {variant === "admin" ? (
            <Button size="sm" variant="secondary" href="/settings">
              <AppIcon name="settings" className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </Button>
          ) : null}
          <div className={cn("rounded-full border px-3.5 py-2", userChipClass)}>
            <div className="text-sm font-medium tracking-[-0.01em] text-slate-900">
              {variant === "admin" ? "Nina Patel" : "Daniel Scott"}
            </div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
              {variant === "admin" ? "Admin preview" : "Employee preview"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
