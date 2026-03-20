import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const requests = [
  ["Procurement supplier review assistant", "Submitted", "2026-02-25", "Sophie Turner", "More evidence requested"],
  ["Customer reply drafting workspace", "Approved", "2026-03-05", "Daniel Scott", "Approved for internal use"],
  ["Legal clause drafting helper", "Rejected", "2026-03-08", "Nina Patel", "Out of approved scope"],
];

export default function EmployeeRequestsPage() {
  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="My requests"
          title="Track what you asked for and what reviewers still need."
          description="Requests stay visible here so employees can see the next step without chasing separate approval updates."
          actions={
            <>
              <Button variant="secondary">View guidance</Button>
              <Button>Submit request</Button>
            </>
          }
          meta={
            <>
              <Badge tone="warning">1 needs info</Badge>
              <Badge tone="success">1 approved</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_380px]">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-200/70">
              <div className="space-y-2">
                <Badge className="w-fit">Request list</Badge>
                <CardTitle className="text-[1.35rem]">Your recent requests</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <FilterBar placeholder="Search requests by title or reviewer" filters={["Status", "Date"]} />

              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>Request</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Reviewer</TableHead>
                    <TableHead>Latest note</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {requests.map((row, index) => (
                    <TableRow key={`${row[0]}-${row[1]}`} className={index === 0 ? "bg-blue-50/66" : ""}>
                      <TableCell className="font-medium text-slate-950">{row[0]}</TableCell>
                      <TableCell>
                        <Badge tone={row[1] === "Approved" ? "success" : row[1] === "Rejected" ? "danger" : "warning"}>
                          {row[1]}
                        </Badge>
                      </TableCell>
                      <TableCell>{row[2]}</TableCell>
                      <TableCell>{row[3]}</TableCell>
                      <TableCell>{row[4]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <DetailPanel
            eyebrow="Selected request"
            title="Procurement supplier review assistant"
            description="Reviewer requested more information before approval."
            actions={<Badge tone="warning">Needs info</Badge>}
          >
            <div className="space-y-4">
              {[
                ["Business purpose", "Summarise supplier questionnaires before final manager review."],
                ["Submitted", "2026-02-25"],
                ["Reviewer", "Sophie Turner"],
                ["Next step", "Upload retention evidence for the proposed workflow."],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[16px] border border-slate-200/70 px-4 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-700">{value}</div>
                </div>
              ))}
              <Button size="sm">Provide more info</Button>
            </div>
          </DetailPanel>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
