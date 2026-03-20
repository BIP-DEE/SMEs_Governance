import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variantMap = {
  primary:
    "border-transparent bg-[linear-gradient(135deg,#1d4ed8,#0f8fb8_58%,#0f766e)] text-white shadow-[0_18px_40px_rgba(29,78,216,0.24)] hover:-translate-y-[1px] hover:saturate-[1.08] hover:brightness-105 hover:shadow-[0_26px_52px_rgba(14,116,144,0.3)] focus-visible:ring-blue-500/24",
  secondary:
    "border-[#aed6e7]/90 bg-[linear-gradient(180deg,rgba(246,252,255,0.92),rgba(232,246,250,0.82))] text-slate-800 shadow-[0_12px_30px_rgba(28,65,118,0.07)] hover:-translate-y-[1px] hover:border-[#83bfe0] hover:bg-[linear-gradient(180deg,rgba(250,254,255,0.98),rgba(236,248,252,0.88))] hover:text-slate-950 hover:shadow-[0_20px_38px_rgba(28,65,118,0.1)] focus-visible:ring-sky-600/12",
  ghost:
    "border-transparent bg-transparent text-slate-600 shadow-none hover:bg-[rgba(224,242,255,0.72)] hover:text-slate-950 focus-visible:ring-sky-700/8",
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
