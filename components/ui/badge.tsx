import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const toneMap = {
  neutral: "border-white/10 bg-white/[0.05] text-slate-200",
  info: "border-sky-300/22 bg-sky-300/[0.10] text-sky-100",
  success: "border-emerald-300/22 bg-emerald-300/[0.10] text-emerald-100",
  warning: "border-amber-300/22 bg-amber-300/[0.12] text-amber-100",
  danger: "border-rose-300/22 bg-rose-300/[0.12] text-rose-100",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: keyof typeof toneMap;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        toneMap[tone],
        className
      )}
      {...props}
    />
  );
}
