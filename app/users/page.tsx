import { AppShell } from "@/components/layout/app-shell";
import { PageContainer, PageHeader } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DetailPanel } from "@/components/ui/detail-panel";
import { FilterBar } from "@/components/ui/filter-bar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const users = [
  ["Nina Patel", "Procurement", "Business owner", "Active AI user", "100%", "Healthy"],
  ["Sophie Turner", "Legal", "Reviewer", "Monitoring follow-up", "92%", "Watch"],
  ["Ava Mitchell", "Support", "Manager", "Approved workspace user", "88%", "Healthy"],
  ["Marcus Lee", "Finance", "Requester", "Pilot request owner", "54%", "Needs action"],
];

export default function UsersPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Users"
          title="See the people behind AI ownership, review, and coverage."
          description="Keep the governance program tied to named owners, reviewers, and employee enablement instead of anonymous system activity."
          actions={
            <>
              <Button variant="secondary">Invite user</Button>
              <Button>Export roster</Button>
            </>
          }
          meta={
            <>
              <Badge>184 employees</Badge>
              <Badge tone="success">36 active AI users</Badge>
              <Badge tone="warning">7 need follow-up</Badge>
            </>
          }
        />

        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_400px]">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-slate-200/70">
              <div className="space-y-2">
                <Badge className="w-fit">Coverage roster</Badge>
                <CardTitle className="text-[1.35rem]">Users and governance coverage</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-5">
              <FilterBar
                placeholder="Search by name, department, role, or workspace"
                filters={["Department", "Role", "Coverage"]}
              />

              <Table>
                <TableHeader>
                  <tr>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Workspace</TableHead>
                    <TableHead>Coverage</TableHead>
                    <TableHead>Status</TableHead>
                  </tr>
                </TableHeader>
                <TableBody>
                  {users.map((row, index) => (
                    <TableRow key={`${row[0]}-${row[1]}`} className={index === 0 ? "bg-blue-50/66" : ""}>
                      <TableCell className="font-medium text-slate-950">{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>{row[2]}</TableCell>
                      <TableCell>{row[3]}</TableCell>
                      <TableCell>{row[4]}</TableCell>
                      <TableCell>
                        <Badge tone={row[5] === "Healthy" ? "success" : row[5] === "Watch" ? "warning" : "danger"}>
                          {row[5]}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <DetailPanel
            eyebrow="Selected user"
            title="Nina Patel"
            description="Business owner for procurement AI workflows and active reviewer on related requests."
            actions={<Badge tone="success">Healthy</Badge>}
          >
            <div className="space-y-4">
              {[
                ["Department", "Procurement"],
                ["Primary role", "Business owner"],
                ["Active workspace", "Supplier review assistant"],
                ["Training completion", "100%"],
                ["Policies acknowledged", "All assigned"],
                ["Open actions", "One follow-up request"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-[16px] border border-slate-200/70 px-4 py-3">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="text-sm font-medium text-slate-900">{value}</div>
                </div>
              ))}
            </div>
          </DetailPanel>
        </section>
      </PageContainer>
    </AppShell>
  );
}
