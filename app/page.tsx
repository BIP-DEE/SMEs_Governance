import Link from "next/link";
import { ProductBrand } from "@/components/brand/product-brand";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    label: "Register",
    title: "Keep one record of AI tools, vendors, owners, and approved use.",
    detail: "Inventory, approval status, linked controls, and review dates stay connected.",
  },
  {
    label: "Guide",
    title: "Turn policy and training into part of the workflow, not a side archive.",
    detail: "Employees see approved paths first, and admins can roll out guidance without clutter.",
  },
  {
    label: "Evidence",
    title: "Monitor activity and export decision history when leadership asks.",
    detail: "Oversight, audit logs, and reporting live in the same system as approvals.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Register a use case",
    detail: "Capture the owner, department, vendor, and intended use before adoption spreads.",
    href: "/inventory",
  },
  {
    step: "02",
    title: "Review and define controls",
    detail: "Assess risk, request missing evidence, and keep approval decisions visible.",
    href: "/requests",
  },
  {
    step: "03",
    title: "Enable the business safely",
    detail: "Roll out policy, training, and approved workspace access without creating noise.",
    href: "/policies",
  },
  {
    step: "04",
    title: "Observe and report",
    detail: "Track usage, investigate signals, and export evidence from one place.",
    href: "/reports",
  },
];

const rolePanels = [
  {
    title: "Admin control center",
    summary: "Designed for governance owners who need a clear operational path from review to evidence.",
    items: ["Priority queue and posture", "Inventory, requests, policy, monitoring", "Audit-ready exports"],
    href: "/dashboard",
    action: "Open admin preview",
    icon: "dashboard" as const,
  },
  {
    title: "Employee workspace",
    summary: "A calmer route for internal users who need approved AI access, requests, and short guidance.",
    items: ["Company-approved AI workspace", "Requests, training, and policies", "Less noise, more guidance"],
    href: "/employee",
    action: "Open employee preview",
    icon: "workspace" as const,
  },
];

