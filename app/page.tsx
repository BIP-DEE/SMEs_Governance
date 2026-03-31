import Link from "next/link";
import { ProductBrand } from "@/components/brand/product-brand";
import { GovernanceHeroVisual } from "@/components/landing/governance-hero-visual";
import { AppIcon } from "@/components/ui/app-icon";

const pillars = [
  {
    label: "Register",
    title: "AI inventory",
    detail: "Track tools, owners, vendors, and review dates.",
    icon: "inventory" as const,
  },
  {
    label: "Control",
    title: "Approvals and guidance",
    detail: "Review risk, policy, and training before rollout.",
    icon: "requests" as const,
  },
  {
    label: "Evidence",
    title: "Monitoring and reports",
    detail: "Keep usage, decisions, and exports audit-ready.",
    icon: "reports" as const,
  },
];

const workflow = [
  {
    step: "Register",
    detail: "Capture tool and owner.",
  },
  {
    step: "Review",
    detail: "Assess risk and controls.",
  },
  {
    step: "Enable",
    detail: "Approve policy and training.",
  },
  {
    step: "Monitor",
    detail: "Watch usage and flags.",
  },
  {
    step: "Report",
    detail: "Export decision evidence.",
  },
];

const routes = [
  {
    title: "Admin control center",
    detail: "Manage inventory, reviews, monitoring, and audit output.",
    icon: "dashboard" as const,
  },
  {
    title: "Employee workspace",
    detail: "Start from approved AI use, requests, and training.",
    icon: "workspace" as const,
  },
];

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Roles", href: "#roles" },
  { label: "Demo", href: "/demo" },
];

const inlineFeatures = ["Inventory", "Approvals", "Monitoring", "Evidence"];

export default function LandingPage() {
  return (
    <div className="landing-home-shell min-h-screen text-white">
      <header className="landing-home-header sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="landing-home-topbar-shell mx-auto max-w-[1280px]">
          <div className="landing-home-topbar flex items-center justify-between gap-4 rounded-[28px] px-4 py-3 sm:px-5 sm:py-3.5">
            <Link href="/" className="landing-home-brand min-w-0">
              <ProductBrand context="sidebar" compact size="landing" className="shrink-0" />
              <span className="landing-home-brand-copy">
                <span className="landing-home-wordmark">Sentryn</span>
                <span className="landing-home-brand-tag">AI governance workspace</span>
              </span>
            </Link>

            <nav className="landing-home-nav hidden items-center gap-1 lg:flex">
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

            <div className="landing-home-header-actions flex items-center gap-3">
              <Link href="/demo" className="landing-home-link landing-home-link-pill hidden sm:inline-flex">
                Login
              </Link>
              <Link href="/demo" className="landing-home-cta landing-home-header-cta">
                Start demo
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-24">
        <section className="landing-home-hero px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="landing-home-hero-grid">
              <div className="landing-home-hero-copy animate-rise-in">
                <div className="landing-home-hero-copy-shell">
                  <div className="landing-home-hero-intro">
                    <div className="landing-home-kicker-pill">AI governance for SMEs</div>
                    <div className="landing-home-hero-signal">Operational control layer</div>
                  </div>

                  <h1 className="landing-home-hero-title">
                    Govern AI use with less sprawl.
                  </h1>
                  <p className="landing-home-hero-body">
                    Inventory, review, policy, monitoring, and evidence in one operating layer.
                  </p>

                  <div className="landing-home-hero-actions">
                    <Link href="/demo" className="landing-home-hero-cta">
                      Start demo
                    </Link>
                    <a href="#workflow" className="landing-home-hero-secondary">
                      Explore workflow
                    </a>
                  </div>

                  <div className="landing-home-inline-strip" aria-label="Platform scope">
                    <span className="landing-home-inline-label">Operational coverage</span>
                    <div className="landing-home-inline-track">
                      {inlineFeatures.map((item) => (
                        <span key={item} className="landing-home-inline-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="landing-home-hero-visual-wrap relative">
                <GovernanceHeroVisual />
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="landing-home-anchor px-4 pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[560px] space-y-3">
              <div className="landing-home-kicker">Platform</div>
              <h2 className="text-balance text-[1.95rem] font-semibold tracking-[-0.045em] text-white sm:text-[2.3rem]">
                Three layers. One operating model.
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
                  <div className="mt-5 text-[1.12rem] font-semibold tracking-[-0.03em] text-white">
                    {pillar.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/68">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="landing-home-anchor px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-[500px] space-y-3">
              <div className="landing-home-kicker">Workflow</div>
              <h2 className="text-balance text-[2rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.4rem]">
                From registration to evidence.
              </h2>
            </div>

            <div className="landing-home-workflow mt-8">
              <div className="landing-home-workflow-line hidden md:block" aria-hidden="true" />
              <div className="grid gap-3 md:grid-cols-5">
                {workflow.map((item, index) => (
                  <div key={item.step} className="landing-home-step">
                    <div className="landing-home-step-index">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-4 text-base font-semibold text-white">{item.step}</div>
                    <div className="mt-2 text-sm leading-6 text-white/66">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roles" className="landing-home-anchor px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="landing-home-roles-band grid gap-8 lg:grid-cols-[minmax(280px,0.42fr)_minmax(0,0.58fr)] lg:items-start">
              <div className="max-w-[430px] space-y-3">
                <div className="landing-home-kicker">Roles</div>
                <h2 className="text-balance text-[2rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.4rem]">
                  Two workspaces, one system.
                </h2>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {routes.map((route) => (
                  <div key={route.title} className="landing-home-route">
                    <div className="flex items-center gap-3">
                      <div className="landing-home-icon-wrap">
                        <AppIcon name={route.icon} className="h-4 w-4" />
                      </div>
                      <div className="text-[1.05rem] font-semibold tracking-[-0.03em] text-white">
                        {route.title}
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/66">{route.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="landing-home-footer-band">
              <div className="space-y-2">
                <div className="landing-home-kicker">Guided preview</div>
                <h2 className="text-balance text-[1.55rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.85rem]">
                  See the governed path in action.
                </h2>
                <p className="text-sm leading-6 text-white/66">
                  Start with the product flow before opening the full workspace.
                </p>
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
