import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { DisclosureCard } from "@/components/ui/disclosure-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const users = [
  ["Nina Patel", "Business owner", "100%", "Healthy"],
  ["Sophie Turner", "Reviewer", "92%", "Watch"],
  ["Ava Mitchell", "Manager", "88%", "Healthy"],
  ["Marcus Lee", "Requester", "54%", "Needs action"],
];

export default function UsersPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Users"
          title="Watch the people who need attention."
          description=""
          actions={<Button>Export roster</Button>}
          meta={
            <>
              <Badge tone="success">36 active</Badge>
              <Badge tone="warning">7 follow-ups</Badge>
            </>
          }
        />

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_380px]">
          <div className="space-y-4 border-t border-white/6 pt-4">
            <div className="space-y-2">
              <Badge className="w-fit">Coverage roster</Badge>
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.03em] text-slate-50">
                Select one person to review.
              </h2>
            </div>

            <FilterBar placeholder="Search name or role" filters={["Role", "Coverage"]} />

            <Table>
              <TableHeader>
                <tr>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Coverage</TableHead>
                  <TableHead>Status</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {users.map((row, index) => (
                  <TableRow key={`${row[0]}-${row[1]}`} data-selected={index === 0}>
                    <TableCell className="font-medium text-slate-100">{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell>
                      <Badge tone={row[3] === "Healthy" ? "success" : row[3] === "Watch" ? "warning" : "danger"}>
                        {row[3]}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DetailPanel
            eyebrow="Selected user"
            title="Nina Patel"
            description=""
            actions={<Badge tone="success">Healthy</Badge>}
          >
            <div className="rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
              Procurement owner with full training and policy coverage.
            </div>

            <div className="grid gap-3">
              {[
                ["Role", "Business owner"],
                ["Workspace", "Supplier review assistant"],
                ["Open item", "One follow-up request"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-100">{value}</div>
                </div>
              ))}
            </div>

            <Button size="sm">Open profile</Button>

            <DisclosureCard title="More coverage">
              <div className="space-y-2">
                {[
                  "Training completion • 100%",
                  "Policies acknowledged • All assigned",
                  "Department • Procurement",
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
