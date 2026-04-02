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
      className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,31,51,0.92),rgba(8,13,24,0.88))] text-white shadow-[0_18px_36px_rgba(2,8,20,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-[1px] hover:border-cyan-300/24 hover:text-cyan-100 lg:left-6 lg:top-5"
      aria-label="Toggle sidebar"
    >
      <AppIcon name={icon} className="h-4 w-4" />
    </button>
  );
}
