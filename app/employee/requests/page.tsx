import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const requests = [
  ["Procurement supplier review assistant", "Submitted", "Sophie Turner"],
  ["Customer reply drafting workspace", "Approved", "Daniel Scott"],
  ["Legal clause drafting helper", "Rejected", "Nina Patel"],
];

export default function EmployeeRequestsPage() {
  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="My requests"
          title="See only the request that needs you now."
          description=""
          actions={<Button>Submit request</Button>}
          meta={
            <>
              <Badge tone="warning">1 needs info</Badge>
              <Badge tone="success">1 approved</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_380px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Request list</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Select one request to continue.
              </h2>
            </div>

            <FilterBar placeholder="Search request or reviewer" filters={["Status", "Reviewer"]} />

            <Table>
              <TableHeader>
                <tr>
                  <TableHead>Request</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reviewer</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {requests.map((row, index) => (
                  <TableRow key={`${row[0]}-${row[1]}`} data-selected={index === 0}>
                    <TableCell className="font-medium text-slate-100">{row[0]}</TableCell>
                    <TableCell>
                      <Badge tone={row[1] === "Approved" ? "success" : row[1] === "Rejected" ? "danger" : "warning"}>
                        {row[1]}
                      </Badge>
                    </TableCell>
                    <TableCell>{row[2]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DetailPanel
            eyebrow="Selected request"
            title="Procurement supplier review assistant"
            description=""
            actions={<Badge tone="warning">Needs info</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              Reviewer still needs retention evidence for this workflow.
            </div>

            <div className="grid gap-3">
              {[
                ["Submitted", "2026-02-25"],
                ["Reviewer", "Sophie Turner"],
                ["Next", "Upload retention evidence"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
                </div>
              ))}
            </div>

            <Button size="sm">Provide info</Button>

            <DisclosureCard title="View details">
              <div className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                Business purpose: summarise supplier questionnaires before final manager review.
              </div>
            </DisclosureCard>
          </DetailPanel>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
