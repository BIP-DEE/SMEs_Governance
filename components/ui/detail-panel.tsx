import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="sticky top-[102px] overflow-hidden">
      <CardHeader className="border-b border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(246,250,255,0.56))]">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
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
      </CardHeader>
      <CardContent className="space-y-5">{children}</CardContent>
    </Card>
  );
}
