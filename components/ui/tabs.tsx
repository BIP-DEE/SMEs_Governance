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
    <div className="inline-flex flex-wrap items-center gap-2 rounded-[18px] border border-white/65 bg-white/72 p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      {items.map((item) => {
        const isActive = item.id === activeTab;

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={cn(
              "rounded-[14px] px-4 py-2.5 text-sm font-medium tracking-[-0.01em] transition",
              isActive
                ? "bg-[linear-gradient(135deg,#0f172a,#1d4ed8)] text-white shadow-[0_14px_30px_rgba(15,23,42,0.14)]"
                : "text-slate-600 hover:bg-white hover:text-slate-950"
            )}
          >
            <span>{item.label}</span>
            {typeof item.count === "number" ? (
              <span
                className={cn(
                  "ml-2 rounded-full px-2 py-0.5 text-xs",
                  isActive ? "bg-white/14 text-white" : "bg-slate-100 text-slate-500"
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
