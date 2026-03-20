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
    stage: "Review",
    title: "Procurement assistant still needs retention evidence",
    detail: "Once evidence is attached, this request can move directly into sign-off.",
    owner: "Procurement · Nina Patel",
    href: "/requests",
  },
  {
    stage: "Enable",
    title: "Sensitive data guidance is ready for rollout",
    detail: "Finance and support can move into acknowledgement this week.",
    owner: "Policy rollout · Sophie Turner",
    href: "/policies",
  },
];

const workflow = [
  { stage: "Register", detail: "6 new records", href: "/inventory", icon: "inventory" as const },
  { stage: "Review", detail: "8 active requests", href: "/requests", icon: "requests" as const },
  { stage: "Enable", detail: "2 rollouts ready", href: "/policies", icon: "policies" as const },
  { stage: "Monitor", detail: "1 flagged signal", href: "/monitoring", icon: "monitoring" as const },
  { stage: "Report", detail: "Weekly export ready", href: "/reports", icon: "reports" as const },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Admin workspace"
          title="Guide the program through the next governance decisions."
          description="Use the workflow spine to move work forward, then open the supporting detail only where it helps."
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
              <Badge tone="success">94% evidence coverage</Badge>
              <Badge tone="danger">2 signals</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_360px]">
          <Card className="surface-focus-admin overflow-hidden">
            <CardHeader className="border-b border-[#bfdedf]/70">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-2">
                  <Badge tone="info" className="w-fit">
                    Today
                  </Badge>
                  <CardTitle className="text-[1.56rem]">Two decisions unblock most of the program.</CardTitle>
                </div>
                <Button size="sm" variant="secondary" href="/reports">
                  View evidence
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 pt-5">
              <div className="grid gap-3 xl:grid-cols-2">
                {priorityLane.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="surface-card-soft interactive-card flex min-h-[186px] flex-col rounded-[24px] px-5 py-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Badge tone={item.stage === "Review" ? "warning" : "info"}>{item.stage}</Badge>
                      <span className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        Open
                        <AppIcon name="arrow-right" className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.title}</div>
                      <p className="text-sm leading-6 text-slate-500">{item.detail}</p>
                    </div>
                    <div className="mt-auto pt-5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.owner}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="rounded-[26px] border border-[#c0dde7]/80 bg-white/58 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Program spine
                    </div>
                    <div className="mt-1 text-sm text-slate-600">Move from registration to reporting without leaving the main flow.</div>
                  </div>
                  <Button size="sm" variant="ghost" href="/inventory">
                    Open full workflow
                  </Button>
                </div>
                <div className="mt-4 grid gap-2 md:grid-cols-5">
                  {workflow.map((item) => (
                    <Link
                      key={item.stage}
                      href={item.href}
                      className="surface-card-soft interactive-card rounded-[18px] px-4 py-4"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-[14px] border border-[#c2dfe0] bg-[rgba(240,250,248,0.8)] text-slate-900">
                        <AppIcon name={item.icon} className="h-4 w-4" />
                      </div>
                      <div className="mt-3 text-sm font-semibold text-slate-950">{item.stage}</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="surface-dark text-white">
            <CardHeader className="space-y-2">
              <Badge className="w-fit border-white/10 bg-white/10 text-white">Program posture</Badge>
              <CardTitle className="text-white">Coverage is healthy, but training ownership is still lagging.</CardTitle>
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
              <div className="interactive-card-dark rounded-[20px] border border-white/10 bg-white/7 px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
                  Watch item
                </div>
                <div className="mt-2 text-sm leading-6 panel-dark-muted">
                  Procurement managers have the lowest training completion across owners. Push the reminder before next Friday’s export.
                </div>
              </div>
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
