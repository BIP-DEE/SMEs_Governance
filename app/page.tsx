import Link from "next/link";
import { ProductBrand } from "@/components/brand/product-brand";
import { AppIcon } from "@/components/ui/app-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    label: "Register",
    title: "Build one living record of company AI use.",
    detail: "Tools, vendors, owners, approvals, and review dates stay tied together.",
  },
  {
    label: "Guide",
    title: "Turn policy and training into the operating path.",
    detail: "Employees see approved routes first instead of hunting through separate guidance.",
  },
  {
    label: "Evidence",
    title: "Carry oversight forward into reporting.",
    detail: "Decisions, activity, and audit history stay connected when evidence is needed.",
  },
];

const workflow = [
  {
    step: "Register",
    detail: "Capture the tool, owner, vendor, and intended use.",
    meta: "6 new",
    href: "/inventory",
  },
  {
    step: "Review",
    detail: "Assess risk, request evidence, and define controls.",
    meta: "8 active",
    href: "/requests",
  },
  {
    step: "Enable",
    detail: "Roll out policy, training, and approved access.",
    meta: "2 ready",
    href: "/policies",
  },
  {
    step: "Monitor",
    detail: "Track signals and investigate with context.",
    meta: "1 flagged",
    href: "/monitoring",
  },
  {
    step: "Report",
    detail: "Export evidence and decision history quickly.",
    meta: "Weekly export",
    href: "/reports",
  },
];

const routes = [
  {
    title: "Admin control center",
    detail: "Run review, rollout, monitoring, and evidence from one structured workspace.",
    action: "Preview admin",
    href: "/dashboard",
    icon: "dashboard" as const,
  },
  {
    title: "Employee workspace",
    detail: "Start with approved AI use, then reveal requests, training, and guidance only when needed.",
    action: "Preview employee",
    href: "/employee",
    icon: "workspace" as const,
  },
];

const trustStrip = [
  ["42", "tracked systems"],
  ["8", "active reviews"],
  ["94%", "evidence coverage"],
  ["1", "governed workflow"],
];

const orbitNodes = [
  { title: "Register", meta: "6 new", className: "left-4 top-7 sm:left-10 sm:top-12 xl:left-6 xl:top-10 animate-float-slow" },
  { title: "Review", meta: "8 active", className: "right-4 top-10 sm:right-12 sm:top-16 xl:right-6 xl:top-14 animate-float-medium" },
  { title: "Enable", meta: "2 ready", className: "left-10 bottom-16 sm:left-16 sm:bottom-24 xl:left-10 xl:bottom-20 animate-float-delay" },
  { title: "Monitor", meta: "1 flagged", className: "right-8 bottom-24 sm:right-14 sm:bottom-28 xl:right-10 xl:bottom-24 animate-float-slow" },
  { title: "Report", meta: "Export", className: "right-[28%] bottom-4 sm:right-[30%] sm:bottom-8 xl:right-[30%] xl:bottom-6 animate-float-medium" },
];

const navLinkClass =
  "rounded-full px-3.5 py-2 text-sm font-medium text-white/72 transition duration-200 hover:bg-white/8 hover:text-white active:translate-y-px";

