"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: "rules",
    title: "Introduction to company AI rules",
    assigned: "184 employees",
    progress: 100,
    status: "Live",
    detail: "Baseline governance module.",
  },
  {
    id: "safe",
    title: "Safe AI usage basics",
    assigned: "168 employees",
    progress: 82,
    status: "Live",
    detail: "Prompt boundaries and review.",
  },
  {
    id: "tools",
    title: "Approved tools and use cases",
    assigned: "142 employees",
    progress: 68,
    status: "Live",
    detail: "When a new request is not needed.",
  },
  {
    id: "data",
    title: "Data handling with AI",
    assigned: "74 employees",
    progress: 44,
    status: "Needs push",
    detail: "Role-specific data controls.",
  },
] as const;

export default function TrainingPage() {
  const [selectedId, setSelectedId] = useState<(typeof modules)[number]["id"]>("data");
  const selected = useMemo(
    () => modules.find((module) => module.id === selectedId) ?? modules[0],
    [selectedId]
  );

  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Training"
          title="Push only the module that needs help."
          description=""
          actions={<Button>Create module</Button>}
          meta={
            <>
              <Badge tone="success">84% complete</Badge>
              <Badge tone="warning">13 overdue</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_390px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Module list</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Select one module to review.
              </h2>
            </div>

            <div className="space-y-3">
              {modules.map((module) => {
                const active = module.id === selectedId;

                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setSelectedId(module.id)}
                    className={cn(
                      "w-full rounded-[24px] border px-5 py-5 text-left transition",
                      active
                        ? "surface-focus-admin border-cyan-300/16"
                        : "surface-card-soft interactive-card"
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-100">{module.title}</div>
                        <div className="mt-1 text-sm text-slate-400">{module.assigned}</div>
                      </div>
                      <Badge tone={module.status === "Needs push" ? "warning" : "success"}>
                        {module.status}
                      </Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-400">{module.detail}</span>
                      <span className="font-semibold text-slate-100">{module.progress}%</span>
                    </div>
                    <ProgressBar
                      value={module.progress}
                      className="mt-3"
                      tone={module.progress < 50 ? "warning" : module.progress < 75 ? "default" : "success"}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <DetailPanel
            eyebrow="Selected module"
            title={selected.title}
            description=""
            actions={<Badge tone={selected.status === "Needs push" ? "warning" : "success"}>{selected.status}</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              {selected.detail}
            </div>

            <div className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm text-slate-300">Completion</div>
                <div className="text-sm font-semibold text-slate-100">{selected.progress}%</div>
              </div>
              <ProgressBar
                value={selected.progress}
                className="mt-3"
                tone={selected.progress < 50 ? "warning" : "success"}
              />
            </div>

            <Button size="sm">Message cohort</Button>

            <DisclosureCard title="More coverage">
              <div className="space-y-2">
                {[
                  `Assigned • ${selected.assigned}`,
                  selected.status === "Needs push" ? "Needs follow-up" : "No action needed",
                  "Leadership export available in reports",
                ].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </DisclosureCard>
          </DetailPanel>
        </section>
      </PageContainer>
    </AppShell>
  );
}
