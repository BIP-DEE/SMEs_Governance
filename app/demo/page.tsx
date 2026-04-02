"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductBrand } from "@/components/brand/product-brand";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const roles = [
  {
    id: "admin",
    title: "Admin preview",
    href: "/dashboard",
    icon: "dashboard" as const,
    firstStop: "Review queue",
    items: ["Blocked requests", "Register coverage", "Export evidence"],
  },
  {
    id: "employee",
    title: "Employee preview",
    href: "/employee",
    icon: "workspace" as const,
    firstStop: "Approved workspace",
    items: ["Use approved AI", "Track requests", "Finish training"],
  },
] as const;

export default function DemoPage() {
  const [selectedRole, setSelectedRole] = useState<(typeof roles)[number]["id"]>("admin");
  const selected = useMemo(
    () => roles.find((role) => role.id === selectedRole) ?? roles[0],
    [selectedRole]
  );

  return (
    <div className="public-entry-shell text-white">
      <header className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="surface-topbar-admin flex min-h-[70px] items-center justify-between gap-3 rounded-[26px] px-4 sm:px-5">
            <Link href="/" className="min-w-0">
              <ProductBrand context="sidebar" compact size="landing" className="shrink-0" />
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="hidden rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white sm:inline-flex"
              >
                Landing
              </Link>
              <Button href="/login" variant="secondary" size="sm">
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <section className="mx-auto grid max-w-[1180px] gap-8 xl:grid-cols-[minmax(0,0.74fr)_minmax(400px,0.7fr)] xl:items-start">
          <div className="max-w-[500px]">
            <Badge className="border-cyan-300/18 bg-cyan-300/[0.08] text-cyan-100">
              Route preview
            </Badge>
            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold tracking-[-0.08em] text-white sm:text-[3.7rem]">
              Start in the right place.
            </h1>
            <p className="mt-4 max-w-[420px] text-base leading-7 text-slate-300">
              Preview the opening route, then enter the product.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {roles.map((role) => {
                const active = role.id === selectedRole;

                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={cn(
                      "rounded-[24px] border px-5 py-5 text-left transition",
                      active
                        ? "surface-focus-admin border-cyan-300/16"
                        : "surface-card-soft interactive-card"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] text-slate-100">
                        <AppIcon name={role.icon} className="h-4 w-4" />
                      </div>
                      <Badge tone={active ? "info" : "neutral"}>{active ? "Open" : "Route"}</Badge>
                    </div>
                    <div className="mt-4 text-sm font-semibold text-slate-100">{role.title}</div>
                    <div className="mt-1 text-sm text-slate-400">{role.firstStop}</div>
                  </button>
                );
              })}
            </div>

            <div className="surface-card-strong rounded-[30px] p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    First view
                  </div>
                  <div className="mt-2 text-[1.35rem] font-semibold tracking-[-0.04em] text-white">
                    {selected.firstStop}
                  </div>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.05] text-slate-100">
                  <AppIcon name={selected.icon} className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {selected.items.map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/6 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={selected.href}>Enter preview</Button>
                <Button href="/login" variant="secondary">
                  Open login
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