export default function LandingPage() {
  return (
    <div className="landing-page-shell min-h-screen text-white">
      <header className="sticky top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
        <div className="landing-header-shell mx-auto flex max-w-[1440px] items-center justify-between rounded-[26px] px-4 py-3 sm:px-5">
          <Link href="/" className="min-w-0">
            <ProductBrand context="sidebar" />
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
        <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-10">
          <div className="landing-hero-shell mx-auto max-w-[1440px] overflow-hidden rounded-[42px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_600px] xl:items-center">
              <div className="animate-rise-in max-w-[640px] space-y-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    AI governance for SMEs
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    One governed operating layer
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="max-w-4xl text-balance text-[3.35rem] font-semibold tracking-[-0.085em] text-white sm:text-[4.85rem]">
                    Put every AI tool, request, and decision inside one{" "}
                    <span className="bg-[linear-gradient(135deg,#7dd3fc,#22d3ee_56%,#2dd4bf)] bg-clip-text text-transparent">
                      governed path
                    </span>
                    .
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-[1.08rem]">
                    Sentryn gives growing companies a control layer for registration, review,
                    enablement, monitoring, and evidence without spreading governance across sheets, inboxes, and static docs.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button size="lg" href="/demo">
                    Start session
                    <AppIcon name="arrow-right" className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="secondary" href="#workflow">
                    Explore workflow
                  </Button>
                </div>
              </div>

              <div className="animate-rise-in relative h-[440px] sm:h-[520px] xl:h-[560px]">
                <div className="absolute inset-0">
                  <div className="landing-visual-shell absolute inset-0 rounded-[34px]" />
                  <div className="absolute inset-0 opacity-18 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />

                  <svg
                    viewBox="0 0 600 560"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="heroLine" x1="120" y1="90" x2="480" y2="470" gradientUnits="userSpaceOnUse">
                        <stop stopColor="rgba(125,211,252,0.2)" />
                        <stop offset="0.5" stopColor="rgba(34,211,238,0.9)" />
                        <stop offset="1" stopColor="rgba(45,212,191,0.35)" />
                      </linearGradient>
                      <radialGradient id="heroCore" cx="0" cy="0" r="1" gradientTransform="translate(300 280) rotate(90) scale(116)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#67E8F9" stopOpacity="0.95" />
                        <stop offset="0.55" stopColor="#22D3EE" stopOpacity="0.38" />
                        <stop offset="1" stopColor="#0B1220" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="heroCube" x1="245" y1="220" x2="368" y2="340" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8BE8FF" stopOpacity="0.92" />
                        <stop offset="0.52" stopColor="#22D3EE" stopOpacity="0.7" />
                        <stop offset="1" stopColor="#2563EB" stopOpacity="0.52" />
                      </linearGradient>
                    </defs>

                    <circle cx="300" cy="280" r="168" stroke="rgba(125,211,252,0.12)" strokeWidth="1.5" className="animate-pulse-ring origin-center" />
                    <circle cx="300" cy="280" r="118" stroke="rgba(34,211,238,0.18)" strokeWidth="1.5" />
                    <circle cx="300" cy="280" r="72" fill="url(#heroCore)" />

                    <path d="M300 120 178 190 178 336 300 420 422 336 422 190 300 120Z" stroke="url(#heroLine)" strokeWidth="2.2" />
                    <path d="M178 190 300 280 422 190" stroke="url(#heroLine)" strokeWidth="1.7" opacity="0.9" />
                    <path d="M178 336 300 280 422 336" stroke="url(#heroLine)" strokeWidth="1.7" opacity="0.9" />
                    <path d="M300 120V280V420" stroke="url(#heroLine)" strokeWidth="1.8" opacity="0.85" />
                    <path d="M178 190V336" stroke="url(#heroLine)" strokeWidth="1.4" opacity="0.65" />
                    <path d="M422 190V336" stroke="url(#heroLine)" strokeWidth="1.4" opacity="0.65" />

                    <g className="animate-drift origin-center">
                      <path d="M300 196 360 232 300 268 240 232 300 196Z" fill="url(#heroCube)" fillOpacity="0.88" />
                      <path d="M240 232v74l60 36v-74l-60-36Z" fill="#0C5F86" fillOpacity="0.46" />
                      <path d="M360 232v74l-60 36v-74l60-36Z" fill="#1D4ED8" fillOpacity="0.36" />
                      <path d="M300 196 360 232 300 268 240 232 300 196Z" stroke="rgba(224,242,254,0.95)" strokeOpacity="0.44" />
                      <path d="M240 232v74l60 36v-74l-60-36Z" stroke="rgba(224,242,254,0.3)" />
                      <path d="M360 232v74l-60 36v-74l60-36Z" stroke="rgba(224,242,254,0.3)" />
                    </g>

                    {[
                      [300, 120],
                      [178, 190],
                      [422, 190],
                      [178, 336],
                      [422, 336],
                      [300, 420],
                    ].map(([cx, cy], index) => (
                      <g key={index}>
                        <circle cx={cx} cy={cy} r="20" fill="rgba(255,255,255,0.06)" stroke="rgba(167,243,208,0.34)" />
                        <circle cx={cx} cy={cy} r="8" fill="#7DD3FC" fillOpacity="0.82" />
                      </g>
                    ))}
                  </svg>

                  <div className="absolute left-[17%] top-[44%] flex h-16 w-16 items-center justify-center rounded-[22px] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-cyan-100 shadow-[0_20px_44px_rgba(8,25,48,0.24)] animate-float-medium">
                    <AppIcon name="shield" className="h-7 w-7" />
                  </div>
                  <div className="absolute right-[17%] top-[46%] flex h-16 w-16 items-center justify-center rounded-[22px] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-cyan-100 shadow-[0_20px_44px_rgba(8,25,48,0.24)] animate-float-delay">
                    <AppIcon name="shield" className="h-7 w-7" />
                  </div>

                  {orbitNodes.map((node) => (
                    <div
                      key={node.title}
                      className={`landing-proof-chip absolute rounded-full px-3.5 py-2 text-white ${node.className}`}
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
                        {node.title}
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-white">{node.meta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1440px] flex-wrap gap-3">
            {trustStrip.map(([value, label]) => (
              <div key={label} className="landing-proof-chip rounded-full px-4 py-3">
                <span className="text-sm font-semibold tracking-[-0.02em] text-white">{value}</span>
                <span className="ml-2 text-sm text-white/68">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="landing-section-anchor px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1440px] space-y-7">
            <div className="max-w-2xl space-y-3">
              <Badge className="border-cyan-300/16 bg-cyan-300/8 text-cyan-100">Platform</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.7rem]">
                Three connected jobs, one product spine.
              </h2>
              <p className="text-base leading-7 text-white/66">
                Keep governance visible without turning the product story into a wall of explanation.
              </p>
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="landing-surface interactive-card rounded-[30px] px-6 py-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/72">
                    {pillar.label}
                  </div>
                  <div className="mt-4 text-[1.18rem] font-semibold tracking-[-0.03em] text-white">
                    {pillar.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/66">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="landing-section-anchor px-4 py-12 sm:px-6 lg:px-8">
          <div className="landing-surface mx-auto max-w-[1440px] rounded-[36px] px-6 py-7 sm:px-8">
            <div className="max-w-2xl space-y-3">
              <Badge className="border-cyan-300/16 bg-cyan-300/8 text-cyan-100">Workflow</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.6rem]">
                Register, review, enable, monitor, report.
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/68">
                The governance flow stays explicit from first registration through final evidence.
              </p>
            </div>

            <div className="mt-7 grid gap-3 lg:grid-cols-5">
              {workflow.map((item, index) => (
                <Link
                  key={item.step}
                  href={item.href}
                  className="landing-step-card interactive-card-dark rounded-[24px] px-4 py-4 text-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/72">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/68">
                      {item.meta}
                    </div>
                  </div>
                  <div className="mt-3 text-base font-semibold tracking-[-0.02em] text-white">{item.step}</div>
                  <div className="mt-2 text-sm leading-6 text-white/68">{item.detail}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="routes" className="landing-section-anchor px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-6 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
            <div className="space-y-3">
              <Badge className="border-cyan-300/16 bg-cyan-300/8 text-cyan-100">Routes</Badge>
              <h2 className="text-balance text-[2.2rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.6rem]">
                Two entry routes, one product language.
              </h2>
              <p className="text-base leading-7 text-white/66">
                Admins get a control center. Employees get a calmer approved workspace.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {routes.map((route) => (
                <div key={route.title} className="landing-surface-soft interactive-card rounded-[30px] px-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-cyan-300/14 bg-white/6 text-cyan-100">
                      <AppIcon name={route.icon} className="h-5 w-5" />
                    </div>
                    <div className="text-[1.14rem] font-semibold tracking-[-0.03em] text-white">{route.title}</div>
                  </div>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/66">{route.detail}</p>
                  <Link
                    href={route.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition hover:text-white"
                  >
                    {route.action}
                    <AppIcon name="arrow-right" className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-6 sm:px-6 lg:px-8">
          <div className="landing-surface mx-auto grid max-w-[1440px] gap-5 rounded-[34px] px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-3">
              <Badge className="border-cyan-300/16 bg-cyan-300/8 text-cyan-100">Guided preview</Badge>
              <h2 className="max-w-2xl text-balance text-[2rem] font-semibold tracking-[-0.06em] text-white sm:text-[2.35rem]">
                Start inside the governed flow instead of landing in a crowded workspace.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/demo">Start session</Button>
              <Button variant="secondary" href="#platform">
                Explore platform
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
