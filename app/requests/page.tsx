import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetailPanel } from "@/components/ui/detail-panel";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const requests = [
  {
    title: "Procurement supplier review assistant",
    requestedBy: "Nina Patel",
    type: "Internal assistant",
    department: "Procurement",
    submitted: "2026-02-25",
    risk: "64",
    status: "Pending",
    reviewer: "Sophie Turner",
  },
  {
    title: "Finance invoice review pilot",
    requestedBy: "Marcus Lee",
    type: "Pilot",
    department: "Finance",
    submitted: "2026-03-02",
    risk: "82",
    status: "In review",
    reviewer: "Ava Mitchell",
  },
  {
    title: "Customer reply drafting workspace",
    requestedBy: "Emily Chen",
    type: "Employee workspace",
    department: "Sales",
    submitted: "2026-03-05",
    risk: "39",
    status: "Approved",
    reviewer: "Daniel Scott",
  },
  {
    title: "Legal clause drafting helper",
    requestedBy: "Sophie Turner",
    type: "Internal workflow",
    department: "Legal",
    submitted: "2026-03-08",
    risk: "88",
    status: "Rejected",
    reviewer: "Nina Patel",
  },
];

const selected = {
  summary: "Procurement wants an internal assistant that drafts supplier review summaries and highlights missing evidence before managers make a final decision.",
  purpose: "Reduce manual review time while preserving human decision-making for supplier approval.",
  problemSolved: "Teams currently read every supplier questionnaire manually and often miss missing attachments until late in the process.",
  dataInvolved: "Supplier questionnaires, contract metadata, internal procurement notes.",
  users: "Procurement managers and approved reviewers only.",
  vendor: "OpenAI through company gateway",
  model: "GPT-4.1",
  riskAnswers: [
    "Will outputs influence a business decision? Yes, but final approval remains human.",
    "Does the workflow process sensitive data? Internal supplier and contract data only.",
    "Will outputs be sent externally? No.",
  ],
  controls: [
    "Prompt logging through company gateway",
    "Manager review before supplier scoring",
    "Sensitive legal clauses excluded from prompt scope",
  ],
  comments: [
    "Security requested retention evidence before final sign-off.",
    "Legal confirmed restricted clause drafting must stay outside this workflow.",
  ],
  history: [
    "2026-03-12 • Reviewer requested more retention evidence",
    "2026-03-04 • Security review completed",
    "2026-02-25 • Request submitted by Nina Patel",
  ],
};

export default function RequestsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Requests"
          title="Keep new AI adoption structured and visible."
          description="Review AI use through a single approval flow so adoption, controls, and final decisions stay connected."
          actions={
            <>
              <Button variant="secondary">Export queue</Button>
              <Button href="/reports">View history</Button>
            </>
          }
          meta={
            <>
              <Badge tone="warning">Pending 3</Badge>
              <Badge tone="info">In review 4</Badge>
              <Badge tone="success">Approved 21</Badge>
              <Badge tone="danger">Rejected 2</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_420px]">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-200/70">
              <div className="space-y-2">
                <Badge className="w-fit">Approval queue</Badge>
                <CardTitle className="text-[1.35rem]">Requests needing review</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <FilterBar
                placeholder="Search by title, requester, reviewer, or department"
                filters={["Type", "Department", "Risk score", "Status"]}
                chips={[
                  { label: "Pending", tone: "warning" },
                  { label: "In review", tone: "info" },
                ]}
              />

              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>Request Title</TableHead>
                    <TableHead>Requested By</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reviewer</TableHead>
                    <TableHead>Action</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {requests.map((item, index) => (
                    <TableRow key={item.title} className={index === 0 ? "bg-blue-50/66" : ""}>
                      <TableCell className="font-medium text-slate-950">{item.title}</TableCell>
                      <TableCell>{item.requestedBy}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell>{item.submitted}</TableCell>
                      <TableCell>{item.risk}</TableCell>
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
                      <TableCell>
                        <div className="flex flex-wrap gap-1.5">
                          <Button size="sm" variant="ghost">
                            Review
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <DetailPanel
            eyebrow="Selected request"
            title="Procurement supplier review assistant"
            description="Structured view of the current request and its review context."
            actions={<Badge tone="warning">Pending</Badge>}
          >
            <div className="space-y-4">
              <div className="rounded-[18px] border border-slate-200/70 px-4 py-4 text-sm leading-6 text-slate-700">
                {selected.summary}
              </div>

              {[
                ["Business purpose", selected.purpose],
                ["Problem solved", selected.problemSolved],
                ["Data involved", selected.dataInvolved],
                ["Intended users", selected.users],
                ["Vendor / model", `${selected.vendor} • ${selected.model}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[16px] border border-slate-200/70 px-4 py-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-700">{value}</div>
                </div>
              ))}

              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Questionnaire and risk answers
                </div>
                {selected.riskAnswers.map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Required controls</div>
                {selected.controls.map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Reviewer comments</div>
                {selected.comments.map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Decision history</div>
                {selected.history.map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button size="sm">Approve</Button>
                <Button size="sm" variant="secondary">
                  Request more info
                </Button>
                <Button size="sm" variant="ghost">
                  Reject
                </Button>
              </div>
            </div>
          </DetailPanel>
        </section>
      </PageContainer>
    </AppShell>
  );
}
