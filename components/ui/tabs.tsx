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
    <div className="inline-flex flex-wrap items-center gap-2 rounded-[18px] border border-[#c8deea]/85 bg-[linear-gradient(180deg,rgba(248,252,255,0.9),rgba(237,247,251,0.8))] p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
      {items.map((item) => {
        const isActive = item.id === activeTab;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={cn(
              "rounded-[14px] px-4 py-2.5 text-sm font-medium tracking-[-0.01em] transition",
              isActive
                ? "bg-[linear-gradient(135deg,#1d4ed8,#0f8fb8_62%,#0f766e)] text-white shadow-[0_14px_30px_rgba(29,78,216,0.16)]"
                : "text-slate-600 hover:bg-white/90 hover:text-slate-950"
            )}
          >
            <span>{item.label}</span>
            {typeof item.count === "number" ? (
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-xs",
                  isActive ? "bg-white/16 text-white" : "bg-slate-100/90 text-slate-500"
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
