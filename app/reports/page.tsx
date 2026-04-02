import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const packs = [
  "Inventory summary",
  "Approval decisions",
  "Training completion",
];

const logs = [
  ["2026-03-18 10:18", "Approval updated", "Ready"],
  ["2026-03-18 09:04", "Request created", "Logged"],
  ["2026-03-17 17:45", "Policy acknowledged", "Logged"],
  ["2026-03-17 15:06", "Training completed", "Logged"],
];

export default function ReportsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Reports"
          title="Export only what matters."
          description=""
          actions={<Button>Export current pack</Button>}
          meta={
            <>
              <Badge tone="success">5 packs</Badge>
              <Badge tone="info">Audit log live</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.28fr)_390px]">
          <div className="space-y-5 border-t border-white/6 pt-4">
            <div className="surface-dark rounded-[30px] px-6 py-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge className="border-white/12 bg-white/10 text-white">Monthly pack</Badge>
                <Button size="sm" variant="secondary">
                  Audit history
                </Button>
              </div>

              <h2 className="mt-5 text-[1.5rem] font-semibold tracking-[-0.04em] text-white">
                Evidence is ready to export.
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {packs.map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/8 bg-white/[0.05] px-4 py-4 text-sm text-white/88">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Badge className="w-fit">Audit log</Badge>
                <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                  Recent export-ready events.
                </h2>
              </div>

              <FilterBar placeholder="Search event or date" filters={["Status", "Date"]} />

              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>Time</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Status</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {logs.map((row, index) => (
                    <TableRow key={`${row[0]}-${row[1]}`} data-selected={index === 0}>
                      <TableCell>{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>
                        <Badge tone={row[2] === "Ready" ? "success" : "info"}>{row[2]}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <DetailPanel
            eyebrow="Current pack"
            title="Monthly pack"
            description=""
            actions={<Badge tone="success">Ready</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              Inventory, approvals, policy, and training are linked and exportable.
            </div>

            <Button size="sm">Export now</Button>

            <DisclosureCard title="What is included" badgeLabel="Current" badgeTone="info">
              <div className="space-y-2">
                {[
                  "Register with owners and risk",
                  "Approval decisions and reviewers",
                  "Training completion",
                  "Policy acknowledgements",
                ].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </DisclosureCard>

            <DisclosureCard title="Next export">
              <div className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                Leadership pack is scheduled in 15 days.
              </div>
            </DisclosureCard>
          </DetailPanel>
        </section>
      </PageContainer>
    </AppShell>
  );
}
