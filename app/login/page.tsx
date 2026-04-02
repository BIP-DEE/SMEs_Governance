"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductBrand } from "@/components/brand/product-brand";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const roles = [
  {
    id: "admin",
    title: "Admin workspace",
    detail: "Register, review, and evidence",
    href: "/dashboard",
    icon: "dashboard" as const,
  },
  {
    id: "employee",
    title: "Employee workspace",
    detail: "Approved use and requests",
    href: "/employee",
    icon: "workspace" as const,
  },
] as const;

export default function LoginPage() {
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
              <Link
                href="/demo"
                className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
              >
                Preview
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <section className="mx-auto grid max-w-[1180px] gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(420px,0.72fr)] xl:items-center">
          <div className="max-w-[500px]">
            <Badge className="border-cyan-300/18 bg-cyan-300/[0.08] text-cyan-100">
              Preview login
            </Badge>
            <h1 className="mt-5 text-balance text-[2.6rem] font-semibold tracking-[-0.08em] text-white sm:text-[4rem]">
              Enter through the right workspace.
            </h1>
            <p className="mt-4 max-w-[430px] text-base leading-7 text-slate-300">
              Choose the role, then continue into the correct first view.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Role-aware", "Preview only", "No credentials"].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>

          <div className="surface-card-strong rounded-[32px] p-6 sm:p-7">
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                  Continue
                </div>
                <div className="text-[1.6rem] font-semibold tracking-[-0.05em] text-white">
                  Choose one path.
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-200">
                  Work email
                </label>
                <Input id="email" defaultValue="nina.patel@northstar.example" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {roles.map((role) => {
                  const active = role.id === selectedRole;

                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={cn(
                        "rounded-[22px] border px-4 py-4 text-left transition",
                        active
                          ? "surface-focus-admin border-cyan-300/16"
                          : "surface-card-soft interactive-card"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] text-slate-100">
                          <AppIcon name={role.icon} className="h-4 w-4" />
                        </div>
                        <Badge tone={active ? "info" : "neutral"}>{active ? "Selected" : "Route"}</Badge>
                      </div>
                      <div className="mt-4 text-sm font-semibold text-slate-100">{role.title}</div>
                      <div className="mt-1 text-sm text-slate-400">{role.detail}</div>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Next stop
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-100">{selected.title}</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={selected.href} size="lg">
                  Continue
                </Button>
                <Button href="/demo" variant="secondary" size="lg">
                  Preview first
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
