import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Settings"
          title="Configure the governance workspace without exposing unnecessary complexity."
          description="Set the company profile, evidence retention, approval rules, and alert defaults that shape how the platform operates."
          actions={
            <>
              <Button variant="secondary">Reset changes</Button>
              <Button>Save settings</Button>
            </>
          }
          meta={
            <>
              <Badge tone="success">Defaults active</Badge>
              <Badge tone="info">Single premium theme</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Workspace profile</Badge>
              <CardTitle>Company and governance identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Company name</label>
                <Input defaultValue="Northstar Manufacturing" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Workspace label</label>
                <Input defaultValue="Governance control center" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Primary governance contact</label>
                <Input defaultValue="nina.patel@northstar.example" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-2">
              <Badge className="w-fit">Evidence retention</Badge>
              <CardTitle>Logging and export defaults</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                ["Prompt log retention", "180 days"],
                ["Decision history retention", "24 months"],
                ["Monthly report pack", "Enabled"],
                ["Monitoring export cadence", "Weekly"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-[18px] border border-slate-200/70 px-4 py-3">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="text-sm font-medium text-slate-900">{value}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-2">
              <Badge tone="warning" className="w-fit">
                Approval defaults
              </Badge>
              <CardTitle>Rules for new AI adoption</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "High-risk requests always require security and legal review.",
                "New vendors need questionnaire evidence before approval.",
                "Employee workspaces cannot use restricted data categories by default.",
              ].map((item) => (
                <div key={item} className="rounded-[18px] border border-slate-200/70 px-4 py-3 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-2">
              <Badge tone="info" className="w-fit">
                Alerts
              </Badge>
              <CardTitle>Who gets notified and when</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                ["Flagged monitoring events", "Security team + business owner"],
                ["Policy publication", "All impacted employees"],
                ["Overdue training", "Employee + manager"],
                ["Evidence pack generated", "Governance admins"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-slate-200/70 px-4 py-3">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="mt-1 text-sm font-medium text-slate-900">{value}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </PageContainer>
    </AppShell>
  );
}
