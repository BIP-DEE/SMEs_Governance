import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const tableRows = [
  ["Daniel Scott", "AI workspace used", "Approved AI Workspace", "2026-03-18 10:15", "Operations", "Logged"],
  ["Nina Patel", "Request submitted", "Supplier Review Assistant", "2026-03-18 09:02", "Procurement", "Pending"],
  ["Emily Chen", "Policy acknowledged", "Approved Tools Policy", "2026-03-17 17:44", "Sales", "Completed"],
  ["Ava Mitchell", "Training completed", "Safe AI Usage Basics", "2026-03-17 15:06", "Support", "Completed"],
  ["Sophie Turner", "Flagged usage event", "Legal pilot workspace", "2026-03-17 11:28", "Legal", "Flagged"],
];

const feed = [
  "Support transcript summarisation session saved with logging enabled.",
  "Procurement request moved into reviewer follow-up after retention check.",
  "Sensitive Data Guidance acknowledgement completed by 9 finance employees.",
];

const flagged = [
  "Legal pilot attempted a restricted clause-drafting prompt outside approved scope.",
  "Finance invoice pilot uploaded an attachment type not yet covered by the approved workflow.",
];

export default function MonitoringPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Monitoring"
          title="See AI use as an ongoing operating signal, not a setup task."
          description="Keep activity visible, highlight unusual events, and connect monitoring back to the register, policies, and approvals."
          actions={
            <>
              <Button variant="secondary">Export activity</Button>
              <Button>Flag for review</Button>
            </>
          }
          meta={
            <>
              <Badge tone="info">124 events this week</Badge>
              <Badge tone="warning">5 open follow-ups</Badge>
              <Badge tone="danger">2 flagged items</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_380px]">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-200/70">
              <div className="space-y-2">
                <Badge className="w-fit">User activity</Badge>
                <CardTitle className="text-[1.35rem]">Recent activity table</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <FilterBar
                placeholder="Search users, actions, tools, or departments"
                filters={["Department", "Event type", "Status", "Date"]}
              />

              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Tool / Workspace</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status / Flag</TableHead>
                    <TableHead>Action</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {tableRows.map((row) => (
                    <TableRow key={`${row[0]}-${row[1]}-${row[3]}`}>
                      <TableCell className="font-medium text-slate-950">{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>{row[2]}</TableCell>
                      <TableCell>{row[3]}</TableCell>
                      <TableCell>{row[4]}</TableCell>
                      <TableCell>
                        <Badge
                          tone={
                            row[5] === "Flagged"
                              ? "danger"
                              : row[5] === "Pending"
                                ? "warning"
                                : row[5] === "Logged"
                                  ? "info"
                                  : "success"
                          }
                        >
                          {row[5]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost">
                          View details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <Card className="surface-dark text-white">
              <CardHeader className="space-y-2">
                <Badge className="w-fit border-white/10 bg-white/10 text-white">Flagged items</Badge>
                <CardTitle className="text-white">Signals that need reviewer attention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {flagged.map((item) => (
                  <div key={item} className="interactive-card-dark rounded-[20px] border border-white/10 bg-white/7 px-4 py-3 text-sm leading-6 panel-dark-muted">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-2">
                <Badge tone="success" className="w-fit">
                  Activity feed
                </Badge>
                <CardTitle>Live oversight, without noise.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {feed.map((item) => (
                  <div key={item} className="interactive-card flex items-start gap-3 rounded-[18px] border border-slate-200/70 px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <div className="text-sm leading-6 text-slate-700">{item}</div>
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
