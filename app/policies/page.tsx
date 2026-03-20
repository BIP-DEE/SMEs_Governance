import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { ProgressBar } from "@/components/ui/progress-bar";

const policies = [
  {
    title: "AI Usage Policy",
    summary: "Core rules for approved AI use, review expectations, and accountability.",
    owner: "Legal & Security",
    audience: "All employees",
    status: "Published",
    updated: "2026-03-10",
    acknowledgement: 94,
  },
  {
    title: "Sensitive Data Guidance",
    summary: "Rules for restricted data types, prompt boundaries, and approved workflows.",
    owner: "Security",
    audience: "Finance, HR, Legal",
    status: "Ready to publish",
    updated: "2026-03-14",
    acknowledgement: 76,
  },
  {
    title: "Approved Tools Policy",
    summary: "Defines which tools and workspaces can be used without separate approval.",
    owner: "IT",
    audience: "All employees",
    status: "Published",
    updated: "2026-02-28",
    acknowledgement: 91,
  },
  {
    title: "Human Review Requirements",
    summary: "Lists workflows where human review must happen before action or external sharing.",
    owner: "Risk",
    audience: "Managers and approvers",
    status: "Draft",
    updated: "2026-03-17",
    acknowledgement: 0,
  },
  {
    title: "External Sharing Rules",
    summary: "Sets boundaries for outputs that leave the company or influence customers.",
    owner: "Legal",
    audience: "Sales, Support, Marketing",
    status: "Published",
    updated: "2026-03-07",
    acknowledgement: 88,
  },
];

const selected = {
  title: "AI Usage Policy",
  summary: "The core company policy that sets approved AI behavior, review expectations, and escalation paths.",
  preview:
    "Employees may use only approved AI tools or company workspaces for internal productivity tasks. Outputs must be reviewed before they are relied on in a material business decision, shared externally, or used with restricted data. Unusual workflows must go through the request process before use.",
  controls: [
    "Approved tools registry",
    "Prompt logging for company workspaces",
    "Human review for material decisions",
  ],
  training: [
    "Introduction to company AI rules",
    "Safe AI usage basics",
  ],
  acknowledgements: [
    "All employees • 94% complete",
    "Finance • 100% complete",
    "Support • 91% complete",
  ],
};

export default function PoliciesPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Policies"
          title="Make governance practical, readable, and connected to action."
          description="Policies work better when they stay short, track acknowledgement clearly, and link directly to controls, training, and approved use."
          actions={
            <>
              <Button variant="secondary">View acknowledgements</Button>
              <Button>Create policy</Button>
            </>
          }
          meta={
            <>
              <Badge tone="success">Published 4</Badge>
              <Badge tone="warning">Ready to publish 1</Badge>
              <Badge tone="info">Ack rate 89%</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_430px]">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-200/70">
              <div className="space-y-2">
                <Badge className="w-fit">Policy library</Badge>
                <CardTitle className="text-[1.35rem]">Current governance guidance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <FilterBar
                placeholder="Search policy titles, owners, or audiences"
                filters={["Status", "Owner", "Audience"]}
              />

              <div className="grid gap-3">
                {policies.map((policy, index) => (
                  <div
                    key={policy.title}
                    className={`rounded-[22px] border px-5 py-5 ${
                      index === 0 ? "border-blue-200/90 bg-blue-50/72" : "border-slate-200/70 bg-white/56"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-base font-semibold tracking-[-0.02em] text-slate-950">{policy.title}</div>
                        <div className="text-sm leading-6 text-slate-500">{policy.summary}</div>
                      </div>
                      <Badge
                        tone={
                          policy.status === "Published"
                            ? "success"
                            : policy.status === "Draft"
                              ? "neutral"
                              : "warning"
                        }
                      >
                        {policy.status}
                      </Badge>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Owner</div>
                        <div className="mt-1 text-sm text-slate-700">{policy.owner}</div>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Audience</div>
                        <div className="mt-1 text-sm text-slate-700">{policy.audience}</div>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Updated</div>
                        <div className="mt-1 text-sm text-slate-700">{policy.updated}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                        <span className="text-slate-500">Acknowledgement</span>
                        <span className="font-medium text-slate-700">{policy.acknowledgement}%</span>
                      </div>
                      <ProgressBar value={policy.acknowledgement} tone={policy.acknowledgement < 80 ? "warning" : "success"} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <DetailPanel
            eyebrow="Selected policy"
            title={selected.title}
            description={selected.summary}
            actions={<Badge tone="success">Published</Badge>}
          >
            <div className="space-y-4">
              <div className="rounded-[18px] border border-slate-200/70 px-4 py-4 text-sm leading-7 text-slate-700">
                {selected.preview}
              </div>

              <DisclosureCard
                title="Full content preview"
                summary="Shortened preview of the policy body as it appears to employees."
                badgeLabel="Preview"
                badgeTone="info"
                defaultOpen
              >
                <div className="space-y-3 text-sm leading-7 text-slate-700">
                  <p>Use only approved AI tools and company workspaces for internal productivity tasks.</p>
                  <p>Review outputs before using them in material decisions, external communication, or sensitive workflows.</p>
                  <p>Escalate unusual use cases through the request process before continuing.</p>
                </div>
              </DisclosureCard>

              <DisclosureCard title="Linked controls" summary="Controls and system requirements tied to this policy." badgeLabel="3 controls">
                <div className="space-y-2">
                  {selected.controls.map((item) => (
                    <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </DisclosureCard>

              <DisclosureCard title="Linked training" summary="Training modules used to reinforce policy understanding." badgeLabel="2 modules">
                <div className="space-y-2">
                  {selected.training.map((item) => (
                    <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </DisclosureCard>

              <DisclosureCard
                title="Acknowledgement tracking"
                summary="Completion status for the main audiences tied to this policy."
                badgeLabel="94%"
                badgeTone="success"
              >
                <div className="space-y-2">
                  {selected.acknowledgements.map((item) => (
                    <div key={item} className="rounded-[16px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </DisclosureCard>

              <div className="flex flex-wrap gap-2">
                <Button size="sm">Publish</Button>
                <Button size="sm" variant="secondary">
                  Edit policy
                </Button>
                <Button size="sm" variant="ghost">
                  Archive
                </Button>
              </div>
            </div>
          </DetailPanel>
        </section>
      </PageContainer>
    </AppShell>
  );
}
