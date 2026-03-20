"use client";

import { AppIcon } from "@/components/ui/app-icon";
import { useUi } from "@/components/providers/ui-provider";

export function SidebarToggle() {
  const { toggleSidebar, sidebarCollapsed, mobileSidebarOpen } = useUi();
  const icon = sidebarCollapsed || mobileSidebarOpen ? "menu" : "chevron-left";

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className="surface-dark fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-[18px] border border-white/10 text-white transition hover:scale-[1.02] hover:border-white/16"
      aria-label="Toggle sidebar"
    >
      <AppIcon name={icon} className="h-4 w-4" />
    </button>
  );
}
