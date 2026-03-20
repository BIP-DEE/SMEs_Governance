import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variantMap = {
  primary:
    "border-transparent bg-[linear-gradient(135deg,#1d4ed8,#0f8fb8_58%,#0f766e)] text-white shadow-[0_18px_40px_rgba(29,78,216,0.24)] hover:-translate-y-[1px] hover:saturate-[1.08] hover:brightness-105 hover:shadow-[0_26px_52px_rgba(14,116,144,0.3)] focus-visible:ring-blue-500/24",
  secondary:
    "border-[#9fcfe3]/95 bg-[linear-gradient(180deg,rgba(247,252,255,0.96),rgba(230,244,249,0.88))] text-slate-900 shadow-[0_12px_30px_rgba(28,65,118,0.08)] hover:-translate-y-[1px] hover:border-[#71b7d9] hover:bg-[linear-gradient(180deg,rgba(251,254,255,1),rgba(234,247,252,0.92))] hover:text-slate-950 hover:shadow-[0_20px_38px_rgba(28,65,118,0.12)] focus-visible:ring-sky-600/14",
  ghost:
    "border-transparent bg-transparent text-slate-700 shadow-none hover:bg-[rgba(216,239,251,0.82)] hover:text-slate-950 focus-visible:ring-sky-700/10",
};

const sizeMap = {
  sm: "h-10 rounded-[14px] px-4 text-sm",
  md: "h-11 rounded-[16px] px-5 text-sm",
  lg: "h-12 rounded-[18px] px-6 text-sm",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantMap;
  size?: keyof typeof sizeMap;
  href?: string;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-w-0 shrink-0 items-center justify-center gap-2 whitespace-nowrap border font-medium tracking-[-0.02em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 active:translate-y-px disabled:pointer-events-none disabled:opacity-55",
    variantMap[variant],
    sizeMap[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
