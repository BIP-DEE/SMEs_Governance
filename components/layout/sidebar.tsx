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
        "group relative flex items-center overflow-hidden rounded-[20px] border px-3 py-3 text-sm transition-all duration-200 ease-out",
        collapsed ? "justify-center" : "gap-3",
        active
          ? "border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(37,99,235,0.18)_56%,rgba(255,255,255,0.06))] text-white shadow-[0_18px_36px_rgba(2,8,20,0.26),inset_0_1px_0_rgba(255,255,255,0.08)]"
          : "border-transparent text-slate-400 hover:-translate-y-[1px] hover:border-white/10 hover:bg-white/[0.06] hover:text-slate-100"
      )}
    >
      <span
        className={cn(
          "absolute bottom-3 left-1.5 top-3 w-[3px] rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)] transition-opacity duration-200",
          active ? "opacity-100" : "opacity-0 group-hover:opacity-70"
        )}
      />
      <span
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-[14px] border transition-all duration-200",
          active
            ? "border-white/12 bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            : "border-white/8 bg-white/[0.04] text-slate-300 group-hover:border-cyan-200/16 group-hover:bg-white/[0.08] group-hover:text-white"
        )}
      >
        <AppIcon name={item.icon} className="h-[17px] w-[17px]" />
      </span>
      {!collapsed ? (
        <>
          <div className="min-w-0 flex-1">
            <div className="font-medium tracking-[-0.01em]">{item.name}</div>
            {item.hint ? (
              <div className={cn("mt-0.5 text-[11px]", active ? "text-cyan-100/64" : "text-slate-500")}>
                {item.hint}
              </div>
            ) : null}
          </div>
          {item.badge ? (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                active ? "bg-white/16 text-white" : "bg-white/10 text-slate-300"
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
        <div className={cn(sidebarSurfaceClass, "relative flex h-full flex-col overflow-hidden rounded-[34px] border border-white/10 px-3 pb-4 pt-4 text-slate-200")}>
          <div className={cn("mb-4 flex items-center", collapsed ? "justify-center" : "px-2")}>
            <ProductBrand compact={collapsed} context="sidebar" size="shell" />
          </div>

          {!collapsed ? (
            <div className="mb-4 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-4 py-3.5 shadow-[0_16px_36px_rgba(2,8,20,0.18),inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/46">
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
                  <div className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/38">
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
              <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/38">
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
                        ? "border-cyan-300/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(37,99,235,0.14),rgba(255,255,255,0.04))] text-white shadow-[0_14px_28px_rgba(2,8,20,0.16)]"
                        : "border-transparent text-slate-400 hover:-translate-y-[1px] hover:border-white/8 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-white/8 bg-white/[0.05] transition-all duration-200 group-hover:border-cyan-200/16 group-hover:bg-white/[0.08]">
                      <AppIcon name={item.icon} className="h-[17px] w-[17px]" />
                    </span>
                    {!collapsed ? (
                      <div className="min-w-0">
                        <div className="text-sm font-medium tracking-[-0.01em]">{item.label}</div>
                        <div className={cn("mt-0.5 text-[11px]", active ? "text-cyan-100/60" : "text-slate-500")}>
                          {item.description}
                        </div>
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 border-t border-white/8 pt-3">
              {!collapsed ? (
                <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/38">
                  Session
                </div>
              ) : null}
              <Link
                href="/"
                onClick={handleSelect}
                title={collapsed ? "Logout" : undefined}
                className={cn(
                  "group flex items-center rounded-[18px] border transition-all duration-200 ease-out",
                  collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-3",
                  "border-transparent text-slate-400 hover:-translate-y-[1px] hover:border-white/8 hover:bg-white/[0.05] hover:text-white"
                )}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-white/8 bg-white/[0.05] transition-all duration-200 group-hover:border-cyan-200/16 group-hover:bg-white/[0.08]">
                  <AppIcon name="chevron-left" className="h-[17px] w-[17px]" />
                </span>
                {!collapsed ? (
                  <div className="min-w-0">
                    <div className="text-sm font-medium tracking-[-0.01em]">Logout</div>
                    <div className="mt-0.5 text-[11px] text-slate-500">
                      Back to landing
                    </div>
                  </div>
                ) : null}
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
