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
    <div className="inline-flex flex-wrap items-center gap-2 rounded-[18px] border border-[#bddae7]/90 bg-[linear-gradient(180deg,rgba(248,252,255,0.94),rgba(232,244,249,0.86))] p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
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
                : "text-slate-700 hover:bg-white/92 hover:text-slate-950"
            )}
          >
            <span>{item.label}</span>
            {typeof item.count === "number" ? (
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-xs",
                  isActive ? "bg-white/16 text-white" : "bg-white/86 text-slate-600"
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
