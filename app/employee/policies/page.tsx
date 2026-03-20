"use client";

import { useState } from "react";
import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const policies = [
  {
    id: "usage",
    title: "AI Usage Policy",
    summary: "Core rules for approved AI behavior",
    rate: 94,
    status: "Published",
    detail:
      "Use approved AI tools and company workspaces for internal work only. Review outputs before using them in decisions or external communication, and escalate unusual workflows through the request process.",
  },
  {
    id: "tools",
    title: "Approved Tools Policy",
    summary: "Which tools can be used without a new request",
    rate: 91,
    status: "Published",
    detail:
      "Employees may use only approved tools and workspaces listed in the company register. Anything new, external, or unclear must go through the request flow first.",
  },
  {
    id: "sensitive",
    title: "Sensitive Data Guidance",
    summary: "Prompt boundaries for restricted data",
    rate: 76,
    status: "Updated",
    detail:
      "Restricted legal, HR, and financial data should stay out of unapproved AI workflows. Only approved internal workspaces with the right controls may handle these categories.",
  },
];

export default function EmployeePoliciesPage() {
  const [selectedPolicyId, setSelectedPolicyId] = useState("usage");
  const selectedPolicy = policies.find((policy) => policy.id === selectedPolicyId) ?? policies[0];

  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="Policies"
          title="Read guidance in a shorter, more useful format."
          description="Choose a policy first, then review the specific guidance that applies to your work."
          actions={
            <>
              <Button variant="secondary">View acknowledgements</Button>
              <Button href="/employee/workspace">Open workspace</Button>
            </>
          }
          meta={
            <>
              <Badge tone="warning">1 updated policy</Badge>
              <Badge tone="success">Ack current</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_400px]">
          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Policy library</Badge>
              <CardTitle className="text-[1.35rem]">Choose the guidance you need</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {policies.map((policy) => {
                const active = policy.id === selectedPolicyId;

                return (
                  <button
                    key={policy.id}
                    type="button"
                    onClick={() => setSelectedPolicyId(policy.id)}
                    className={cn(
                      "w-full rounded-[22px] border px-5 py-5 text-left transition",
                      active
                        ? "surface-card-strong border-[#9fd3d9]"
                        : "border-[#bfdedf]/70 bg-[rgba(241,250,249,0.66)] hover:-translate-y-[1px] hover:border-[#a5d6db] hover:bg-[rgba(245,252,251,0.84)]"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-base font-semibold tracking-[-0.02em] text-slate-950">{policy.title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-500">{policy.summary}</div>
                      </div>
                      <Badge tone={policy.status === "Updated" ? "warning" : "success"}>{policy.status}</Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-500">Acknowledgement coverage</span>
                      <span className="font-medium text-slate-700">{policy.rate}%</span>
                    </div>
                    <ProgressBar value={policy.rate} className="mt-3" tone={policy.rate < 80 ? "warning" : "success"} />
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <DetailPanel
            eyebrow="Selected policy"
            title={selectedPolicy.title}
            description="The guidance currently selected from the employee policy library."
            actions={<Badge tone={selectedPolicy.status === "Updated" ? "warning" : "success"}>{selectedPolicy.status}</Badge>}
          >
            <div className="space-y-4">
              <div className="rounded-[18px] border border-[#bfdedf]/70 px-4 py-4 text-sm leading-7 text-slate-700">
                {selectedPolicy.detail}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Acknowledge</Button>
                <Button size="sm" variant="secondary">
                  Start related training
                </Button>
              </div>
            </div>
          </DetailPanel>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
