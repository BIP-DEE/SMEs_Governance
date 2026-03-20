import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const toneMap = {
  neutral: "border-[#a8d1e2] bg-[linear-gradient(180deg,rgba(239,248,255,0.98),rgba(226,241,247,0.86))] text-slate-800",
  info: "border-sky-300/95 bg-[linear-gradient(180deg,rgba(234,247,255,0.98),rgba(214,239,255,0.88))] text-sky-900",
  success: "border-emerald-300/95 bg-[linear-gradient(180deg,rgba(237,252,246,0.98),rgba(217,245,233,0.88))] text-emerald-900",
  warning: "border-amber-300/95 bg-[linear-gradient(180deg,rgba(255,248,230,0.98),rgba(255,236,199,0.9))] text-amber-900",
  danger: "border-rose-300/95 bg-[linear-gradient(180deg,rgba(255,240,244,0.98),rgba(255,223,232,0.9))] text-rose-900",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: keyof typeof toneMap;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        toneMap[tone],
        className
      )}
      {...props}
    />
  );
}
