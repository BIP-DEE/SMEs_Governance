"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductBrand } from "@/components/brand/product-brand";
import { useUi } from "@/components/providers/ui-provider";
import { AppIcon } from "@/components/ui/app-icon";
import { adminSections, employeeSections, workspaceSwitch, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type SidebarProps = {
  variant?: "admin" | "employee";
};

function isActivePath(pathname: string, href: string) {
  if (href === "/employee" || href === "/dashboard") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  item,
  collapsed,
  active,
  onSelect,
}: {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onSelect}
      title={collapsed ? item.name : undefined}
      className={cn(
        "group relative flex items-center overflow-hidden rounded-[18px] border px-3 py-3 text-sm transition-all duration-200 ease-out",
        collapsed ? "justify-center" : "gap-3",
        active
          ? "translate-x-[2px] border-cyan-200/18 bg-[linear-gradient(90deg,rgba(59,130,246,0.18),rgba(255,255,255,0.12))] text-white shadow-[0_16px_34px_rgba(10,33,41,0.2)]"
          : "border-transparent text-slate-100/84 hover:translate-x-[2px] hover:border-cyan-200/12 hover:bg-[linear-gradient(90deg,rgba(59,130,246,0.12),rgba(255,255,255,0.08))] hover:text-white hover:shadow-[0_14px_30px_rgba(10,33,41,0.18)]"
      )}
    >
      <span
        className={cn(
          "absolute bottom-3 left-1.5 top-3 w-[3px] rounded-full bg-cyan-300 transition-opacity duration-200",
          active ? "opacity-100" : "opacity-0 group-hover:opacity-70"
        )}
      />
      <span
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-[14px] border transition-all duration-200",
          active
            ? "border-white/10 bg-white/10 text-white"
            : "border-white/8 bg-white/5 text-slate-100/82 group-hover:border-cyan-200/16 group-hover:bg-white/12 group-hover:text-white"
        )}
      >
        <AppIcon name={item.icon} className="h-[17px] w-[17px]" />
      </span>
      {!collapsed ? (
        <>
          <div className="min-w-0 flex-1">
            <div className="font-medium tracking-[-0.01em]">{item.name}</div>
            {active && item.hint ? <div className="mt-0.5 text-[11px] opacity-60">{item.hint}</div> : null}
          </div>
          {item.badge ? (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                active ? "bg-white/16 text-white" : "bg-white/10 text-slate-100/88"
              )}
            >
              {item.badge}
            </span>
          ) : null}
        </>
      ) : null}
    </Link>
  );
}

export function Sidebar({ variant = "admin" }: SidebarProps) {
  const pathname = usePathname();
  const {
    sidebarCollapsed,
    mobileSidebarOpen,
    closeMobileSidebar,
    sidebarScrollPositions,
    setSidebarScrollPosition,
  } = useUi();
  const sections = variant === "admin" ? adminSections : employeeSections;
  const collapsed = sidebarCollapsed;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sidebarSurfaceClass = variant === "admin" ? "surface-sidebar-admin" : "surface-sidebar-employee";
  const workspaceLabel = variant === "admin" ? "Northstar Manufacturing" : "Employee workspace";
  const workspaceSubLabel =
    variant === "admin" ? "Governance control center" : "Approved internal workspace";
  const storedScrollPosition = sidebarScrollPositions[variant];

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      node.scrollTop = storedScrollPosition;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, storedScrollPosition]);

  const handleSelect = () => {
    const node = scrollRef.current;
    if (node) {
      setSidebarScrollPosition(variant, node.scrollTop);
    }

    closeMobileSidebar();
  };

  return (
    <>
      <button
        type="button"
        aria-hidden={!mobileSidebarOpen}
        onClick={closeMobileSidebar}
        className={cn(
          "fixed inset-0 z-30 bg-slate-950/24 backdrop-blur-sm transition lg:hidden",
          mobileSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[304px] flex-col p-3 pt-20 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:p-4 lg:pt-20",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
          collapsed ? "lg:w-[112px]" : "lg:w-[304px]"
        )}
      >
        <div className={cn(sidebarSurfaceClass, "relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/8 px-3 pb-4 pt-4 text-slate-200")}>
          <div className={cn("mb-4 flex items-center", collapsed ? "justify-center" : "px-2")}>
            <ProductBrand compact={collapsed} context="sidebar" />
          </div>

          {!collapsed ? (
            <div className="mb-4 rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/50">
                {variant === "admin" ? "Governance workspace" : "Employee access"}
              </div>
              <div className="mt-2 text-sm font-medium text-white/94">{workspaceLabel}</div>
              <div className="mt-1 text-xs text-cyan-100/54">
                {workspaceSubLabel}
              </div>
            </div>
          ) : null}

          <div
            ref={scrollRef}
            onScroll={(event) => setSidebarScrollPosition(variant, event.currentTarget.scrollTop)}
            className="scrollbar-none flex-1 overflow-y-auto overscroll-contain px-1"
          >
            {sections.map((section) => (
              <section key={section.label} className="mb-5">
                {!collapsed ? (
                  <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/46">
                    {section.label}
                  </div>
                ) : null}
                <div className="space-y-1.5">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.href}
                      item={item}
                      collapsed={collapsed}
                      active={isActivePath(pathname, item.href)}
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-2 border-t border-white/8 pt-4">
            {!collapsed ? (
              <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/46">
                Switch role
              </div>
            ) : null}
            <div className={cn("space-y-1.5", !collapsed && "grid grid-cols-2 gap-2 space-y-0")}>
              {workspaceSwitch.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleSelect}
                    title={collapsed ? item.label : undefined}
                    className={cn(
                      "group flex items-center rounded-[18px] border transition-all duration-200 ease-out",
                      collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-3",
                      active
                        ? "border-cyan-200/14 bg-[linear-gradient(90deg,rgba(59,130,246,0.16),rgba(255,255,255,0.08))] text-white shadow-[0_12px_28px_rgba(10,33,41,0.16)]"
                        : "border-transparent text-slate-100/82 hover:-translate-y-[1px] hover:bg-[linear-gradient(90deg,rgba(59,130,246,0.1),rgba(255,255,255,0.05))] hover:text-white"
                    )}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-white/8 bg-white/6 transition-all duration-200 group-hover:border-cyan-200/16 group-hover:bg-white/10">
                      <AppIcon name={item.icon} className="h-[17px] w-[17px]" />
                    </span>
                    {!collapsed ? (
                      <div className="min-w-0">
                        <div className="text-sm font-medium tracking-[-0.01em]">{item.label}</div>
                        {active ? <div className="mt-0.5 text-[11px] opacity-60">{item.description}</div> : null}
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
