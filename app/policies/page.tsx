import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { ProgressBar } from "@/components/ui/progress-bar";

const policies = [
  {
    title: "AI Usage Policy",
    owner: "Legal & Security",
    audience: "All employees",
    status: "Published",
    acknowledgement: 94,
  },
  {
    title: "Sensitive Data Guidance",
    owner: "Security",
    audience: "Finance, HR, Legal",
    status: "Ready",
    acknowledgement: 76,
  },
  {
    title: "Approved Tools Policy",
    owner: "IT",
    audience: "All employees",
    status: "Published",
    acknowledgement: 91,
  },
];

const selected = {
  title: "Sensitive Data Guidance",
  summary: "Prompt boundaries for restricted data.",
  preview: [
    "Keep restricted legal, HR, and finance data out of unapproved workflows.",
    "Use approved internal workspaces for permitted data only.",
  ],
  links: [
    "Linked control • Approved tools registry",
    "Linked training • Data Handling with AI",
    "Acknowledgement • 76% complete",
  ],
};

export default function PoliciesPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Policies"
          title="Publish only the guidance people need now."
          description=""
          actions={<Button>Create policy</Button>}
          meta={
            <>
              <Badge tone="success">4 published</Badge>
              <Badge tone="warning">1 ready</Badge>
              <Badge tone="info">89% acknowledged</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_400px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Policy library</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Select one policy to review.
              </h2>
            </div>

            <FilterBar placeholder="Search title or audience" filters={["Status", "Owner", "Audience"]} />

            <div className="space-y-3">
              {policies.map((policy, index) => (
                <div
                  key={policy.title}
                  className={
                    index === 1
                      ? "surface-focus-admin rounded-[24px] border border-cyan-300/16 px-5 py-5"
                      : "surface-card-soft rounded-[24px] px-5 py-5"
                  }
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-100">{policy.title}</div>
                      <div className="mt-1 text-sm text-slate-400">
                        {policy.owner} • {policy.audience}
                      </div>
                    </div>
                    <Badge tone={policy.status === "Published" ? "success" : "warning"}>{policy.status}</Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                    <span className="text-slate-400">Acknowledgement</span>
                    <span className="font-semibold text-slate-100">{policy.acknowledgement}%</span>
                  </div>
                  <ProgressBar
                    value={policy.acknowledgement}
                    className="mt-3"
                    tone={policy.acknowledgement < 80 ? "warning" : "success"}
                  />
                </div>
              ))}
            </div>
          </div>

          <DetailPanel
            eyebrow="Selected policy"
            title={selected.title}
            description=""
            actions={<Badge tone="warning">Ready</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              {selected.summary}
            </div>

            <Button size="sm">Publish</Button>

            <DisclosureCard title="Policy view" badgeLabel="Preview" badgeTone="info">
              <div className="space-y-2">
                {[...selected.preview, ...selected.links].map((item) => (
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
