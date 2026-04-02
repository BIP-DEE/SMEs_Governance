import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";

type DetailPanelProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  onClose?: () => void;
  children: ReactNode;
};

export function DetailPanel({
  eyebrow,
  title,
  description,
  actions,
  onClose,
  children,
}: DetailPanelProps) {
  return (
    <aside className="relative lg:sticky lg:top-[104px]">
      <div className="space-y-4 border-t border-white/6 px-1 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              {eyebrow}
            </p>
            <div className="space-y-1">
              <CardTitle>{title}</CardTitle>
              {description ? <CardDescription>{description}</CardDescription> : null}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {actions}
            {onClose ? (
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
            ) : null}
          </div>
        </div>
        <div className="space-y-4 border-t border-white/6 pt-4">{children}</div>
      </div>
    </aside>
  );
}
