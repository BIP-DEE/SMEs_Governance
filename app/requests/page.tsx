import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const requests = [
  {
    title: "Procurement supplier review assistant",
    submitted: "2026-02-25",
    requestedBy: "Nina Patel",
    reviewer: "Sophie Turner",
    status: "Pending",
  },
  {
    title: "Finance invoice review pilot",
    submitted: "2026-03-02",
    requestedBy: "Marcus Lee",
    reviewer: "Ava Mitchell",
    status: "In review",
  },
  {
    title: "Customer reply drafting workspace",
    submitted: "2026-03-05",
    requestedBy: "Emily Chen",
    reviewer: "Daniel Scott",
    status: "Approved",
  },
  {
    title: "Legal clause drafting helper",
    submitted: "2026-03-08",
    requestedBy: "Sophie Turner",
    reviewer: "Nina Patel",
    status: "Rejected",
  },
];

const selected = {
  summary: "Procurement wants an internal supplier-review assistant.",
  requestedBy: "Nina Patel",
  reviewer: "Sophie Turner",
  risk: "Medium",
  purpose: "Reduce manual review time while preserving human approval.",
  vendor: "OpenAI gateway",
  model: "GPT-4.1",
  dataInvolved: "Supplier questionnaires and internal notes",
  controls: [
    "Prompt logging through gateway",
    "Manager review before scoring",
    "Restricted clauses excluded",
  ],
  comments: [
    "Retention evidence still missing",
    "Legal confirmed scope limits",
  ],
  history: [
    "2026-03-12 • Reviewer requested more evidence",
    "2026-03-04 • Security review completed",
    "2026-02-25 • Request submitted",
  ],
};

export default function RequestsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Requests"
          title="Review the next request."
          description=""
          actions={<Button variant="secondary" href="/reports">Queue history</Button>}
          meta={
            <>
              <Badge tone="warning">Pending 3</Badge>
              <Badge tone="info">In review 4</Badge>
              <Badge tone="success">Approved 21</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.34fr)_390px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Approval queue</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Select one request to decide.
              </h2>
            </div>

            <FilterBar
              placeholder="Search title, requester, or reviewer"
              filters={["Status", "Reviewer", "Date"]}
              chips={[
                { label: "Pending", tone: "warning" },
                { label: "In review", tone: "info" },
              ]}
            />

            <Table>
              <TableHeader>
                <tr>
                  <TableHead>Request</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reviewer</TableHead>
                  <TableHead>Submitted</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {requests.map((item, index) => (
                  <TableRow key={item.title} data-selected={index === 0}>
                    <TableCell>
                      <div className="font-medium text-slate-100">{item.title}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                        {item.requestedBy}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        tone={
                          item.status === "Approved"
                            ? "success"
                            : item.status === "Rejected"
                              ? "danger"
                              : item.status === "In review"
                                ? "info"
                                : "warning"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.reviewer}</TableCell>
                    <TableCell>{item.submitted}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DetailPanel
            eyebrow="Selected request"
            title="Procurement supplier review assistant"
            description=""
            actions={<Badge tone="warning">Pending</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              {selected.summary}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Requester", selected.requestedBy],
                ["Reviewer", selected.reviewer],
                ["Risk", selected.risk],
                ["Next", "Retention evidence"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button size="sm">Approve</Button>
              <Button size="sm" variant="secondary">
                Request info
              </Button>
            </div>

            <DisclosureCard title="Review basis" badgeLabel="More" badgeTone="info">
              <div className="space-y-2">
                {[
                  `Purpose • ${selected.purpose}`,
                  `Vendor / model • ${selected.vendor} • ${selected.model}`,
                  `Data • ${selected.dataInvolved}`,
                  ...selected.controls,
                  ...selected.comments,
                ].map((item) => (
                  <div key={item} className="rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </DisclosureCard>

            <DisclosureCard title="History">
              <div className="space-y-2">
                {selected.history.map((item) => (
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
