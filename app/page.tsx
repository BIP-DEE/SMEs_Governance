import Link from "next/link";
import { ProductBrand } from "@/components/brand/product-brand";
import { AppIcon } from "@/components/ui/app-icon";

const pillars = [
  {
    label: "Register",
    title: "AI inventory",
    detail: "Track tools, vendors, owners, and review dates in one controlled register.",
    icon: "inventory" as const,
  },
  {
    label: "Control",
    title: "Approvals and guidance",
    detail: "Route requests through review, policy, and training before wider rollout.",
    icon: "requests" as const,
  },
  {
    label: "Evidence",
    title: "Monitoring and reports",
    detail: "Keep activity, decisions, and exported evidence connected from day one.",
    icon: "reports" as const,
  },
];

const workflow = [
  {
    step: "Register",
    detail: "Capture tools, owners, and intended use.",
    href: "/inventory",
  },
  {
    step: "Review",
    detail: "Assess risk, controls, and evidence needs.",
    href: "/requests",
  },
  {
    step: "Enable",
    detail: "Roll out policy, training, and approval.",
    href: "/policies",
  },
  {
    step: "Monitor",
    detail: "Track live usage and investigate flags.",
    href: "/monitoring",
  },
  {
    step: "Report",
    detail: "Export evidence and decision history.",
    href: "/reports",
  },
];

const routes = [
  {
    title: "Admin control center",
    detail: "Run inventory, approvals, monitoring, and audit reporting from one operating view.",
    href: "/dashboard",
    icon: "dashboard" as const,
  },
  {
    title: "Employee workspace",
    detail: "Start from approved AI use, then open requests, training, and guidance only when needed.",
    href: "/employee",
    icon: "workspace" as const,
  },
];

const proofPoints = [
  { value: "42", label: "tracked systems" },
  { value: "8", label: "active reviews" },
  { value: "94%", label: "evidence coverage" },
];

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Roles", href: "#roles" },
  { label: "Demo", href: "/demo" },
];