const linkClass =
  "rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-[rgba(228,242,255,0.86)] hover:text-slate-950 active:translate-y-px";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="surface-topbar mx-auto flex max-w-[1440px] items-center justify-between rounded-[26px] px-4 py-3 sm:px-5">
          <Link href="/" className="min-w-0">
            <ProductBrand />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            <a href="#platform" className={linkClass}>
              Platform
            </a>
            <a href="#workflow" className={linkClass}>
              Workflow
            </a>
            <a href="#roles" className={linkClass}>
              Roles
            </a>
            <a href="#contact" className={linkClass}>
              Contact
            </a>
          </nav>
          <Button href="/demo">Start session</Button>
        </div>
      </header>

      <main className="pb-24">
        <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10">
          <div className="mx-auto grid max-w-[1440px] gap-8 xl:grid-cols-[minmax(0,1fr)_540px] xl:items-center">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="info">AI governance for SMEs</Badge>
                <Badge>Structured, calm, operational</Badge>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl text-balance text-[3.25rem] font-semibold tracking-[-0.08em] text-slate-950 sm:text-[4.5rem]">
                  Govern <span className="bg-[linear-gradient(135deg,#1d4ed8,#0f8fb8_56%,#0f766e)] bg-clip-text text-transparent">company AI</span> without turning the product into a compliance maze.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-[1.1rem]">
                  Sentryn gives teams one place to register AI use, review requests, guide
                  employees, monitor activity, and keep evidence ready when questions come.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button size="lg" href="/demo">
                  Enter workspace
                  <AppIcon name="arrow-right" className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="secondary" href="#workflow">
                  See the flow
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["42", "tracked systems"],
                  ["8", "active approvals"],
                  ["94%", "evidence coverage"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="surface-card-soft interactive-card rounded-[22px] px-4 py-4"
                  >
                    <div className="text-[1.7rem] font-semibold tracking-[-0.05em] text-slate-950">
                      {value}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-dark overflow-hidden rounded-[40px] p-5 text-white">
              <div className="space-y-4">
                <div className="interactive-card-dark rounded-[28px] border border-white/10 bg-white/7 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="panel-dark-kicker text-[11px] font-semibold uppercase tracking-[0.2em]">
                        Admin focus
                      </div>
                      <div className="mt-1 text-xl font-semibold tracking-[-0.04em] text-white">
                        Today’s governance view
                      </div>
                    </div>
                    <Badge className="border-white/10 bg-white/10 text-white">Overview</Badge>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      ["3", "Priority reviews"],
                      ["2", "Rollouts ready"],
                      ["1", "Signal to investigate"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="interactive-card-dark rounded-[20px] border border-white/10 bg-white/7 p-4"
                      >
                        <div className="text-[1.75rem] font-semibold tracking-[-0.05em] text-white">
                          {value}
                        </div>
                        <div className="panel-dark-muted mt-1 text-sm">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] px-4 py-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/74">
                      What this product solves
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/88">
                      Instead of separate sheets, guidance docs, and approval notes, teams move through one governance path with one system of record.
                    </div>
                  </div>
                  {[
                    [
                      "Employee route",
                      "Open the approved workspace first, then reveal requests, training, and policy only when needed.",
                    ],
                    [
                      "Evidence route",
                      "Approval, policy, monitoring, and reporting stay connected so export is easy later.",
                    ],
                  ].map(([title, detail]) => (
                    <div
                      key={title}
                      className="interactive-card-dark flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/6 px-4 py-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-[16px] border border-white/10 bg-white/8 text-cyan-100">
                        <AppIcon name="spark" className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{title}</div>
                        <div className="panel-dark-soft mt-1 text-sm leading-6">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1440px] space-y-8">
            <div className="max-w-2xl space-y-3">
              <Badge>Platform structure</Badge>
              <h2 className="text-balance text-[2.35rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.9rem]">
                Rich enough for real governance, organised enough to scan quickly.
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                The product keeps only the important layer visible first. Everything else is part
                of a guided flow instead of competing on screen at the same time.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {capabilities.map((item, index) => (
                <Card
                  key={item.title}
                  className={`interactive-card ${index === 0 ? "surface-card-strong" : "surface-card-soft"}`}
                >
                  <CardHeader className="space-y-3">
                    <Badge className="w-fit">{item.label}</Badge>
                    <div className="space-y-2">
                      <CardTitle>{item.title}</CardTitle>
                      <p className="text-sm leading-6 text-slate-500">{item.detail}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="surface-card-strong mx-auto grid max-w-[1440px] gap-8 rounded-[36px] px-6 py-7 sm:px-8 xl:grid-cols-[380px_minmax(0,1fr)]">
            <div className="space-y-3">
              <Badge tone="info">Product flow</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-slate-950">
                Organize the work in one visible sequence.
              </h2>
              <p className="text-base leading-7 text-slate-600">
                The workflow is designed to move teams from AI discovery through approval and into
                monitoring without making them hunt through the product.
              </p>
            </div>

            <div className="grid gap-4">
              {workflow.map((item) => (
                <Link
                  key={item.step}
                  href={item.href}
                  className="surface-card-soft interactive-card grid gap-4 rounded-[24px] px-5 py-5 md:grid-cols-[72px_minmax(0,1fr)_auto] md:items-center"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Step {item.step}
                  </div>
                  <div>
                    <div className="text-base font-semibold tracking-[-0.02em] text-slate-950">
                      {item.title}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-500">{item.detail}</div>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Open</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="roles" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1440px] space-y-7">
            <div className="max-w-2xl space-y-3">
              <Badge tone="success">Role-based experience</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-slate-950">
                Two routes, one product language.
              </h2>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {rolePanels.map((panel) => (
                <Card key={panel.title} className="interactive-card surface-card-soft overflow-hidden">
                  <CardHeader className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[20px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(235,246,255,0.8))] text-slate-900 shadow-[0_10px_24px_rgba(28,65,118,0.08)]">
                        <AppIcon name={panel.icon} className="h-5 w-5" />
                      </div>
                      <Badge>{panel.icon === "dashboard" ? "Admin" : "Employee"}</Badge>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-[1.45rem]">{panel.title}</CardTitle>
                      <p className="text-sm leading-6 text-slate-500">{panel.summary}</p>
                    </div>
                    <div className="space-y-2.5">
                      {panel.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                          <div className="flex h-8 w-8 items-center justify-center rounded-[12px] border border-slate-200/80 bg-white/78 text-sky-700">
                            <AppIcon name="spark" className="h-4 w-4" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button href={panel.href} variant="secondary">
                      {panel.action}
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pt-4 sm:px-6 lg:px-8">
          <div className="surface-card-strong mx-auto grid max-w-[1440px] gap-6 rounded-[34px] px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-3">
              <Badge tone="success">Guided preview</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-slate-950">
                Start with a structured session instead of jumping into a crowded dashboard.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/demo">Start session</Button>
              <Button variant="secondary" href="/dashboard">
                Admin preview
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
