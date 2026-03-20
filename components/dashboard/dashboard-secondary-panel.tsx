"use client";

import { useState } from "react";
import Link from "next/link";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";

const workflowItems = [
  {
    id: "review",
    label: "Supplier review assistant",
    detail: "Waiting for retention evidence before final approval.",
    href: "/requests",
    icon: "requests" as const,
    stage: "Review",
  },
  {
    id: "register",
    label: "Three new tools need owners and review dates",
    detail: "The register is missing ownership detail on recent additions.",
    href: "/inventory",
    icon: "inventory" as const,
    stage: "Register",
  },
  {
    id: "enable",
    label: "Sensitive data guidance is ready to publish",
    detail: "Finance and support can move into acknowledgement this week.",
    href: "/policies",
    icon: "policies" as const,
    stage: "Enable",
  },
  {
    id: "monitor",
    label: "One flagged workspace event still needs review",
    detail: "Monitoring already has the log context attached.",
    href: "/monitoring",
    icon: "monitoring" as const,
    stage: "Monitor",
  },
];

const updates = [
  {
    tone: "success" as const,
    title: "11 employees acknowledged the updated AI Usage Policy",
    detail: "Support and finance are now above the weekly acknowledgement target.",
  },
  {
    tone: "info" as const,
    title: "Invoice review pilot moved back into active review",
    detail: "Vendor questionnaire was updated and the reviewer reopened the workflow.",
  },
];

const evidenceItems = [
  {
    tone: "warning" as const,
    title: "Retention evidence still missing for procurement assistant",
    detail: "Once uploaded, the approval can move directly into sign-off.",
    href: "/reports",
    action: "Open evidence",
  },
  {
    tone: "info" as const,
    title: "Training completion export is ready for leadership review",
    detail: "Coverage by department is available in the latest reporting set.",
    href: "/reports",
    action: "View report",
  },
];

const tabs = [
  { id: "workflow", label: "Queue", count: 4 },
  { id: "updates", label: "Updates", count: 2 },
  { id: "evidence", label: "Evidence", count: 2 },
];

export function DashboardSecondaryPanel() {
  const [activeTab, setActiveTab] = useState("workflow");

  return (
    <Card>
      <CardHeader className="space-y-4 border-b border-[#c8e0ea]/80">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="space-y-2">
            <Badge className="w-fit">Secondary detail</Badge>
            <CardTitle className="text-[1.3rem]">Keep the extra context one click below the main view.</CardTitle>
          </div>
          <Tabs items={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        {activeTab === "workflow" ? (
          <div className="space-y-3">
            {workflowItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="surface-card-soft interactive-card flex items-start gap-4 rounded-[22px] px-4 py-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-[#c2dfe0] bg-[rgba(240,250,248,0.8)] text-slate-900">
                  <AppIcon name={item.icon} className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="info">{item.stage}</Badge>
                    <div className="text-sm font-semibold text-slate-950">{item.label}</div>
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-500">{item.detail}</div>
                </div>
                <span className="mt-1 text-slate-400 transition group-hover:text-slate-700">
                  <AppIcon name="arrow-right" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        ) : null}

        {activeTab === "updates" ? (
          <div className="space-y-3">
            {updates.map((item) => (
              <div key={item.title} className="surface-card-soft interactive-card rounded-[22px] px-5 py-4">
                <div className="flex items-start gap-4">
                  <Badge tone={item.tone} className="mt-0.5 shrink-0">
                    {item.tone === "success" ? "Completed" : "Reopened"}
                  </Badge>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                    <div className="text-sm leading-6 text-slate-500">{item.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {activeTab === "evidence" ? (
          <div className="space-y-3">
            {evidenceItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="surface-card-soft interactive-card flex items-start justify-between gap-4 rounded-[22px] px-5 py-4"
              >
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge tone={item.tone}>{item.tone === "warning" ? "Needs evidence" : "Ready"}</Badge>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Reports</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                  <div className="text-sm leading-6 text-slate-500">{item.detail}</div>
                </div>
                <span className="shrink-0 text-sm font-medium text-slate-700">{item.action}</span>
              </Link>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
