import { cn } from "@/lib/utils";

export type AppIconName =
  | "dashboard"
  | "inventory"
  | "requests"
  | "policies"
  | "training"
  | "monitoring"
  | "reports"
  | "users"
  | "settings"
  | "workspace"
  | "home"
  | "activity"
  | "spark"
  | "shield"
  | "arrow-right"
  | "menu"
  | "sun"
  | "moon"
  | "chevron-left";

type AppIconProps = {
  name: AppIconName;
  className?: string;
};

export function AppIcon({ name, className }: AppIconProps) {
  const classes = cn("h-[18px] w-[18px]", className);

  switch (name) {
    case "dashboard":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M3.5 3.5h5.5v5.5H3.5V3.5Zm7.5 0h5.5v3.5H11V3.5Zm0 5.5h5.5v7.5H11V9Zm-7.5 2h5.5v5.5H3.5V11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "inventory":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M4 4.5h12v3H4v-3Zm0 5h12v6H4v-6Zm3 2.5h2m2.5 0h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "requests":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M6 4.5h8M6 8h8m-8 3.5h5m5.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "policies":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M6 3.5h6l3 3v9.5H6V3.5Zm6 0v3h3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 10h4.5M8 13h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M3.5 6.5 10 3l6.5 3.5L10 10 3.5 6.5Zm2 2.4v4.1L10 16l4.5-3V8.9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "monitoring":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M3.5 13.5h2.3l1.9-5 2.6 7 1.9-4h4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "reports":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M5 4.5h10v11H5v-11Zm2.5 7.5 1.7-2 1.8 1.3 2.5-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M7.2 8.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Zm5.9 1.1a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.8 15.8c0-2 1.8-3.7 4.1-3.7s4.1 1.6 4.1 3.7m.8-.9c.4-1.3 1.6-2.3 3.1-2.3 1.6 0 2.9 1.1 3.2 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path
            d="M8.6 2.9h2.8l.4 1.8c.1.3.3.5.6.7l1.5.6 1.6-1.1 2 2-1.1 1.6c-.2.2-.2.5-.1.8l.6 1.5 1.8.4v2.8l-1.8.4c-.3.1-.5.3-.7.6l-.6 1.5c-.1.3-.1.6.1.8l1.1 1.6-2 2-1.6-1.1c-.2-.2-.5-.2-.8-.1l-1.5.6c-.3.1-.5.3-.6.6l-.4 1.8H8.6l-.4-1.8c-.1-.3-.3-.5-.6-.6l-1.5-.6c-.3-.1-.6-.1-.8.1l-1.6 1.1-2-2 1.1-1.6c.2-.2.2-.5.1-.8l-.6-1.5c-.1-.3-.3-.5-.6-.6l-1.9-.4v-2.8l1.9-.4c.3-.1.5-.3.6-.6l.6-1.5c.1-.3.1-.6-.1-.8L2.9 7.5l2-2 1.6 1.1c.2.2.5.2.8.1l1.5-.6c.3-.1.5-.4.6-.7l.2-1.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "workspace":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M4 5h12v8H9l-3 3V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M7 8h6M7 10.8h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M4 8.2 10 3l6 5.2v8.3H4V8.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 16.5v-4h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "activity":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M4 14.5c2.1-2.2 3.8-5.6 5.3-9 1.2 4.2 2.3 6.7 3.4 8l1.2-2.2H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="m9.9 2 1.4 4.7L16 8.1l-4.7 1.4-1.4 4.7-1.4-4.7L3.8 8.1l4.7-1.4L9.9 2Zm5.2 10.6.6 2 .6-2 2-.6-2-.6-.6-2-.6 2-2 .6 2 .6Z" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M10 2.5 15.5 5v5.4c0 3.2-2.1 6.2-5.5 8.3-3.4-2.1-5.5-5.1-5.5-8.3V5L10 2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M4 10h11.5M11 5.5 15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M4 6h12M4 10h12M4 14h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 2.8v2.1M10 15.1v2.1M17.2 10h-2.1M4.9 10H2.8M15.2 4.8l-1.5 1.5M6.3 13.7l-1.5 1.5M15.2 15.2l-1.5-1.5M6.3 6.3 4.8 4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "moon":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="M12.9 3.2a6.6 6.6 0 1 0 3.9 11.9A7.3 7.3 0 0 1 12.9 3.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg viewBox="0 0 20 20" fill="none" className={classes} aria-hidden="true">
          <path d="m12.5 4.5-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
