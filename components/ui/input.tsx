import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[16px] border border-slate-200/80 bg-white/78 px-4 text-sm text-slate-900 shadow-[0_10px_26px_rgba(15,23,42,0.05)] outline-none transition placeholder:text-slate-500 focus:border-blue-300/90 focus:bg-white focus:ring-4 focus:ring-blue-500/12",
        className
      )}
      {...props}
    />
  );
}
