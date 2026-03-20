"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductBrand } from "@/components/brand/product-brand";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const roles = [
  {
    id: "admin",
    title: "Continue as Admin",
    description: "Open the governance control center with the queue, register, policy rollout, monitoring, and reporting flow.",
    href: "/dashboard",
    label: "Governance operations",
    icon: "dashboard" as const,
    firstStop: "Overview and priority lane",
    items: ["Review pending adoption", "Approve controls", "Export evidence"],
  },
  {
    id: "employee",
    title: "Continue as Employee",
    description: "Enter the approved internal AI workspace with requests, training, and guidance shown in a calmer sequence.",
    href: "/employee",
    label: "Guided employee view",
    icon: "workspace" as const,
    firstStop: "Home and approved workspace",
    items: ["Use approved AI", "Track requests", "Complete training"],
  },
] as const;

const steps = [
  {
    label: "Choose your route",
    detail: "Pick the admin control center or the employee workspace.",
  },
  {
    label: "Start in context",
    detail: "Each route opens to the correct first screen instead of a generic dashboard.",
  },
  {
    label: "Follow the flow",
    detail: "Secondary detail is revealed only when it helps the task in front of you.",
  },
];

export default function DemoPage() {
  const [activeRole, setActiveRole] = useState<(typeof roles)[number]["id"]>("admin");
  const role = useMemo(() => roles.find((item) => item.id === activeRole) ?? roles[0], [activeRole]);

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <ProductBrand />
          </Link>
          <Button variant="ghost" href="/">
            Back to landing
          </Button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[430px_minmax(0,1fr)] xl:items-start">
          <div className="surface-dark overflow-hidden rounded-[36px] p-7 text-white sm:p-8">
            <div className="space-y-6">
              <Badge className="border-white/10 bg-white/10 text-white">Guided product session</Badge>
              <div className="space-y-4">
                <h1 className="text-balance text-[2.7rem] font-semibold tracking-[-0.08em] text-white sm:text-[3.4rem]">
                  Start in the right place, not in every place at once.
                </h1>
                <p className="panel-dark-muted text-base leading-7 sm:text-lg">
                  This preview is organised like a real product entry. Choose the role, see the
                  correct first stop, and enter the workspace with context already set.
                </p>
              </div>

              <div className="interactive-card-dark rounded-[28px] border border-white/10 bg-white/7 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="panel-dark-kicker text-[11px] font-semibold uppercase tracking-[0.22em]">
                      Session context
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">Northstar Manufacturing</div>
                  </div>
                  <Badge className="border-white/10 bg-white/10 text-white">Pilot workspace</Badge>
                </div>

                <div className="mt-5 space-y-3">
                  {steps.map((step, index) => (
                    <div
                      key={step.label}
                      className="interactive-card-dark grid gap-3 rounded-[20px] border border-white/10 bg-white/7 px-4 py-4 sm:grid-cols-[32px_minmax(0,1fr)] sm:items-start"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.36),rgba(20,184,166,0.3))] text-sm font-semibold text-white shadow-[0_8px_20px_rgba(8,25,48,0.18)]">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{step.label}</div>
                        <div className="panel-dark-soft mt-1 text-sm leading-6">{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <Card className="surface-card-strong">
              <CardHeader className="space-y-5">
                <div className="space-y-2">
                  <Badge className="w-fit">Choose your view</Badge>
                  <CardTitle className="text-[1.65rem]">Enter the product through a role-aware route.</CardTitle>
                </div>

                <div className="grid gap-3 lg:grid-cols-2">
                  {roles.map((item) => {
                    const active = item.id === activeRole;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveRole(item.id)}
                        className={cn(
                          "rounded-[22px] border px-5 py-5 text-left transition-all duration-200 ease-out",
                          active
                            ? "surface-card border-[#88bfe0] bg-[linear-gradient(180deg,rgba(248,253,255,0.96),rgba(234,246,252,0.84))] shadow-[0_18px_42px_rgba(28,65,118,0.1)]"
                            : "interactive-card bg-[rgba(244,251,250,0.62)] border-[#bfdedf]/70"
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-[18px] border text-slate-900 shadow-[0_10px_24px_rgba(28,65,118,0.08)]",
                            active
                              ? "border-[#b8d8ea] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(230,244,252,0.86))]"
                              : "border-slate-200/70 bg-white/78"
                          )}>
                            <AppIcon name={item.icon} className="h-5 w-5" />
                          </div>
                          <Badge>{item.label}</Badge>
                        </div>
                        <div className="mt-5 text-base font-semibold tracking-[-0.02em] text-slate-950">
                          {item.title}
                        </div>
                        <div className="mt-2 text-sm leading-6 text-slate-500">{item.description}</div>
                      </button>
                    );
                  })}
                </div>
              </CardHeader>
            </Card>

            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
              <Card className="interactive-card surface-card">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <Badge tone="info" className="w-fit">
                        Selected route
                      </Badge>
                      <CardTitle className="mt-3 text-[1.5rem]">{role.title}</CardTitle>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-[#badbeb] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(233,246,252,0.86))] text-slate-900 shadow-[0_10px_24px_rgba(28,65,118,0.08)]">
                      <AppIcon name={role.icon} className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="max-w-2xl text-sm leading-6 text-slate-500">{role.description}</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {role.items.map((item) => (
                      <div
                        key={item}
                        className="surface-card-soft interactive-card rounded-[18px] px-4 py-4 text-sm leading-6 text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button href={role.href} size="lg">
                      {activeRole === "admin" ? "Start admin session" : "Enter employee workspace"}
                      <AppIcon name="arrow-right" className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" href={activeRole === "admin" ? "/requests" : "/employee/workspace"}>
                      Preview first stop
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="surface-card-soft">
                <CardHeader className="space-y-2">
                  <Badge tone="success" className="w-fit">
                    Session note
                  </Badge>
                  <CardTitle className="text-[1.2rem]">What opens first</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-[18px] border border-[#bad8e8]/80 bg-[linear-gradient(180deg,rgba(247,252,255,0.9),rgba(236,247,251,0.78))] px-4 py-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      First screen
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-950">{role.firstStop}</div>
                  </div>
                  <div className="rounded-[18px] border border-[#bad8e8]/80 bg-[linear-gradient(180deg,rgba(247,252,255,0.9),rgba(236,247,251,0.78))] px-4 py-4 text-sm leading-6 text-slate-600">
                    No credentials are required for this preview. The role selection is only there to
                    make the product flow feel realistic and organised.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
