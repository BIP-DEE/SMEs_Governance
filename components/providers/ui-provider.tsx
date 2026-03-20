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
  toggleSidebar: () => void;
  closeMobileSidebar: () => void;
  hydrated: boolean;
};

const SIDEBAR_STORAGE_KEY = "sentryn-sidebar-collapsed";
const DESKTOP_BREAKPOINT = "(min-width: 1024px)";

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsedState] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpenState] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedSidebar = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    setSidebarCollapsedState(storedSidebar === "true");
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(sidebarCollapsed));
  }, [sidebarCollapsed, hydrated]);

  const value = useMemo<UiContextValue>(
    () => ({
      sidebarCollapsed,
      setSidebarCollapsed: setSidebarCollapsedState,
      mobileSidebarOpen,
      setMobileSidebarOpen: setMobileSidebarOpenState,
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
    [sidebarCollapsed, mobileSidebarOpen, hydrated]
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
