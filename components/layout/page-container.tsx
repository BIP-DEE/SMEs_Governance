import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[1560px] px-4 pb-10 pt-5 sm:px-6 lg:px-8 lg:pt-6">{children}</div>;
}

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  meta?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  meta,
}: PageHeaderProps) {
  return (
    <header className="mb-5 grid gap-3 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
      <div className="surface-card-strong relative overflow-hidden rounded-[30px] px-5 py-4 sm:px-6">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-44 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_62%)]" />
        <div className="pointer-events-none absolute -left-6 top-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.14),transparent_70%)]" />
        <div className="relative max-w-3xl">
          <div className="inline-flex rounded-full border border-[#bfdced] bg-[linear-gradient(180deg,rgba(244,251,255,0.92),rgba(234,247,252,0.82))] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-800">
            {eyebrow}
          </div>
          <h1 className="mt-3 text-balance text-[1.82rem] font-semibold tracking-[-0.06em] text-slate-950 sm:text-[2.05rem]">
            {title}
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
            {description}
          </p>
          {meta ? <div className="mt-3 flex flex-wrap gap-2">{meta}</div> : null}
        </div>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2 xl:justify-end xl:self-stretch">{actions}</div> : null}
    </header>
  );
}
