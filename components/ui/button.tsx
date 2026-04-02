import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variantMap = {
  primary:
    "border-cyan-300/18 bg-[linear-gradient(135deg,rgba(24,108,214,0.96),rgba(14,165,233,0.84)_58%,rgba(13,148,136,0.74))] text-white shadow-[0_18px_44px_rgba(8,67,126,0.3),inset_0_1px_0_rgba(255,255,255,0.16)] before:pointer-events-none before:absolute before:inset-y-[1px] before:left-[-30%] before:w-1/2 before:rotate-[18deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.34),transparent)] before:opacity-80 before:content-[''] before:transition-transform before:duration-700 hover:-translate-y-[1px] hover:border-cyan-200/30 hover:saturate-[1.04] hover:brightness-110 hover:shadow-[0_24px_52px_rgba(4,92,150,0.34)] hover:before:translate-x-[240%] active:scale-[0.985] focus-visible:ring-cyan-300/28",
  secondary:
    "border-white/8 bg-white/[0.04] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-[1px] hover:border-cyan-300/16 hover:bg-white/[0.07] hover:text-white focus-visible:ring-cyan-300/16",
  ghost:
    "border-transparent bg-transparent text-slate-300 shadow-none hover:bg-white/[0.04] hover:text-white focus-visible:ring-cyan-300/12",
};

const sizeMap = {
  sm: "h-9 rounded-[14px] px-4 text-sm",
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
    "relative isolate inline-flex min-w-0 shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap border font-medium tracking-[-0.02em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-55",
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
