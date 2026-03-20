"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type UiContextValue = {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  sidebarScrollPositions: Record<"admin" | "employee", number>;
  setSidebarScrollPosition: (variant: "admin" | "employee", position: number) => void;
  toggleSidebar: () => void;
  closeMobileSidebar: () => void;
  hydrated: boolean;
};

const SIDEBAR_STORAGE_KEY = "sentryn-sidebar-collapsed";
const SIDEBAR_SCROLL_STORAGE_KEY = "sentryn-sidebar-scroll";
const DESKTOP_BREAKPOINT = "(min-width: 1024px)";

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsedState] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpenState] = useState(false);
  const [sidebarScrollPositions, setSidebarScrollPositionsState] = useState<Record<"admin" | "employee", number>>({
    admin: 0,
    employee: 0,
  });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedSidebar = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    const storedScrollPositions = window.sessionStorage.getItem(SIDEBAR_SCROLL_STORAGE_KEY);
    setSidebarCollapsedState(storedSidebar === "true");
    if (storedScrollPositions) {
      try {
        const parsed = JSON.parse(storedScrollPositions) as Partial<Record<"admin" | "employee", number>>;
        setSidebarScrollPositionsState({
          admin: typeof parsed.admin === "number" ? parsed.admin : 0,
          employee: typeof parsed.employee === "number" ? parsed.employee : 0,
        });
      } catch {
        setSidebarScrollPositionsState({ admin: 0, employee: 0 });
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(sidebarCollapsed));
    window.sessionStorage.setItem(SIDEBAR_SCROLL_STORAGE_KEY, JSON.stringify(sidebarScrollPositions));
  }, [sidebarCollapsed, sidebarScrollPositions, hydrated]);

  const value = useMemo<UiContextValue>(
    () => ({
      sidebarCollapsed,
      setSidebarCollapsed: setSidebarCollapsedState,
      mobileSidebarOpen,
      setMobileSidebarOpen: setMobileSidebarOpenState,
      sidebarScrollPositions,
      setSidebarScrollPosition: (variant, position) => {
        setSidebarScrollPositionsState((current) => {
          if (current[variant] === position) {
            return current;
          }

          return {
            ...current,
            [variant]: position,
          };
        });
      },
      toggleSidebar: () => {
        if (typeof window !== "undefined" && window.matchMedia(DESKTOP_BREAKPOINT).matches) {
          setSidebarCollapsedState((current) => !current);
          return;
        }

        setMobileSidebarOpenState((current) => !current);
      },
      closeMobileSidebar: () => setMobileSidebarOpenState(false),
      hydrated,
    }),
    [sidebarCollapsed, mobileSidebarOpen, sidebarScrollPositions, hydrated]
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("useUi must be used within UiProvider");
  }

  return context;
}
