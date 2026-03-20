import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  className?: string;
  tone?: "default" | "success" | "warning" | "danger";
};

export function ProgressBar({
  value,
  className,
  tone = "default",
}: ProgressBarProps) {
  const toneClass = {
    default: "bg-[linear-gradient(90deg,#1d4ed8,#0891b2)]",
    success: "bg-[linear-gradient(90deg,#059669,#34d399)]",
    warning: "bg-[linear-gradient(90deg,#d97706,#f59e0b)]",
    danger: "bg-[linear-gradient(90deg,#dc2626,#fb7185)]",
  }[tone];

  return (
    <div className={cn("h-2 overflow-hidden rounded-full bg-slate-200/80", className)}>
      <div className={cn("h-full rounded-full", toneClass)} style={{ width: `${value}%` }} />
    </div>
  );
}
