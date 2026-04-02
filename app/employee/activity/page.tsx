import { EmployeeShell } from "@/components/layout/employee-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const activity = [
  ["2026-03-18 10:15", "Workspace used", "Logged"],
  ["2026-03-17 17:45", "Policy acknowledged", "Completed"],
  ["2026-03-17 15:06", "Training completed", "Completed"],
  ["2026-03-16 11:22", "Request updated", "Needs info"],
];

export default function EmployeeActivityPage() {
  return (
    <EmployeeShell>
      <PageContainer>
        <PageHeader
          eyebrow="My activity"
          title="Keep your recent activity compact."
          description=""
          actions={<Button variant="secondary">Export activity</Button>}
          meta={
            <>
              <Badge tone="success">Logged</Badge>
              <Badge tone="warning">1 follow-up</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.16fr)_360px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Recent activity</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Latest events only.
              </h2>
            </div>

            <Table>
              <TableHeader>
                <tr>
                  <TableHead>Time</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Status</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {activity.map((row, index) => (
                  <TableRow key={`${row[0]}-${row[1]}`} data-selected={index === 0}>
                    <TableCell>{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>
                      <Badge tone={row[2] === "Completed" ? "success" : row[2] === "Needs info" ? "warning" : "info"}>
                        {row[2]}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DetailPanel
            eyebrow="Current state"
            title="Workspace access"
            description=""
            actions={<Badge tone="success">Healthy</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              Approved workspace is active. One request still needs follow-up.
            </div>

            <DisclosureCard title="View status">
              <div className="space-y-2">
                {[
                  "Training • 2 modules assigned",
                  "Request • Procurement assistant",
                  "Policies • Current",
                ].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </DisclosureCard>
          </DetailPanel>
        </section>
      </PageContainer>
    </EmployeeShell>
  );
}
