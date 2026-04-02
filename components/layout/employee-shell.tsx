"use client";

import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarToggle } from "@/components/layout/sidebar-toggle";
import { Topbar } from "@/components/layout/topbar";
import { useUi } from "@/components/providers/ui-provider";

export function EmployeeShell({ children }: { children: ReactNode }) {
  const { sidebarCollapsed } = useUi();

  return (
    <div
      className="auth-shell auth-shell-employee min-h-screen lg:grid"
      style={{
        gridTemplateColumns: sidebarCollapsed ? "112px minmax(0,1fr)" : "304px minmax(0,1fr)",
      }}
    >
      <SidebarToggle />
      <Sidebar variant="employee" />
      <div className="main-employee-canvas min-w-0">
        <Topbar variant="employee" />
        <main className="pb-10">{children}</main>
      </div>
    </div>
  );
}
