"use client";

import { usePathname } from "next/navigation";
import { AppIcon } from "@/components/ui/app-icon";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/navigation";

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

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="surface-topbar flex min-h-[68px] items-center justify-between rounded-[22px] px-4 sm:px-5 lg:px-6">
        <div className="pl-12 lg:pl-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-800/72">
            {variant === "admin" ? "Northstar Manufacturing" : "Employee workspace"}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#bfdced] bg-[rgba(240,248,255,0.82)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-800">
              {meta.section}
            </span>
            <span className="text-sm text-slate-400">/</span>
            <span className="text-sm text-slate-500">{meta.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {variant === "admin" ? (
            <Button size="sm" variant="secondary" href="/settings">
              <AppIcon name="settings" className="h-4 w-4" />
              <span className="hidden sm:inline">Settings</span>
            </Button>
          ) : null}
          <div className="rounded-full border border-[#bcdceb] bg-[linear-gradient(180deg,rgba(244,251,255,0.94),rgba(232,245,250,0.86))] px-3.5 py-2 shadow-[0_10px_22px_rgba(28,65,118,0.06)]">
            <div className="text-sm font-medium tracking-[-0.01em] text-slate-900">
              {variant === "admin" ? "Admin preview · Nina Patel" : "Employee preview · Daniel Scott"}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
