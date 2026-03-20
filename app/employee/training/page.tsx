import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

const modules = [
  ["Introduction to company AI rules", "Complete", 100],
  ["Safe AI usage basics", "In progress", 72],
  ["Approved tools and use cases", "Assigned", 0],
  ["Data handling with AI", "Assigned", 0],
];

export default function EmployeeTrainingPage() {
  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="My training"
          title="Finish only the governance training that matters for your role."
          description="This is not a learning portal. It is a short list of modules tied to approved AI use and the workflows you actually touch."
          actions={
            <>
              <Button variant="secondary">View progress</Button>
              <Button>Start training</Button>
            </>
          }
          meta={
            <>
              <Badge>4 assigned</Badge>
              <Badge tone="warning">2 overdue</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_360px]">
          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Assigned modules</Badge>
              <CardTitle className="text-[1.35rem]">Your current learning list</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {modules.map(([title, status, progress]) => (
                <div key={title} className="surface-card-soft rounded-[20px] px-4 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-950">{title}</div>
                      <div className="mt-1 text-sm text-slate-500">{status}</div>
                    </div>
                    <div className="text-sm font-medium text-slate-700">{progress}%</div>
                  </div>
                  <ProgressBar value={Number(progress)} className="mt-3" tone={Number(progress) < 50 ? "warning" : "success"} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-2">
              <Badge tone="info" className="w-fit">
                Why it matters
              </Badge>
              <CardTitle>Training unlocks safer everyday use.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Complete Safe AI Usage Basics before using customer-reply workflows.",
                "Review Approved Tools and Use Cases to know when a new request is not needed.",
                "Data Handling with AI is required for finance, support, and legal teams.",
              ].map((item) => (
                <div key={item} className="rounded-[18px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
