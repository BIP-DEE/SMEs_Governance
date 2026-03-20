import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetailPanel } from "@/components/ui/detail-panel";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const inventory = [
  {
    name: "Procurement Supplier Review Assistant",
    type: "Internal workspace",
    vendor: "OpenAI via company gateway",
    useCase: "Supplier review summaries",
    department: "Procurement",
    owner: "Nina Patel",
    risk: "Medium",
    status: "Approved",
    reviewDate: "2026-03-04",
  },
  {
    name: "Support Transcript Summariser",
    type: "Workflow",
    vendor: "Anthropic via approved vendor",
    useCase: "Call summary drafting",
    department: "Support",
    owner: "Ava Mitchell",
    risk: "Low",
    status: "Approved",
    reviewDate: "2026-03-11",
  },
  {
    name: "Finance Invoice Review Pilot",
    type: "Pilot",
    vendor: "Azure OpenAI",
    useCase: "Invoice exception triage",
    department: "Finance",
    owner: "Marcus Lee",
    risk: "High",
    status: "In review",
    reviewDate: "2026-03-15",
  },
  {
    name: "Sales Reply Drafting Workspace",
    type: "Employee workspace",
    vendor: "Internal approved workspace",
    useCase: "Customer response drafting",
    department: "Sales",
    owner: "Emily Chen",
    risk: "Medium",
    status: "Monitoring",
    reviewDate: "2026-02-26",
  },
];

const selected = {
  name: "Procurement Supplier Review Assistant",
  description: "Internal assistant used by procurement managers to summarise supplier questionnaires and identify missing evidence before final review.",
  vendor: "OpenAI via company gateway",
  model: "GPT-4.1",
  purpose: "Speed up supplier review preparation while keeping final decisions with named procurement reviewers.",
  department: "Procurement",
  owner: "Nina Patel",
  riskCategory: "Medium",
  dataSensitivity: "Internal supplier data",
  approvalStatus: "Approved with retention and logging controls",
  reviewHistory: [
    "2026-03-04 • Approved after retention evidence review",
    "2026-02-28 • Security requested prompt logging confirmation",
    "2026-02-25 • Initial request submitted by procurement",
  ],
  controls: [
    "Prompt logging enabled through company gateway",
    "Human review required before supplier scoring",
    "Restricted data categories blocked in workspace policy",
  ],
  evidence: [
    "Vendor questionnaire v2",
    "Prompt logging sample export",
    "Manager approval note",
  ],
};

export default function InventoryPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="AI register"
          title="One clean record of company AI use."
          description="Track tools, models, vendors, owners, and approved business use without turning the register into a spreadsheet wall."
          actions={
            <>
              <Button variant="secondary">Import CSV</Button>
              <Button variant="secondary">Export</Button>
              <Button>Add new entry</Button>
            </>
          }
          meta={
            <>
              <Badge tone="success">34 approved</Badge>
              <Badge tone="warning">6 in review</Badge>
              <Badge tone="danger">2 high-risk items</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_420px]">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-200/70">
              <div className="space-y-2">
                <Badge className="w-fit">Central register</Badge>
                <CardTitle className="text-[1.35rem]">Inventory snapshot</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <FilterBar
                placeholder="Search tools, vendors, owners, or departments"
                filters={["Type", "Department", "Risk", "Status"]}
                chips={[
                  { label: "Approved", tone: "success" },
                  { label: "Needs review", tone: "warning" },
                ]}
              />

              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Use Case</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Review</TableHead>
                    <TableHead>Action</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {inventory.map((item, index) => (
                    <TableRow key={item.name} className={index === 0 ? "bg-blue-50/66" : ""}>
                      <TableCell className="font-medium text-slate-950">{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.vendor}</TableCell>
                      <TableCell>{item.useCase}</TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell>{item.owner}</TableCell>
                      <TableCell>
                        <Badge tone={item.risk === "High" ? "danger" : item.risk === "Medium" ? "warning" : "success"}>
                          {item.risk}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge tone={item.status === "Approved" ? "success" : item.status === "In review" ? "warning" : "info"}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.reviewDate}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <DetailPanel
            eyebrow="Selected entry"
            title={selected.name}
            description="Governance detail for the currently selected register item."
            actions={<Badge tone="success">Approved</Badge>}
          >
            <div className="space-y-4">
              <div className="rounded-[18px] border border-slate-200/70 px-4 py-4 text-sm leading-6 text-slate-700">
                {selected.description}
              </div>

              {[
                ["Vendor", selected.vendor],
                ["Model used", selected.model],
                ["Purpose", selected.purpose],
                ["Department", selected.department],
                ["Business owner", selected.owner],
                ["Risk category", selected.riskCategory],
                ["Data sensitivity", selected.dataSensitivity],
                ["Approval status", selected.approvalStatus],
              ].map(([label, value]) => (
                <div key={label} className="flex items-start justify-between gap-4 rounded-[16px] border border-slate-200/70 px-4 py-3">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="max-w-[220px] text-right text-sm font-medium leading-6 text-slate-900">{value}</div>
                </div>
              ))}

              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Review history</div>
                {selected.reviewHistory.map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Linked controls</div>
                {selected.controls.map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Evidence and logs</div>
                {selected.evidence.map((item) => (
                  <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </DetailPanel>
        </section>
      </PageContainer>
    </AppShell>
  );
}
