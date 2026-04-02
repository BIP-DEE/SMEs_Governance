import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Settings"
          title="Keep defaults calm and controlled."
          description=""
          actions={
            <>
              <Button variant="secondary">Reset</Button>
              <Button>Save settings</Button>
            </>
          }
          meta={
            <>
              <Badge tone="success">Defaults active</Badge>
              <Badge tone="info">Dark workspace</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6 border-t border-white/6 pt-4">
            <section className="space-y-4">
              <div className="space-y-2">
                <Badge className="w-fit">Workspace</Badge>
                <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                  Identity
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Company name</label>
                  <Input defaultValue="Northstar Manufacturing" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">Workspace label</label>
                  <Input defaultValue="Governance control center" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-200">Primary contact</label>
                  <Input defaultValue="nina.patel@northstar.example" />
                </div>
              </div>
            </section>

            <section className="space-y-4 border-t border-white/6 pt-5">
              <div className="space-y-2">
                <Badge className="w-fit">Retention</Badge>
                <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                  Evidence defaults
                </h2>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  ["Prompt logs", "180 days"],
                  ["Decision history", "24 months"],
                  ["Monthly pack", "Enabled"],
                  ["Monitoring export", "Weekly"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {label}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 border-t border-white/6 pt-5">
              <div className="space-y-2">
                <Badge className="w-fit">Alerts</Badge>
                <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                  Routing
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Flagged events go to security and the owner.",
                  "Policy updates go to affected employees.",
                  "Overdue training goes to employee and manager.",
                ].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-[104px]">
            <div className="space-y-4 border-t border-white/6 pt-4">
              <div className="space-y-2">
                <Badge tone="success" className="w-fit">
                  Save
                </Badge>
                <h2 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-slate-50">
                  Current defaults are healthy.
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  "Evidence retention is aligned.",
                  "High-risk reviews still require named sign-off.",
                  "Alert routing is already grouped by acting teams.",
                ].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>

              <Button>Save settings</Button>
            </div>
          </aside>
        </section>
      </PageContainer>
    </AppShell>
  );
}
