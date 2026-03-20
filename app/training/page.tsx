import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

const modules = [
  {
    title: "Introduction to Company AI Rules",
    summary: "Sets the baseline for approved AI behavior across the company.",
    assigned: "184 employees",
    progress: 100,
    status: "Live",
  },
  {
    title: "Safe AI Usage Basics",
    summary: "Covers prompting boundaries, output review, and escalation rules.",
    assigned: "168 employees",
    progress: 82,
    status: "Live",
  },
  {
    title: "Approved Tools and Use Cases",
    summary: "Explains when approved workspaces can be used without a new request.",
    assigned: "142 employees",
    progress: 68,
    status: "Live",
  },
  {
    title: "Human Review Expectations",
    summary: "Clarifies when human review is mandatory before action or sharing.",
    assigned: "56 managers",
    progress: 61,
    status: "Updated",
  },
  {
    title: "Data Handling with AI",
    summary: "Shows which data types can enter approved workflows and which cannot.",
    assigned: "74 employees",
    progress: 44,
    status: "Needs push",
  },
];

const overdue = [
  "Finance onboarding cohort still has 7 overdue completions.",
  "Support team needs a reminder on Sensitive Data Guidance alignment.",
  "Manager review module adoption is behind target in procurement.",
];

export default function TrainingPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Training"
          title="Keep AI governance training short, useful, and visible."
          description="Employees should see only the learning that matters for approved AI behavior, while admins keep completion and overdue coverage in view."
          actions={
            <>
              <Button variant="secondary">Assign training</Button>
              <Button>Create module</Button>
            </>
          }
          meta={
            <>
              <Badge>5 modules</Badge>
              <Badge tone="info">184 assigned</Badge>
              <Badge tone="success">84% complete</Badge>
              <Badge tone="warning">13 overdue</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_380px]">
          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Module library</Badge>
              <CardTitle className="text-[1.35rem]">Lightweight governance training</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.map((module) => (
                <div key={module.title} className="surface-card-soft interactive-card rounded-[22px] px-5 py-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-base font-semibold tracking-[-0.02em] text-slate-950">{module.title}</div>
                      <div className="max-w-2xl text-sm leading-6 text-slate-500">{module.summary}</div>
                    </div>
                    <Badge
                      tone={
                        module.status === "Live"
                          ? "success"
                          : module.status === "Updated"
                            ? "info"
                            : "warning"
                      }
                    >
                      {module.status}
                    </Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <span className="text-slate-500">{module.assigned}</span>
                    <span className="font-medium text-slate-700">{module.progress}%</span>
                  </div>
                  <ProgressBar
                    value={module.progress}
                    className="mt-3"
                    tone={module.progress < 50 ? "warning" : module.progress < 75 ? "default" : "success"}
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary">
                      View progress
                    </Button>
                    <Button size="sm" variant="ghost">
                      Mark complete
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="surface-dark text-white">
              <CardHeader className="space-y-2">
                <Badge className="w-fit border-white/10 bg-white/10 text-white">Coverage</Badge>
                <CardTitle className="text-white">Training is mostly healthy, but role-specific modules need help.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  ["Core AI rules", 100],
                  ["Safe usage basics", 82],
                  ["Data handling", 44],
                ].map(([label, value]) => (
                  <div key={label} className="interactive-card-dark rounded-[20px] border border-white/10 bg-white/7 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="panel-dark-muted text-sm">{label}</div>
                      <div className="text-sm font-medium text-white">{value}%</div>
                    </div>
                    <ProgressBar value={Number(value)} className="mt-3 bg-white/10" tone={Number(value) < 50 ? "warning" : "success"} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-2">
                <Badge tone="warning" className="w-fit">
                  Overdue
                </Badge>
                <CardTitle>People who need a nudge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {overdue.map((item) => (
                  <div key={item} className="interactive-card rounded-[18px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </PageContainer>
    </AppShell>
  );
}
