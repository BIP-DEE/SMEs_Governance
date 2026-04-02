import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { DashboardSecondaryPanel } from "@/components/dashboard/dashboard-secondary-panel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";

const summaryStrip = [
  { label: "Register", value: "6 need owners", href: "/inventory" },
  { label: "Review", value: "3 blocked", href: "/requests" },
  { label: "Monitor", value: "1 flagged", href: "/monitoring" },
];

const posture = [
  ["Owner coverage", 100],
  ["Logged workspaces", 91],
  ["Training completion", 67],
];

export default function DashboardPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Admin workspace"
          title="Move only the next decision."
          description=""
          actions={
            <>
              <Button variant="secondary" href="/inventory">
                Register use
              </Button>
              <Button href="/requests">Open review queue</Button>
            </>
          }
          meta={
            <>
              <Badge tone="warning">3 blocked</Badge>
              <Badge tone="success">94% evidence coverage</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.34fr)_320px]">
          <div className="space-y-6">
            <div className="surface-dark rounded-[32px] px-6 py-6 sm:px-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge tone="warning">Primary lane</Badge>
                <Button size="sm" variant="secondary" href="/reports">
                  Evidence
                </Button>
              </div>

              <h2 className="mt-5 max-w-2xl text-balance text-[1.9rem] font-semibold tracking-[-0.05em] text-white">
                Clear the procurement review.
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Owner", "Nina Patel"],
                  ["Reviewer", "Sophie Turner"],
                  ["Needs now", "Retention evidence"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[20px] border border-white/8 bg-white/[0.05] px-4 py-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/52">
                      {label}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/requests">Open request</Button>
                <Button variant="secondary" href="/inventory">
                  Open register
                </Button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {summaryStrip.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="surface-card-soft interactive-card rounded-[22px] px-4 py-4"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">{item.value}</div>
                </Link>
              ))}
            </div>

            <DashboardSecondaryPanel />
          </div>

          <aside className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Program posture</Badge>
              <h2 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-slate-50">
                Training is the only watch area.
              </h2>
            </div>

            <div className="space-y-3">
              {posture.map(([label, value]) => (
                <div key={label} className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm text-slate-200">{label}</div>
                    <div className="text-sm font-semibold text-white">{value}%</div>
                  </div>
                  <ProgressBar
                    value={Number(value)}
                    className="mt-3"
                    tone={Number(value) < 75 ? "warning" : "success"}
                  />
                </div>
              ))}
            </div>

            <Button variant="secondary" href="/training">
              Review training
            </Button>
          </aside>
        </section>
      </PageContainer>
    </AppShell>
  );
}
