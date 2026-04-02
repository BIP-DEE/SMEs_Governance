import { cn } from "@/lib/utils";

type TabItem = {
  id: string;
  label: string;
  count?: number;
};

type TabsProps = {
  items: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
};

export function Tabs({ items, activeTab, onChange }: TabsProps) {
  return (
    <div className="inline-flex flex-wrap items-center gap-1.5 rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(17,25,38,0.72),rgba(8,14,24,0.62))] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl">
      {items.map((item) => {
        const isActive = item.id === activeTab;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={cn(
              "rounded-[14px] px-3.5 py-2 text-sm font-medium tracking-[-0.01em] transition",
              isActive
                ? "bg-[linear-gradient(135deg,rgba(24,108,214,0.96),rgba(14,165,233,0.84)_58%,rgba(13,148,136,0.72))] text-white shadow-[0_12px_24px_rgba(8,67,126,0.2)]"
                : "text-slate-300 hover:bg-white/[0.06] hover:text-slate-100"
            )}
          >
            <span>{item.label}</span>
            {typeof item.count === "number" ? (
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-xs",
                  isActive ? "bg-white/16 text-white" : "bg-white/[0.08] text-slate-400"
                )}
              >
                {item.count}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
