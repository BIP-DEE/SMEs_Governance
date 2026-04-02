import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const events = [
  ["Daniel Scott", "Workspace used", "2026-03-18 10:15", "Logged"],
  ["Nina Patel", "Request submitted", "2026-03-18 09:02", "Pending"],
  ["Emily Chen", "Policy acknowledged", "2026-03-17 17:44", "Completed"],
  ["Ava Mitchell", "Training completed", "2026-03-17 15:06", "Completed"],
  ["Sophie Turner", "Flagged prompt", "2026-03-17 11:28", "Flagged"],
];

const selectedSignal = {
  title: "Legal pilot attempted a restricted prompt.",
  owner: "Sophie Turner",
  workspace: "Legal pilot workspace",
  nextStep: "Review the log and decide whether to pause the pilot.",
  related: [
    "Prompt log attached",
    "One previous scope reminder",
    "Legal owner available today",
  ],
};

export default function MonitoringPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Monitoring"
          title="Watch only the signals that need action."
          description=""
          actions={<Button>Flag for review</Button>}
          meta={
            <>
              <Badge tone="info">124 events</Badge>
              <Badge tone="warning">5 follow-ups</Badge>
              <Badge tone="danger">2 flagged</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.28fr)_380px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Signal list</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Review the flagged event first.
              </h2>
            </div>

            <FilterBar placeholder="Search actor, event, or status" filters={["Status", "Date", "Workspace"]} />

            <Table>
              <TableHeader>
                <tr>
                  <TableHead>Actor</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {events.map((row, index) => (
                  <TableRow key={`${row[0]}-${row[1]}-${row[2]}`} data-selected={index === 4}>
                    <TableCell className="font-medium text-slate-100">{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell>
                      <Badge
                        tone={
                          row[3] === "Flagged"
                            ? "danger"
                            : row[3] === "Pending"
                              ? "warning"
                              : row[3] === "Logged"
                                ? "info"
                                : "success"
                        }
                      >
                        {row[3]}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DetailPanel
            eyebrow="Selected signal"
            title="Flagged workspace event"
            description=""
            actions={<Badge tone="danger">Flagged</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              {selectedSignal.title}
            </div>

            <div className="grid gap-3">
              {[
                ["Owner", selectedSignal.owner],
                ["Workspace", selectedSignal.workspace],
                ["Next", selectedSignal.nextStep],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
                </div>
              ))}
            </div>

            <Button size="sm">Review signal</Button>

            <DisclosureCard title="Attached context" badgeLabel="More" badgeTone="info">
              <div className="space-y-2">
                {selectedSignal.related.map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </DisclosureCard>
          </DetailPanel>
        </section>
      </PageContainer>
    </AppShell>
  );
}
