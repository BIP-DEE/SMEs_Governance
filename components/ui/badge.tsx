import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const toneMap = {
  neutral: "border-[#b7d8e6] bg-[linear-gradient(180deg,rgba(238,248,255,0.96),rgba(231,244,248,0.82))] text-slate-700",
  info: "border-sky-300/90 bg-[linear-gradient(180deg,rgba(236,248,255,0.96),rgba(221,242,255,0.84))] text-sky-800",
  success: "border-emerald-300/90 bg-[linear-gradient(180deg,rgba(237,252,246,0.96),rgba(223,247,239,0.84))] text-emerald-800",
  warning: "border-amber-300/90 bg-[linear-gradient(180deg,rgba(255,248,230,0.96),rgba(255,240,208,0.84))] text-amber-800",
  danger: "border-rose-300/90 bg-[linear-gradient(180deg,rgba(255,240,244,0.96),rgba(255,228,235,0.84))] text-rose-800",
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
