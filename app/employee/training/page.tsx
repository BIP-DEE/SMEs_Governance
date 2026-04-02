"use client";

import { useMemo, useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";

const modules = [
  { id: "rules", title: "Introduction to company AI rules", status: "Complete", progress: 100 },
  { id: "safe", title: "Safe AI usage basics", status: "In progress", progress: 72 },
  { id: "tools", title: "Approved tools and use cases", status: "Assigned", progress: 0 },
  { id: "data", title: "Data handling with AI", status: "Assigned", progress: 0 },
];

export default function EmployeeTrainingPage() {
  const [selectedId, setSelectedId] = useState("safe");
  const selected = useMemo(
    () => modules.find((module) => module.id === selectedId) ?? modules[0],
    [selectedId]
  );

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="My training"
          title="Finish one short module next."
          description=""
          actions={<Button>Start training</Button>}
          meta={
            <>
              <Badge tone="warning">2 overdue</Badge>
              <Badge tone="info">4 assigned</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_380px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Assigned modules</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Select one module to continue.
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
                        ? "surface-focus-employee border-cyan-300/16"
                        : "surface-card-soft interactive-card"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-100">{module.title}</div>
                        <div className="mt-1 text-sm text-slate-400">{module.status}</div>
                      </div>
                      <div className="text-sm font-semibold text-slate-100">{module.progress}%</div>
                    </div>
                    <ProgressBar
                      value={module.progress}
                      className="mt-3"
                      tone={module.progress < 50 ? "warning" : "success"}
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
            actions={<Badge tone={selected.progress === 100 ? "success" : selected.progress > 0 ? "warning" : "info"}>{selected.status}</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm text-slate-300">Progress</div>
                <div className="text-sm font-semibold text-slate-100">{selected.progress}%</div>
              </div>
              <ProgressBar
                value={selected.progress}
                className="mt-3"
                tone={selected.progress < 50 ? "warning" : "success"}
              />
            </div>

            <Button size="sm">Continue</Button>

            <DisclosureCard title="Why this module">
              <div className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                Finish this before using the matching workflow category.
              </div>
            </DisclosureCard>
          </DetailPanel>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
