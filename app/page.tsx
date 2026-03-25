import Link from "next/link";
import { ProductBrand } from "@/components/brand/product-brand";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    label: "Register",
    title: "Keep one governed register of AI tools, vendors, owners, and approved use.",
    detail: "The record stays connected to approval status, controls, and review dates.",
    accent: "System of record",
  },
  {
    label: "Guide",
    title: "Turn policy and training into the operating path instead of a side archive.",
    detail: "Employees see approved routes first, while admins roll out guidance without noise.",
    accent: "Operational guidance",
  },
  {
    label: "Evidence",
    title: "Carry activity, decisions, and review history through to export.",
    detail: "Monitoring and reporting stay tied to the same workflow that approved the use case.",
    accent: "Audit ready",
  },
];

const flow = [
  {
    step: "Register",
    detail: "Log the tool, owner, vendor, and use case.",
    meta: "6 new",
    href: "/inventory",
  },
  {
    step: "Review",
    detail: "Assess risk and request missing evidence.",
    meta: "8 active",
    href: "/requests",
  },
  {
    step: "Enable",
    detail: "Publish policy, training, and approved routes.",
    meta: "2 ready",
    href: "/policies",
  },
  {
    step: "Monitor",
    detail: "Surface unusual activity and investigate quickly.",
    meta: "1 flagged",
    href: "/monitoring",
  },
  {
    step: "Report",
    detail: "Export evidence and decision history when needed.",
    meta: "Weekly export",
    href: "/reports",
  },
];

const roleRoutes = [
  {
    title: "Admin control center",
    detail: "Run review, rollout, monitoring, and evidence from one structured workspace.",
    href: "/dashboard",
    action: "Preview admin",
    icon: "dashboard" as const,
  },
  {
    title: "Employee workspace",
    detail: "Start with approved AI use, then reveal requests, training, and guidance only when needed.",
    href: "/employee",
    action: "Preview employee",
    icon: "workspace" as const,
  },
];

const heroNodes = [
  {
    title: "Register",
    meta: "6 new",
    href: "/inventory",
    className: "left-3 top-5 sm:left-6 sm:top-8 lg:left-4 lg:top-8 animate-float-slow",
  },
  {
    title: "Review",
    meta: "8 active",
    href: "/requests",
    className: "right-4 top-8 sm:right-10 sm:top-14 lg:right-6 lg:top-10 animate-float-medium",
  },
  {
    title: "Enable",
    meta: "2 ready",
    href: "/policies",
    className: "left-8 bottom-16 sm:left-14 sm:bottom-20 lg:left-6 lg:bottom-18 animate-float-delay",
  },
  {
    title: "Monitor",
    meta: "1 flagged",
    href: "/monitoring",
    className: "right-6 bottom-24 sm:right-12 sm:bottom-28 lg:right-5 lg:bottom-24 animate-float-slow",
  },
  {
    title: "Report",
    meta: "Export",
    href: "/reports",
    className: "right-[28%] bottom-4 sm:right-[30%] sm:bottom-8 lg:right-[32%] lg:bottom-5 animate-float-medium",
  },
];

const proofStrip = [
  ["42", "tracked systems"],
  ["8", "active approvals"],
  ["94%", "evidence coverage"],
];

