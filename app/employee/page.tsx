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

const training = [
  { title: "Introduction to company AI rules", progress: 100, status: "Complete" },
  { title: "Safe AI usage basics", progress: 72, status: "In progress" },
  { title: "Approved tools and use cases", progress: 0, status: "Assigned" },
];

const sections = [
  {
    id: "workspace",
    icon: "workspace" as const,
    eyebrow: "Approved route",
    title: "Start in the workspace",
    summary: "Use the company assistant for approved internal drafting and summaries.",
  },
  {
    id: "requests",
    icon: "requests" as const,
    eyebrow: "Needs review",
    title: "Check your open request",
    summary: "A procurement workflow still needs evidence before approval can continue.",
  },
  {
    id: "training",
    icon: "training" as const,
    eyebrow: "Assigned",
    title: "Finish the next short module",
    summary: "Two lightweight governance modules still need attention.",
  },
] as const;

export default function EmployeeHomePage() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]["id"]>("workspace");

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="Employee workspace"
          title="Start inside the approved lane."
          description="Pick one area and keep the rest in the background until you need it."
          actions={
            <>
              <Button variant="secondary" href="/employee/requests">
                Submit request
              </Button>
              <Button href="/employee/workspace">Open workspace</Button>
            </>
          }
          meta={<Badge tone="success">Workspace ready</Badge>}
        />

        <section className="grid gap-5 xl:grid-cols-[290px_minmax(0,1fr)]">
          <Card className="surface-focus-employee">
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Choose one focus</Badge>
              <CardTitle className="text-[1.25rem]">What do you need right now?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sections.map((section) => {
                const active = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={cn(
                      "w-full rounded-[22px] border px-4 py-4 text-left transition-all duration-200 ease-out",
                      active
                        ? "surface-card border-[#97cae2] shadow-[0_18px_36px_rgba(28,65,118,0.08)]"
                        : "interactive-card border-[#c3dfe7]/80 bg-white/52"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-[14px] border border-[#c5dfea] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(235,247,250,0.84))] text-slate-900">
                        <AppIcon name={section.icon} className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {section.eyebrow}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-slate-950">{section.title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-500">{section.summary}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
            {activeSection === "workspace" ? (
              <Card className="surface-focus-employee overflow-hidden">
                <CardHeader className="space-y-3 border-b border-[#c7e1e9]/80">
                  <Badge tone="success" className="w-fit">
                    Approved workspace
                  </Badge>
                  <CardTitle className="text-[1.45rem]">Open the assistant for internal drafting and summaries.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-5">
                  <div className="surface-dark rounded-[22px] px-4 py-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/72">
                      Approved use
                    </div>
                    <div className="mt-2 text-sm leading-6 panel-dark-muted">
                      Use approved internal data, review outputs before sharing, and raise unusual tasks through the request flow.
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Draft internal email", "Summarise meeting notes", "Create customer reply"].map((template) => (
                      <div key={template} className="surface-card-soft interactive-card rounded-[18px] px-4 py-4 text-sm font-medium text-slate-800">
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
                  <CardTitle className="text-[1.45rem]">Procurement assistant request</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-5">
                  {[
                    ["Status", "Needs more information"],
                    ["Reviewer", "Sophie Turner"],
                    ["Next action", "Upload retention evidence for the proposed workflow"],
                  ].map(([label, value]) => (
                    <div key={label} className="surface-card-soft interactive-card rounded-[18px] px-4 py-4">
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
                  <CardTitle className="text-[1.45rem]">Finish the next short modules, not a full LMS path.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-5">
                  {training.map((item) => (
                    <div key={item.title} className="surface-card-soft interactive-card rounded-[20px] px-4 py-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                          <div className="mt-1 text-sm text-slate-500">{item.status}</div>
                        </div>
                        <div className="text-sm font-medium text-slate-700">{item.progress}%</div>
                      </div>
                      <ProgressBar value={item.progress} className="mt-3" tone={item.progress < 75 ? "warning" : "success"} />
                    </div>
                  ))}
                  <Button href="/employee/training">Continue training</Button>
                </CardContent>
              </Card>
            ) : null}

            <Card className="surface-card-soft">
              <CardHeader className="space-y-2">
                <Badge className="w-fit">This week</Badge>
                <CardTitle className="text-[1.15rem]">Keep these in view</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  ["Policy reminder", "Read the updated AI Usage Policy before Friday."],
                  ["Pending review", "Avoid unusual AI use until the open request is approved."],
                  ["Next training", "Safe AI Usage Basics is the next module due."],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[18px] border border-[#c7e1e9]/80 bg-white/56 px-4 py-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">{value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
