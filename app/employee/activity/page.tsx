import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const activity = [
  ["2026-03-18 10:15", "AI workspace used", "Weekly support summary", "Logged"],
  ["2026-03-17 17:45", "Policy acknowledged", "Approved Tools Policy", "Completed"],
  ["2026-03-17 15:06", "Training completed", "Safe AI Usage Basics", "Completed"],
  ["2026-03-16 11:22", "Request updated", "Procurement assistant", "Needs info"],
];

export default function EmployeeActivityPage() {
  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="My activity"
          title="A simple record of your AI workspace, policy, and training events."
          description="This view keeps your recent actions visible without making the employee experience feel like an audit console."
          actions={<Button variant="secondary">Export activity</Button>}
          meta={
            <>
              <Badge tone="success">Logged</Badge>
              <Badge tone="warning">1 follow-up</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_360px]">
          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Recent activity</Badge>
              <CardTitle className="text-[1.35rem]">Your latest events</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Status</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {activity.map((row) => (
                    <TableRow key={`${row[0]}-${row[1]}`}>
                      <TableCell>{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>{row[2]}</TableCell>
                      <TableCell>
                        <Badge tone={row[3] === "Completed" ? "success" : row[3] === "Needs info" ? "warning" : "info"}>
                          {row[3]}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-2">
              <Badge tone="info" className="w-fit">
                Workspace state
              </Badge>
              <CardTitle>Current access context.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                ["Approved workspace", "Active"],
                ["Training status", "2 modules assigned"],
                ["Open request", "Procurement assistant"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-[18px] border border-slate-200/70 px-4 py-3">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="text-sm font-medium text-slate-900">{value}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
