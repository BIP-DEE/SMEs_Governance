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

const policies = [
  {
    id: "usage",
    title: "AI Usage Policy",
    summary: "Core approved AI rules",
    rate: 94,
    status: "Published",
    detail: "Use approved AI tools, review outputs, and escalate unusual workflows.",
  },
  {
    id: "tools",
    title: "Approved Tools Policy",
    summary: "Which tools can be used now",
    rate: 91,
    status: "Published",
    detail: "Use only listed tools and workspaces. New tools need a request first.",
  },
  {
    id: "sensitive",
    title: "Sensitive Data Guidance",
    summary: "Prompt boundaries for restricted data",
    rate: 76,
    status: "Updated",
    detail: "Restricted legal, HR, and finance data stay out of unapproved workflows.",
  },
];

export default function EmployeePoliciesPage() {
  const [selectedPolicyId, setSelectedPolicyId] = useState("sensitive");
  const selectedPolicy = useMemo(
    () => policies.find((policy) => policy.id === selectedPolicyId) ?? policies[0],
    [selectedPolicyId]
  );

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="Policies"
          title="Read only the policy that matters now."
          description=""
          actions={<Button href="/employee/workspace">Open workspace</Button>}
          meta={
            <>
              <Badge tone="warning">1 updated</Badge>
              <Badge tone="success">Acknowledged</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_380px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Policy list</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Select one policy to open.
              </h2>
            </div>

            <div className="space-y-3">
              {policies.map((policy) => {
                const active = policy.id === selectedPolicyId;

                return (
                  <button
                    key={policy.id}
                    type="button"
                    onClick={() => setSelectedPolicyId(policy.id)}
                    className={cn(
                      "w-full rounded-[24px] border px-5 py-5 text-left transition",
                      active
                        ? "surface-focus-employee border-cyan-300/16"
                        : "surface-card-soft interactive-card"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-100">{policy.title}</div>
                        <div className="mt-1 text-sm text-slate-400">{policy.summary}</div>
                      </div>
                      <Badge tone={policy.status === "Updated" ? "warning" : "success"}>{policy.status}</Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-400">Acknowledgement</span>
                      <span className="font-semibold text-slate-100">{policy.rate}%</span>
                    </div>
                    <ProgressBar value={policy.rate} className="mt-3" tone={policy.rate < 80 ? "warning" : "success"} />
                  </button>
                );
              })}
            </div>
          </div>

          <DetailPanel
            eyebrow="Selected policy"
            title={selectedPolicy.title}
            description=""
            actions={<Badge tone={selectedPolicy.status === "Updated" ? "warning" : "success"}>{selectedPolicy.status}</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              {selectedPolicy.detail}
            </div>

            <Button size="sm">Acknowledge</Button>

            <DisclosureCard title="Related next step">
              <div className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                Start the related training if this policy affects your role.
              </div>
            </DisclosureCard>
          </DetailPanel>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
