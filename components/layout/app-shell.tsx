"use client";

import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarToggle } from "@/components/layout/sidebar-toggle";
import { Topbar } from "@/components/layout/topbar";
import { useUi } from "@/components/providers/ui-provider";

export function AppShell({ children }: { children: ReactNode }) {
  const { sidebarCollapsed } = useUi();

  return (
    <div
      className="min-h-screen lg:grid"
      style={{
        gridTemplateColumns: sidebarCollapsed ? "112px minmax(0,1fr)" : "304px minmax(0,1fr)",
      }}
    >
      <SidebarToggle />
      <Sidebar variant="admin" />
      <div className="min-w-0">
        <Topbar variant="admin" />
        <main>{children}</main>
      </div>
    </div>
  );
}
