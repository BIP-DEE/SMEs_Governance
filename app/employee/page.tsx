"use client";

import { useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";

const focusOptions = [
  {
    id: "workspace",
    icon: "workspace" as const,
    label: "Workspace",
    detail: "Approved AI",
  },
  {
    id: "requests",
    icon: "requests" as const,
    label: "Requests",
    detail: "Open approval",
  },
  {
    id: "training",
    icon: "training" as const,
    label: "Training",
    detail: "Next module",
  },
] as const;

const trainingModules = [
  { title: "Safe AI usage basics", progress: 72, status: "In progress" },
  { title: "Approved tools and use cases", progress: 0, status: "Assigned" },
];

const todayRail = [
  ["Policy", "Usage guidance was updated this week."],
  ["Request", "One procurement flow still needs evidence."],
  ["Training", "Safe AI Usage Basics is the next due module."],
];

export default function EmployeeHomePage() {
  const [activeSection, setActiveSection] = useState<(typeof focusOptions)[number]["id"]>("workspace");

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="Employee workspace"
          title="Start with the next approved action."
          description="Keep one task in focus and leave the rest tucked behind it."
          actions={<Button href="/employee/workspace">Open workspace</Button>}
          meta={<Badge tone="success">Approved access</Badge>}
        />

        <section className="mb-5 grid gap-3 md:grid-cols-3">
          {focusOptions.map((item) => {
            const active = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "interactive-card flex items-center gap-3 rounded-[22px] border px-4 py-4 text-left transition-all duration-200",
                  active
                    ? "surface-focus-employee shadow-[0_18px_38px_rgba(21,97,107,0.08)]"
                    : "surface-card-soft"
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[#bdd9e4]/90 bg-white/62 text-slate-900">
                  <AppIcon name={item.icon} className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-950">{item.label}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.detail}</div>
                </div>
              </button>
            );
          })}
        </section>

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
          {activeSection === "workspace" ? (
            <Card className="surface-focus-employee overflow-hidden">
              <CardHeader className="space-y-3 border-b border-[#c7e1e9]/80">
                <Badge tone="success" className="w-fit">
                  Primary next step
                </Badge>
                <CardTitle className="text-[1.5rem]">Open the approved assistant.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 pt-5">
                <div className="surface-dark rounded-[22px] px-4 py-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/84">
                    Approved use
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/88">
                    Internal drafting, summaries, and customer replies using approved company data only.
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Draft internal email", "Summarise meeting notes", "Create customer reply"].map((template) => (
                    <div
                      key={template}
                      className="rounded-full border border-[#b9d8e6]/90 bg-white/60 px-4 py-2 text-sm font-medium text-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]"
                    >
                      {template}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button href="/employee/workspace">Open workspace</Button>
                  <Button variant="secondary" href="/employee/policies">
                    View guidance
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : null}

          {activeSection === "requests" ? (
            <Card className="surface-focus-employee overflow-hidden">
              <CardHeader className="space-y-3 border-b border-[#c7e1e9]/80">
                <Badge tone="warning" className="w-fit">
                  Open request
                </Badge>
                <CardTitle className="text-[1.5rem]">Your procurement request is paused.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-5">
                {[
                  ["Status", "Needs more information"],
                  ["Reviewer", "Sophie Turner"],
                  ["Needed now", "Upload retention evidence for the proposed workflow."],
                ].map(([label, value]) => (
                  <div key={label} className="surface-card-soft rounded-[18px] px-4 py-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">{value}</div>
                  </div>
                ))}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button href="/employee/requests">View request</Button>
                  <Button variant="secondary" href="/employee/policies">
                    Review guidance
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : null}

          {activeSection === "training" ? (
            <Card className="surface-focus-employee overflow-hidden">
              <CardHeader className="space-y-3 border-b border-[#c7e1e9]/80">
                <Badge tone="info" className="w-fit">
                  Assigned training
                </Badge>
                <CardTitle className="text-[1.5rem]">Finish one short module next.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {trainingModules.map((item) => (
                  <div key={item.title} className="surface-card-soft rounded-[20px] px-4 py-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{item.status}</div>
                      </div>
                      <div className="text-sm font-semibold text-slate-800">{item.progress}%</div>
                    </div>
                    <ProgressBar value={item.progress} className="mt-3" tone={item.progress < 75 ? "warning" : "success"} />
                  </div>
                ))}
                <Button href="/employee/training">Continue training</Button>
              </CardContent>
            </Card>
          ) : null}

          <Card className="surface-rail-employee rounded-[26px]">
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Today</Badge>
              <CardTitle className="text-[1.08rem]">Keep only these in view.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayRail.map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-[#bedbe0]/90 bg-white/56 px-4 py-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-700">{value}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
