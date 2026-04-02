"use client";

import { useState } from "react";
import Link from "next/link";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";

const workflowItems = [
  {
    id: "review",
    label: "Supplier review assistant",
    detail: "Retention evidence missing",
    href: "/requests",
    icon: "requests" as const,
    stage: "Review",
  },
  {
    id: "register",
    label: "Three tools need owners",
    detail: "Register follow-up",
    href: "/inventory",
    icon: "inventory" as const,
    stage: "Register",
  },
  {
    id: "enable",
    label: "Sensitive data guidance ready",
    detail: "Publish this week",
    href: "/policies",
    icon: "policies" as const,
    stage: "Enable",
  },
  {
    id: "monitor",
    label: "Flagged workspace event",
    detail: "Review attached log",
    href: "/monitoring",
    icon: "monitoring" as const,
    stage: "Monitor",
  },
];

const updates = [
  {
    tone: "success" as const,
    title: "11 policy acknowledgements landed",
    detail: "Support and finance moved up.",
  },
  {
    tone: "info" as const,
    title: "Invoice pilot reopened",
    detail: "Vendor evidence updated.",
  },
];

const evidenceItems = [
  {
    tone: "warning" as const,
    title: "Procurement pack still incomplete",
    detail: "Missing retention evidence",
    href: "/reports",
    action: "Open",
  },
  {
    tone: "info" as const,
    title: "Training export is ready",
    detail: "Department roll-up available",
    href: "/reports",
    action: "View",
  },
];

const tabs = [
  { id: "workflow", label: "Blocked", count: 4 },
  { id: "updates", label: "Changed", count: 2 },
  { id: "evidence", label: "Evidence", count: 2 },
];

export function DashboardSecondaryPanel() {
  const [activeTab, setActiveTab] = useState("workflow");

  return (
    <div className="space-y-4 border-t border-white/6 px-1 pt-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="space-y-2">
          <Badge className="w-fit">Open detail</Badge>
          <CardTitle className="text-[1.08rem]">Only what changed.</CardTitle>
        </div>
        <Tabs items={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === "workflow" ? (
        <div className="space-y-3">
          {workflowItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="interactive-card flex items-center gap-4 rounded-[22px] border border-white/6 bg-white/[0.025] px-4 py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] text-slate-100">
                <AppIcon name={item.icon} className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="info">{item.stage}</Badge>
                  <div className="text-sm font-semibold text-slate-100">{item.label}</div>
                </div>
                <div className="mt-1 text-sm text-slate-400">{item.detail}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : null}

      {activeTab === "updates" ? (
        <div className="space-y-3">
          {updates.map((item) => (
            <div key={item.title} className="rounded-[22px] border border-white/6 bg-white/[0.025] px-4 py-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={item.tone}>{item.tone === "success" ? "Done" : "Reopened"}</Badge>
                <div className="text-sm font-semibold text-slate-100">{item.title}</div>
              </div>
              <div className="mt-1 text-sm text-slate-400">{item.detail}</div>
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
              className="interactive-card flex items-center justify-between gap-4 rounded-[22px] border border-white/6 bg-white/[0.025] px-4 py-4"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={item.tone}>{item.tone === "warning" ? "Needs evidence" : "Ready"}</Badge>
                  <div className="text-sm font-semibold text-slate-100">{item.title}</div>
                </div>
                <div className="mt-1 text-sm text-slate-400">{item.detail}</div>
              </div>
              <span className="text-sm font-medium text-slate-200">{item.action}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
