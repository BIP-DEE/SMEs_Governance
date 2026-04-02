import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const inventory = [
  {
    name: "Procurement supplier review assistant",
    owner: "Nina Patel",
    vendor: "OpenAI gateway",
    department: "Procurement",
    risk: "Medium",
    status: "Approved",
  },
  {
    name: "Support transcript summariser",
    owner: "Ava Mitchell",
    vendor: "Anthropic vendor",
    department: "Support",
    risk: "Low",
    status: "Approved",
  },
  {
    name: "Finance invoice review pilot",
    owner: "Marcus Lee",
    vendor: "Azure OpenAI",
    department: "Finance",
    risk: "High",
    status: "In review",
  },
  {
    name: "Sales reply drafting workspace",
    owner: "Emily Chen",
    vendor: "Internal workspace",
    department: "Sales",
    risk: "Medium",
    status: "Monitoring",
  },
];

const selected = {
  name: "Procurement supplier review assistant",
  summary: "Internal supplier-review drafting flow.",
  owner: "Nina Patel",
  vendor: "OpenAI gateway",
  review: "2026-03-04",
  purpose: "Draft supplier review summaries before final manager approval.",
  model: "GPT-4.1",
  dataSensitivity: "Internal supplier data",
  approvalStatus: "Approved with logging and retention controls",
  controls: [
    "Prompt logging enabled",
    "Human review before scoring",
    "Restricted data blocked",
  ],
  evidence: ["Vendor questionnaire", "Prompt log export", "Manager approval note"],
  history: [
    "2026-03-04 • Approved",
    "2026-02-28 • Security follow-up",
    "2026-02-25 • Submitted",
  ],
};

export default function InventoryPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="AI register"
          title="Keep the register simple."
          description=""
          actions={
            <>
              <Button variant="secondary">Export</Button>
              <Button>Add entry</Button>
            </>
          }
          meta={
            <>
              <Badge tone="success">34 approved</Badge>
              <Badge tone="warning">6 in review</Badge>
              <Badge tone="danger">2 high risk</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.34fr)_390px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Register list</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Search and select one record.
              </h2>
            </div>

            <FilterBar
              placeholder="Search tools, owners, or vendors"
              filters={["Risk", "Status", "Department"]}
              chips={[
                { label: "Approved", tone: "success" },
                { label: "Needs review", tone: "warning" },
              ]}
            />

            <Table>
              <TableHeader>
                <tr>
                  <TableHead>Entry</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {inventory.map((item, index) => (
                  <TableRow key={item.name} data-selected={index === 0}>
                    <TableCell>
                      <div className="font-medium text-slate-100">{item.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                        {item.department} • {item.vendor}
                      </div>
                    </TableCell>
                    <TableCell>{item.owner}</TableCell>
                    <TableCell>
                      <Badge
                        tone={
                          item.status === "Approved"
                            ? "success"
                            : item.status === "In review"
                              ? "warning"
                              : "info"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        tone={item.risk === "High" ? "danger" : item.risk === "Medium" ? "warning" : "success"}
                      >
                        {item.risk}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DetailPanel
            eyebrow="Selected entry"
            title={selected.name}
            description=""
            actions={<Badge tone="success">Approved</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              {selected.summary}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Owner", selected.owner],
                ["Vendor", selected.vendor],
                ["Review", selected.review],
                ["Status", "Approved"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
                </div>
              ))}
            </div>

            <Button size="sm">Open full details</Button>

            <DisclosureCard title="View details" badgeLabel="More" badgeTone="info">
              <div className="space-y-2">
                {[
                  `Purpose • ${selected.purpose}`,
                  `Model • ${selected.model}`,
                  `Data scope • ${selected.dataSensitivity}`,
                  `Approval • ${selected.approvalStatus}`,
                  ...selected.controls,
                  ...selected.evidence,
                  ...selected.history,
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
    </AppShell>
  );
}
