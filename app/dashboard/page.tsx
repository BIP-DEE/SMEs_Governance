import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { DashboardSecondaryPanel } from "@/components/dashboard/dashboard-secondary-panel";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

const workflow = [
  { stage: "Register", detail: "6 new records", href: "/inventory" },
  { stage: "Review", detail: "8 active requests", href: "/requests" },
  { stage: "Enable", detail: "2 rollouts ready", href: "/policies" },
  { stage: "Monitor", detail: "1 flagged signal", href: "/monitoring" },
  { stage: "Report", detail: "Export ready", href: "/reports" },
];

const supportLane = [
  {
    stage: "Enable",
    title: "Sensitive data guidance is ready to publish",
    detail: "Finance and support can move into acknowledgement this week.",
    href: "/policies",
  },
  {
    stage: "Monitor",
    title: "One workspace signal still needs a quick review",
    detail: "Context is already logged inside monitoring.",
    href: "/monitoring",
  },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Admin workspace"
          title="Move the program through the few decisions that matter today."
          description="Keep the workflow visible, clear what is blocked, and leave the rest behind one more click."
          actions={
            <>
              <Button variant="secondary" href="/inventory">
                Register use
              </Button>
              <Button href="/requests">Open review queue</Button>
            </>
          }
          meta={<Badge tone="success">94% evidence coverage</Badge>}
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_340px]">
          <Card className="surface-focus-admin overflow-hidden">
            <CardHeader className="border-b border-[#bfdedf]/75">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-2">
                  <Badge tone="info" className="w-fit">
                    Action lane
                  </Badge>
                  <CardTitle className="text-[1.58rem]">Clear the blocked review, then move rollout forward.</CardTitle>
                </div>
                <Button size="sm" variant="secondary" href="/reports">
                  View evidence
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-5 pt-5">
              <div className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_300px]">
                <Link
                  href="/requests"
                  className="surface-card-strong interactive-card flex min-h-[276px] flex-col rounded-[28px] px-6 py-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Badge tone="warning">Review first</Badge>
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      Open request
                      <AppIcon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-5 max-w-xl space-y-3">
                    <div className="text-[1.52rem] font-semibold tracking-[-0.045em] text-slate-950">
                      Procurement assistant still needs retention evidence.
                    </div>
                    <p className="text-sm leading-6 text-slate-600">
                      Once evidence is attached, this request can move straight into sign-off.
                    </p>
                  </div>

                  <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-3">
                    {[
                      ["Owner", "Nina Patel"],
                      ["Status", "Blocked"],
                      ["Reviewer", "Sophie Turner"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[18px] border border-[#bad8e7]/80 bg-white/58 px-4 py-3">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                        <div className="mt-2 text-sm font-semibold text-slate-900">{value}</div>
                      </div>
                    ))}
                  </div>
                </Link>

                <div className="space-y-3">
                  {supportLane.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="surface-card-soft interactive-card flex min-h-[132px] flex-col rounded-[24px] px-5 py-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Badge tone={item.stage === "Enable" ? "info" : "warning"}>{item.stage}</Badge>
                        <AppIcon name="arrow-right" className="h-4 w-4 text-slate-500" />
                      </div>
                      <div className="mt-4 text-base font-semibold tracking-[-0.02em] text-slate-950">{item.title}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="surface-rail-admin rounded-[26px] px-5 py-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Workflow spine
                    </div>
                    <div className="mt-1 text-sm text-slate-700">Move through the program without leaving the main lane.</div>
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
                      className="interactive-card rounded-[18px] border border-[#b9d9e4]/90 bg-white/58 px-4 py-3"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {item.stage}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-950">{item.detail}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="surface-dark text-white">
            <CardHeader className="space-y-2">
              <Badge className="w-fit border-white/12 bg-white/10 text-white">Program posture</Badge>
              <CardTitle className="text-white">Coverage is steady. Owner training is the one lagging area.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                ["Inventory with named owner", 100],
                ["Approved workspaces with logging", 91],
                ["Owner training completion", 67],
              ].map(([label, value]) => (
                <div key={label} className="interactive-card-dark rounded-[20px] border border-white/12 bg-white/8 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm text-white/88">{label}</div>
                    <div className="text-sm font-semibold text-white">{value}%</div>
                  </div>
                  <ProgressBar
                    value={Number(value)}
                    className="mt-3 bg-white/12"
                    tone={Number(value) < 75 ? "warning" : "success"}
                  />
                </div>
              ))}

              <div className="interactive-card-dark rounded-[20px] border border-white/12 bg-white/8 px-4 py-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/84">
                  Watch item
                </div>
                <div className="mt-2 text-sm leading-6 text-white/88">
                  Procurement managers are still the lowest completion segment ahead of next Friday’s export.
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
