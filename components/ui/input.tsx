import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[16px] border border-[#b8d9e7]/90 bg-[linear-gradient(180deg,rgba(250,254,255,0.96),rgba(238,248,252,0.88))] px-4 text-sm text-slate-900 shadow-[0_10px_26px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-slate-500 focus:border-blue-300/95 focus:bg-white focus:ring-4 focus:ring-blue-500/14",
        className
      )}
      {...props}
    />
  );
}
