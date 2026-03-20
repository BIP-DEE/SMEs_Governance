import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const reportCards = [
  ["Inventory Summary", "Current register, owners, risk, and approval status."],
  ["Approval Decisions", "Decision history and reviewer actions for AI requests."],
  ["Training Completion", "Assigned learning status and overdue coverage."],
  ["Policy Acknowledgement", "Acknowledgement status by policy and audience."],
  ["Activity Report", "Recent workspace, request, and monitoring events."],
];

const logs = [
  ["2026-03-18 10:18", "Approval updated", "Sophie Turner", "Supplier Review Assistant", "Requested more evidence", "Sophie Turner", "Retention evidence pending"],
  ["2026-03-18 09:04", "Request created", "Nina Patel", "Supplier Review Assistant", "Submitted request", "Nina Patel", "Initial business justification attached"],
  ["2026-03-17 17:45", "Policy acknowledged", "Emily Chen", "Approved Tools Policy", "Acknowledged", "Emily Chen", "Employee acknowledgement recorded"],
  ["2026-03-17 15:06", "Training completed", "Ava Mitchell", "Safe AI Usage Basics", "Marked complete", "Training service", "Completion synced"],
  ["2026-03-17 11:28", "Monitoring flag", "Sophie Turner", "Legal pilot workspace", "Flagged for review", "Monitoring service", "Restricted prompt detected"],
];

export default function ReportsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Reports"
          title="Keep evidence ready without making reporting the product."
          description="Generate report packs, inspect the audit trail, and export decision history in a format leadership and auditors can actually use."
          actions={
            <>
              <Button variant="secondary">Export PDF</Button>
              <Button>Export CSV</Button>
            </>
          }
          meta={
            <>
              <Badge tone="success">5 report packs</Badge>
              <Badge tone="info">Audit log live</Badge>
              <Badge tone="warning">Next monthly export in 15 days</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_360px]">
          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Downloadable reports</Badge>
              <CardTitle className="text-[1.35rem]">Templates for evidence and governance review</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {reportCards.map(([title, detail]) => (
                <div key={title} className="surface-card-soft interactive-card rounded-[22px] px-4 py-4">
                  <div className="text-base font-semibold tracking-[-0.02em] text-slate-950">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-500">{detail}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary">
                      Generate report
                    </Button>
                    <Button size="sm" variant="ghost">
                      View history
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="surface-dark text-white">
            <CardHeader className="space-y-2">
              <Badge className="w-fit border-white/10 bg-white/10 text-white">Audit readiness</Badge>
              <CardTitle className="text-white">Decision history is complete and exportable.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Inventory ownership coverage is at 100%.",
                "Approval history is linked to current high-risk items.",
                "Policy acknowledgements are up to date for core employee groups.",
              ].map((item) => (
                <div key={item} className="interactive-card-dark rounded-[18px] border border-white/10 bg-white/7 px-4 py-3 text-sm leading-6 panel-dark-muted">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-5">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-200/70">
              <div className="space-y-2">
                <Badge className="w-fit">Audit log</Badge>
                <CardTitle className="text-[1.35rem]">Traceable event history</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <FilterBar
                placeholder="Filter by date, event type, user, or status"
                filters={["Date", "Event type", "User", "Status"]}
              />

              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Event Type</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Item Affected</TableHead>
                    <TableHead>Action Taken</TableHead>
                    <TableHead>Reviewer / Actor</TableHead>
                    <TableHead>Notes</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {logs.map((row) => (
                    <TableRow key={`${row[0]}-${row[1]}-${row[2]}`}>
                      {row.map((cell, index) => (
                        <TableCell key={`${cell}-${index}`}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </PageContainer>
    </AppShell>
  );
}
