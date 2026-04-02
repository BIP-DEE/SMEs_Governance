import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,28,43,0.82),rgba(9,14,24,0.78))] px-4 text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition placeholder:text-slate-400 focus:border-cyan-300/28 focus:bg-[linear-gradient(180deg,rgba(21,33,50,0.92),rgba(10,16,27,0.88))] focus:ring-4 focus:ring-cyan-400/12",
        className
      )}
      {...props}
    />
  );
}
