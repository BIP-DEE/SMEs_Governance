"use client";

import { useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
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
    eyebrow: "Approved workspace",
    title: "Use the company assistant for internal work.",
    summary: "Open the approved AI workspace for drafting, summarising, and customer replies.",
  },
  {
    id: "requests",
    eyebrow: "Open request",
    title: "Procurement assistant request needs follow-up.",
    summary: "The reviewer asked for retention evidence before approval can continue.",
  },
  {
    id: "training",
    eyebrow: "Training",
    title: "Two modules still need attention.",
    summary: "Finish Safe AI Usage Basics and review Approved Tools and Use Cases.",
  },
] as const;

export default function EmployeeHomePage() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]["id"]>("workspace");

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="Employee workspace"
          title="Start from the approved AI path instead of guessing what is allowed."
          description="Choose the area you want to work in and then move through the next step with the right level of detail."
          actions={
            <>
              <Button variant="secondary" href="/employee/requests">
                Submit request
              </Button>
              <Button href="/employee/workspace">Open workspace</Button>
            </>
          }
          meta={
            <>
              <Badge tone="warning">1 follow-up</Badge>
              <Badge tone="info">2 modules due</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[320px_minmax(0,1fr)]">
          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Choose a section</Badge>
              <CardTitle className="text-[1.28rem]">What do you need right now?</CardTitle>
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
                      "w-full rounded-[20px] border px-4 py-4 text-left transition",
                      active
                        ? "surface-card-strong border-[#9fd3d9]"
                        : "interactive-card border-[#bfdedf]/70 bg-[rgba(241,250,249,0.66)] hover:bg-[rgba(245,252,251,0.84)]"
                    )}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {section.eyebrow}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-950">{section.title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-500">{section.summary}</div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          {activeSection === "workspace" ? (
            <Card className="surface-dark overflow-hidden text-white">
              <CardHeader className="space-y-3">
                <Badge className="w-fit border-white/10 bg-white/10 text-white">Approved workspace</Badge>
                <CardTitle className="text-[1.55rem] text-white">Open the assistant for approved internal tasks.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Draft internal email",
                    "Summarise meeting notes",
                    "Create customer reply",
                  ].map((template) => (
                    <div key={template} className="interactive-card-dark rounded-[18px] border border-white/10 bg-white/7 px-4 py-3 text-sm panel-dark-muted">
                      {template}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/employee/workspace" variant="secondary">
                    Open workspace
                  </Button>
                  <Button href="/employee/policies" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                    View guidance
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : null}

          {activeSection === "requests" ? (
            <Card className="surface-card-strong">
              <CardHeader className="space-y-2">
                <Badge tone="warning" className="w-fit">
                  Open request
                </Badge>
                <CardTitle className="text-[1.45rem]">Procurement assistant request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  ["Current status", "Needs more information"],
                  ["Reviewer", "Sophie Turner"],
                  ["Next step", "Provide retention evidence for the proposed workflow"],
                ].map(([label, value]) => (
                  <div key={label} className="interactive-card rounded-[18px] border border-[#bfdedf]/70 px-4 py-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-700">{value}</div>
                  </div>
                ))}
                <Button size="sm" href="/employee/requests">
                  View request
                </Button>
              </CardContent>
            </Card>
          ) : null}

          {activeSection === "training" ? (
            <Card>
              <CardHeader className="space-y-2">
                <Badge tone="info" className="w-fit">
                  Assigned training
                </Badge>
                <CardTitle className="text-[1.45rem]">Work through the short modules still due.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                <Button size="sm" href="/employee/training">
                  Continue training
                </Button>
              </CardContent>
            </Card>
          ) : null}
        </section>

        <section className="mt-5">
          <Card>
            <CardHeader className="space-y-2">
              <Badge tone="warning" className="w-fit">
                Policy reminder
              </Badge>
              <CardTitle>One rule to keep in view this week.</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="interactive-card rounded-[18px] border border-[#bfdedf]/70 px-4 py-3 text-sm leading-6 text-slate-700">
                Review the updated AI Usage Policy before next Friday and avoid unusual AI use until it has been approved through the request flow.
              </div>
            </CardContent>
          </Card>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
