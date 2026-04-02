import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[1460px] px-4 pb-12 pt-3 sm:px-6 lg:px-8 lg:pt-4">{children}</div>;
}

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
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
    <header className="mb-6 grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
      <div className="max-w-3xl border-t border-white/6 px-1 pt-4 sm:pt-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/88">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
          {eyebrow}
        </div>
        <h1 className="mt-3 max-w-3xl text-balance text-[1.82rem] font-semibold tracking-[-0.055em] text-slate-50 sm:text-[2.08rem]">
          {title}
        </h1>
        {description ? <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{description}</p> : null}
        {meta ? <div className="mt-4 flex flex-wrap gap-2">{meta}</div> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2 xl:justify-end xl:self-start">{actions}</div> : null}
    </header>
  );
}