const navLinkClass =
  "rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-[rgba(209,231,249,0.88)] hover:text-slate-950 active:translate-y-px";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="surface-topbar mx-auto flex max-w-[1440px] items-center justify-between rounded-[26px] px-4 py-3 sm:px-5">
          <Link href="/" className="min-w-0">
            <ProductBrand />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            <a href="#platform" className={navLinkClass}>
              Platform
            </a>
            <a href="#workflow" className={navLinkClass}>
              Workflow
            </a>
            <a href="#routes" className={navLinkClass}>
              Routes
            </a>
          </nav>
          <Button href="/demo">Start session</Button>
        </div>
      </header>

      <main className="pb-24">
        <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10">
          <div className="landing-hero-shell mx-auto max-w-[1440px] overflow-hidden rounded-[42px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center">
              <div className="animate-rise-in max-w-[660px] space-y-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="info">AI governance for SMEs</Badge>
                  <Badge>Structured, calm, operational</Badge>
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-4xl text-balance text-[3.15rem] font-semibold tracking-[-0.085em] text-slate-950 sm:text-[4.55rem]">
                    Bring company AI into one governed{" "}
                    <span className="bg-[linear-gradient(135deg,#1e40af,#0d7490_58%,#0f766e)] bg-clip-text text-transparent">
                      operating system
                    </span>
                    .
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-[1.1rem]">
                    Sentryn gives SMEs one place to register AI use, review risk, guide employees,
                    monitor activity, and keep evidence ready without spreading governance across sheets, inboxes, and static docs.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg" href="/demo">
                    Start session
                    <AppIcon name="arrow-right" className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="secondary" href="#workflow">
                    View workflow
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {proofStrip.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-full border border-[#a6cde0]/95 bg-[linear-gradient(180deg,rgba(249,253,255,0.96),rgba(232,244,250,0.86))] px-4 py-2.5 shadow-[0_14px_30px_rgba(19,62,116,0.08)]"
                    >
                      <span className="text-sm font-semibold tracking-[-0.02em] text-slate-950">{value}</span>
                      <span className="ml-2 text-sm text-slate-600">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-rise-in relative h-[420px] sm:h-[480px] lg:h-[520px]">
                <div className="landing-visual-shell absolute inset-0 overflow-hidden rounded-[34px] p-4 sm:p-5">
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:38px_38px]" />
                  <div className="animate-pulse-ring absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/14" />
                  <div className="animate-drift absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/16" />
                  <div className="absolute left-1/2 top-1/2 h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(165,243,252,0.42),rgba(37,99,235,0.22),transparent_72%)]" />

                  <div className="landing-visual-card absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] px-5 py-5 text-white shadow-[0_26px_52px_rgba(8,25,48,0.24)] sm:w-[310px]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="panel-dark-kicker text-[11px] font-semibold uppercase tracking-[0.2em]">
                          Governance graph
                        </div>
                        <div className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
                          Live program state
                        </div>
                      </div>
                      <div className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                        Central view
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        ["Approvals moving", "8 active"],
                        ["Policy rollout", "2 ready"],
                        ["Signal review", "1 flagged"],
                      ].map(([label, value], index) => (
                        <div key={label} className="landing-visual-card rounded-[18px] px-4 py-3">
                          <div className="flex items-center justify-between gap-3">
                            <div className="text-sm font-medium text-white/88">{label}</div>
                            <div className="text-sm font-semibold text-white">{value}</div>
                          </div>
                          <div className="mt-2 h-1.5 rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-[linear-gradient(90deg,#60a5fa,#22d3ee,#2dd4bf)]"
                              style={{ width: `${[74, 58, 28][index]}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {heroNodes.map((node) => (
                    <Link
                      key={node.title}
                      href={node.href}
                      className={`landing-visual-card interactive-card-dark absolute rounded-[20px] px-4 py-3 text-white ${node.className}`}
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/84">
                        {node.title}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white">{node.meta}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-6 xl:grid-cols-[340px_minmax(0,1fr)] xl:items-start">
            <div className="space-y-3">
              <Badge>Platform</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.65rem]">
                Three connected jobs, one product spine.
              </h2>
              <p className="text-base leading-7 text-slate-600">
                The platform keeps governance visible without turning the website into a wall of explanation.
              </p>
            </div>

            <div className="surface-card overflow-hidden rounded-[34px]">
              <div className="divide-y divide-[#c7dfeb]/80">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.label}
                    className="grid gap-4 px-6 py-5 sm:grid-cols-[132px_minmax(0,1fr)_auto] sm:items-start sm:px-7"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {pillar.label}
                    </div>
                    <div>
                      <div className="text-[1.08rem] font-semibold tracking-[-0.03em] text-slate-950">
                        {pillar.title}
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{pillar.detail}</p>
                    </div>
                    <div className="text-sm font-medium text-sky-900 sm:justify-self-end">{pillar.accent}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="surface-dark mx-auto max-w-[1440px] rounded-[36px] px-6 py-7 sm:px-8">
            <div className="max-w-2xl space-y-3">
              <Badge className="border-white/10 bg-white/10 text-white">Workflow</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.55rem]">
                Register, review, enable, monitor, report.
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/80">
                The product mirrors the governance sequence teams already need to run.
              </p>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-5">
              {flow.map((item, index) => (
                <Link
                  key={item.step}
                  href={item.href}
                  className="landing-visual-card interactive-card-dark rounded-[24px] px-4 py-4 text-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/78">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/72">
                      {item.meta}
                    </div>
                  </div>
                  <div className="mt-3 text-base font-semibold tracking-[-0.02em] text-white">{item.step}</div>
                  <div className="mt-2 text-sm leading-6 text-white/78">{item.detail}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="routes" className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-6 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
            <div className="space-y-3">
              <Badge tone="success">Routes</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.55rem]">
                Admin and employee views, shaped for different work.
              </h2>
              <p className="text-base leading-7 text-slate-600">
                Both routes share the same product language, but they do not ask users to carry the same cognitive load.
              </p>
            </div>

            <div className="surface-card-strong overflow-hidden rounded-[34px]">
              <div className="grid divide-y divide-[#c7dfeb]/80 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                {roleRoutes.map((route, index) => (
                  <div key={route.title} className="px-6 py-6 sm:px-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-[#b7d4e3]/90 bg-[linear-gradient(180deg,rgba(251,254,255,0.96),rgba(232,244,250,0.88))] text-slate-900 shadow-[0_12px_28px_rgba(28,65,118,0.08)]">
                        <AppIcon name={route.icon} className="h-5 w-5" />
                      </div>
                      <Badge tone={index === 0 ? "info" : "success"}>{index === 0 ? "Admin" : "Employee"}</Badge>
                    </div>
                    <div className="mt-5 text-[1.2rem] font-semibold tracking-[-0.03em] text-slate-950">
                      {route.title}
                    </div>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">{route.detail}</p>
                    <Link
                      href={route.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-900 transition hover:text-slate-950"
                    >
                      {route.action}
                      <AppIcon name="arrow-right" className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-6 sm:px-6 lg:px-8">
          <div className="surface-card-strong mx-auto grid max-w-[1440px] gap-5 rounded-[34px] px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-3">
              <Badge tone="success">Guided preview</Badge>
              <h2 className="max-w-2xl text-balance text-[2rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.3rem]">
                Start with the product flow already in context.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/demo">Start session</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
