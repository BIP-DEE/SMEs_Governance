import { cn } from "@/lib/utils";

type ProductBrandProps = {
  compact?: boolean;
  context?: "default" | "sidebar";
  size?: "default" | "landing" | "shell";
  className?: string;
};

export function ProductBrand({
  compact = false,
  context = "default",
  size = "default",
  className,
}: ProductBrandProps) {
  const sidebar = context === "sidebar";
  const landing = size === "landing";
  const shell = size === "shell";

  return (
    <div
      className={cn("flex items-center gap-3", landing && "gap-3.5", shell && "gap-4", className)}
      data-product-brand-root
    >
      <div
        data-product-brand-icon
        className={cn(
          "relative flex items-center justify-center overflow-hidden border bg-[radial-gradient(circle_at_24%_18%,rgba(59,130,246,0.34),transparent_30%),radial-gradient(circle_at_76%_74%,rgba(20,184,166,0.24),transparent_34%),linear-gradient(145deg,rgba(7,15,36,0.98),rgba(9,58,80,0.98))]",
          compact ? "h-11 w-11 rounded-[22px]" : "h-12 w-12 rounded-[22px]",
          compact && landing && "h-[54px] w-[54px] rounded-[26px]",
          !compact && shell && "h-[54px] w-[54px] rounded-[24px]",
          sidebar ? "border-white/14" : "border-slate-200/80",
          landing
            ? "shadow-[0_24px_54px_rgba(4,17,34,0.32),inset_0_1px_0_rgba(255,255,255,0.16)]"
            : shell
              ? "shadow-[0_26px_58px_rgba(2,8,20,0.34),inset_0_1px_0_rgba(255,255,255,0.12)]"
              : "shadow-[0_20px_44px_rgba(8,25,48,0.26)]"
        )}
      >
        <svg
          viewBox="0 0 52 52"
          fill="none"
          className={cn(landing ? "h-8 w-8" : shell ? "h-[30px] w-[30px]" : "h-7 w-7")}
          aria-hidden="true"
        >
          <path
            d="M26 8.5 38.5 14v11.5c0 7-4.4 13.4-12.5 17.9-8.1-4.5-12.5-10.9-12.5-17.9V14L26 8.5Z"
            stroke="rgba(255,255,255,0.86)"
            strokeWidth="1.7"
          />
          <path
            d="M18.8 25.3c1.1-5.3 5.2-8.6 10.2-8.6 5.6 0 9.6 3.9 9.6 9.2"
            stroke="url(#orbit)"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <path
            d="M17.8 28.7c0 5.2 4 9.3 9.1 9.3 3.5 0 6.5-1.9 8.3-4.9"
            stroke="rgba(255,255,255,0.76)"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <circle cx="33.2" cy="25.8" r="3.2" fill="url(#core)" />
          <defs>
            <linearGradient id="orbit" x1="18.8" y1="16.7" x2="38.6" y2="25.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="1" stopColor="#2DD4BF" />
            </linearGradient>
            <radialGradient id="core" cx="0" cy="0" r="1" gradientTransform="translate(33.2 25.8) rotate(90) scale(4.5)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A5F3FC" />
              <stop offset="1" stopColor="#2563EB" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {!compact ? (
        <div className="space-y-0.5">
          <div
            className={cn(
              landing ? "text-[1.08rem]" : shell ? "text-[1.14rem]" : "text-[1.02rem]",
              "font-semibold tracking-[-0.05em]",
              sidebar ? "text-slate-50" : "text-slate-950"
            )}
          >
            Sentryn
          </div>
          <div
            className={cn(
              shell ? "text-[10px] tracking-[0.28em]" : "text-[11px] tracking-[0.24em]",
              "font-medium uppercase",
              sidebar ? "text-cyan-100/56" : "text-slate-500"
            )}
          >
            AI governance workspace
          </div>
        </div>
      ) : null}
    </div>
  );
}
