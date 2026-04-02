"use client";

import { useMemo, useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const focusOptions = [
  {
    id: "workspace",
    label: "Workspace",
    badge: "Approved",
    title: "Open the approved assistant.",
    summary: "Internal drafting, summaries, and customer replies.",
    items: ["Approved AI", "Logging on", "Manager review"],
    primary: { label: "Open workspace", href: "/employee/workspace" },
    secondary: { label: "Policies", href: "/employee/policies" },
  },
  {
    id: "requests",
    label: "Requests",
    badge: "Needs info",
    title: "Finish the paused request.",
    summary: "Upload retention evidence to move procurement forward.",
    items: ["Reviewer: Sophie Turner", "Status: Paused", "One blocker"],
    primary: { label: "Open request", href: "/employee/requests" },
    secondary: { label: "Guidance", href: "/employee/policies" },
  },
  {
    id: "training",
    label: "Training",
    badge: "Due",
    title: "Finish one short module next.",
    summary: "Safe AI Usage Basics is still in progress.",
    items: ["72% complete", "2 assigned", "Next due now"],
    primary: { label: "Continue training", href: "/employee/training" },
    secondary: { label: "Activity", href: "/employee/activity" },
  },
] as const;

const statusRail = [
  ["Policy", "1 update"],
  ["Request", "1 blocker"],
  ["Training", "2 assigned"],
];

export default function EmployeeHomePage() {
  const [activeSection, setActiveSection] = useState<(typeof focusOptions)[number]["id"]>("workspace");
  const active = useMemo(
    () => focusOptions.find((item) => item.id === activeSection) ?? focusOptions[0],
    [activeSection]
  );

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="Employee workspace"
          title="Start with the next approved move."
          description=""
          actions={<Button href="/employee/workspace">Open workspace</Button>}
          meta={<Badge tone="success">Approved access</Badge>}
        />

        <div className="flex flex-wrap gap-2 border-t border-white/6 px-1 pt-4">
          {focusOptions.map((item) => {
            const selected = item.id === activeSection;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  selected
                    ? "border-cyan-300/16 bg-cyan-300/[0.08] text-white"
                    : "border-white/8 bg-white/[0.03] text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="surface-dark rounded-[30px] px-6 py-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge tone={active.id === "requests" ? "warning" : active.id === "training" ? "info" : "success"}>
                {active.badge}
              </Badge>
            </div>

            <h2 className="mt-5 text-[1.75rem] font-semibold tracking-[-0.05em] text-white">
              {active.title}
            </h2>
            <div className="mt-3 max-w-[520px] text-base text-white/82">{active.summary}</div>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={active.primary.href}>{active.primary.label}</Button>
              <Button href={active.secondary.href} variant="secondary">
                {active.secondary.label}
              </Button>
            </div>
          </div>

          <aside className="space-y-3 border-t border-white/6 pt-4">
            <Badge className="w-fit">Now</Badge>
            {statusRail.map(([label, value]) => (
              <div key={label} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
              </div>
            ))}
          </aside>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
