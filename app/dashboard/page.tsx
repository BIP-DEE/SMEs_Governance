import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { DashboardSecondaryPanel } from "@/components/dashboard/dashboard-secondary-panel";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

const priorityLane = [
  {
    stage: "Approve",
    title: "Supplier review assistant for procurement",
    detail: "Retention evidence is the final blocker before sign-off.",
    href: "/requests",
  },
  {
    stage: "Publish",
    title: "Sensitive data guidance rollout",
    detail: "Finance and support are ready for acknowledgement launch.",
    href: "/policies",
  },
];
export default function DashboardPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Admin workspace"
          title="Keep the program focused on the few governance decisions that matter today."
          description="Review what needs action, check posture, and move through the workflow from here."
          actions={
            <>
              <Button variant="secondary" href="/inventory">
                Register use
              </Button>
              <Button href="/requests">Open queue</Button>
            </>
          }
          meta={
            <>
              <Badge tone="warning">8 in review</Badge>
              <Badge tone="success">94% evidence coverage</Badge>
              <Badge tone="danger">2 signals</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_360px]">
          <Card className="surface-card-strong overflow-hidden">
            <CardHeader className="border-b border-[#bfdedf]/70">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-2">
                  <Badge tone="info" className="w-fit">
                    Priority lane
                  </Badge>
                  <CardTitle className="text-[1.5rem]">What needs attention right now</CardTitle>
                </div>
                <Button size="sm" variant="secondary" href="/reports">
                  View evidence
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid gap-3 pt-5 lg:grid-cols-2">
              {priorityLane.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="surface-card-soft interactive-card flex min-h-[176px] flex-col rounded-[24px] px-5 py-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.stage}
                    </div>
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      Open
                      <AppIcon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-5 space-y-2">
                    <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.title}</div>
                    <p className="text-sm leading-6 text-slate-500">{item.detail}</p>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="text-sm font-medium text-slate-700">Continue this step</div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="surface-dark text-white">
            <CardHeader className="space-y-2">
              <Badge className="w-fit border-white/10 bg-white/10 text-white">Program posture</Badge>
              <CardTitle className="text-white">Healthy coverage, one area lagging.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                ["Inventory with named owner", 100],
                ["Approved workspaces with logging", 91],
                ["Owner training completion", 67],
              ].map(([label, value]) => (
                <div key={label} className="interactive-card-dark rounded-[20px] border border-white/10 bg-white/7 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="panel-dark-muted text-sm">{label}</div>
                    <div className="text-sm font-medium text-white">{value}%</div>
                  </div>
                  <ProgressBar value={Number(value)} className="mt-3 bg-white/10" tone={Number(value) < 75 ? "warning" : "success"} />
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-5">
          <DashboardSecondaryPanel />
        </section>
      </PageContainer>
    </AppShell>
  );
}