export default function LandingPage() {
  return (
    <div className="landing-home-shell min-h-screen text-white">
      <header className="sticky top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="landing-home-topbar mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-[24px] px-4 py-3 sm:px-5">
          <Link href="/" className="min-w-0">
            <ProductBrand context="sidebar" compact />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.label} href={item.href} className="landing-home-navlink">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="landing-home-navlink">
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/demo" className="landing-home-link hidden sm:inline-flex">
              Customer login
            </Link>
            <Link href="/demo" className="landing-home-cta">
              Start demo
            </Link>
          </div>
        </div>
      </header>

      <main className="pb-20">
        <section className="px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-14">
              <div className="animate-rise-in max-w-[560px] space-y-8">
                <div className="space-y-5">
                  <div className="landing-home-kicker">AI governance for SMEs</div>
                  <h1 className="text-balance text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.085em] text-white sm:text-[4.9rem]">
                    Govern AI use without the operational sprawl.
                  </h1>
                  <p className="max-w-[520px] text-[1.04rem] leading-8 text-white/72">
                    Sentryn gives growing companies one control layer for AI inventory,
                    approvals, guidance, monitoring, and audit evidence.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/demo" className="landing-home-hero-cta">
                    Start session
                  </Link>
                  <a href="#workflow" className="landing-home-hero-secondary">
                    Explore workflow
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {proofPoints.map((item) => (
                    <div key={item.label} className="landing-home-proof">
                      <div className="text-[1.35rem] font-semibold tracking-[-0.05em] text-white">
                        {item.value}
                      </div>
                      <div className="text-sm text-white/62">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-rise-in relative h-[420px] sm:h-[500px]">
                <div className="landing-home-preview absolute inset-0">
                  <div className="landing-home-preview-glow" />
                  <div className="landing-home-preview-grid" />

                  <div className="landing-home-preview-chip left-6 top-6">
                    <span className="landing-home-chip-label">Program live</span>
                    <span className="landing-home-chip-value">8 reviews open</span>
                  </div>

                  <div className="landing-home-preview-chip right-6 top-10">
                    <span className="landing-home-chip-label">Evidence</span>
                    <span className="landing-home-chip-value">94% coverage</span>
                  </div>

                  <div className="landing-home-preview-core">
                    <div className="landing-home-core-kicker">Governance control layer</div>
                    <div className="landing-home-core-title">One operating path</div>
                    <div className="landing-home-core-copy">
                      Inventory, approvals, policy, monitoring, and reporting stay connected.
                    </div>
                  </div>

                  <div className="landing-home-preview-card left-8 bottom-10">
                    <div className="flex items-center gap-3">
                      <div className="landing-home-icon-wrap">
                        <AppIcon name="inventory" className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="landing-home-mini-title">Inventory</div>
                        <div className="landing-home-mini-copy">42 systems tracked</div>
                      </div>
                    </div>
                  </div>

                  <div className="landing-home-preview-card right-10 bottom-28">
                    <div className="flex items-center gap-3">
                      <div className="landing-home-icon-wrap">
                        <AppIcon name="requests" className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="landing-home-mini-title">Review lane</div>
                        <div className="landing-home-mini-copy">Risk + evidence checks</div>
                      </div>
                    </div>
                  </div>

                  <div className="landing-home-preview-card right-16 bottom-8">
                    <div className="flex items-center gap-3">
                      <div className="landing-home-icon-wrap">
                        <AppIcon name="reports" className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="landing-home-mini-title">Reports</div>
                        <div className="landing-home-mini-copy">Audit exports ready</div>
                      </div>
                    </div>
                  </div>

                  <div className="landing-home-node left-[14%] top-[22%]" />
                  <div className="landing-home-node right-[15%] top-[24%]" />
                  <div className="landing-home-node left-[22%] bottom-[18%]" />
                  <div className="landing-home-node right-[22%] bottom-[16%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="landing-home-anchor px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-[640px] space-y-3">
              <div className="landing-home-kicker">Platform</div>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.8rem]">
                Three operating layers instead of scattered governance work.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="landing-home-surface">
                  <div className="flex items-center gap-3">
                    <div className="landing-home-icon-wrap">
                      <AppIcon name={pillar.icon} className="h-4 w-4" />
                    </div>
                    <div className="landing-home-surface-label">{pillar.label}</div>
                  </div>
                  <div className="mt-5 text-[1.2rem] font-semibold tracking-[-0.04em] text-white">
                    {pillar.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/66">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="landing-home-anchor px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="landing-home-rail">
              <div className="max-w-[620px] space-y-3">
                <div className="landing-home-kicker">Workflow</div>
                <h2 className="text-balance text-[2.15rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.65rem]">
                  A visible governance path from registration to evidence.
                </h2>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-5">
                {workflow.map((item, index) => (
                  <Link key={item.step} href={item.href} className="landing-home-step">
                    <div className="landing-home-step-index">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-4 text-base font-semibold text-white">{item.step}</div>
                    <div className="mt-2 text-sm leading-6 text-white/64">{item.detail}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="landing-home-anchor px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
              <div className="space-y-3">
                <div className="landing-home-kicker">Roles</div>
                <h2 className="text-balance text-[2.15rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.65rem]">
                  Separate admin and employee experiences, one product language.
                </h2>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {routes.map((route) => (
                  <Link key={route.title} href={route.href} className="landing-home-route">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="landing-home-icon-wrap">
                          <AppIcon name={route.icon} className="h-4 w-4" />
                        </div>
                        <div className="text-[1.08rem] font-semibold tracking-[-0.03em] text-white">
                          {route.title}
                        </div>
                      </div>
                      <AppIcon name="arrow-right" className="h-4 w-4 text-cyan-200" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/66">{route.detail}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1240px]">
            <div className="landing-home-footer-band">
              <div className="space-y-3">
                <div className="landing-home-kicker">Guided preview</div>
                <h2 className="max-w-[740px] text-balance text-[2rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.45rem]">
                  Start in the governed path instead of landing in a crowded workspace.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/demo" className="landing-home-hero-cta">
                  Start demo
                </Link>
                <a href="#platform" className="landing-home-hero-secondary">
                  View platform
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
