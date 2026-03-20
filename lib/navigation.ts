import type { AppIconName } from "@/components/ui/app-icon";

export type NavItem = {
  name: string;
  href: string;
  icon: AppIconName;
  badge?: string;
  hint?: string;
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export const adminSections: NavSection[] = [
  {
    label: "Today",
    items: [
      { name: "Overview", href: "/dashboard", icon: "dashboard", hint: "Current priorities" },
    ],
  },
  {
    label: "Workflow",
    items: [
      { name: "Register", href: "/inventory", icon: "inventory", hint: "AI register" },
      { name: "Review", href: "/requests", icon: "requests", badge: "8", hint: "Requests queue" },
      { name: "Enable", href: "/policies", icon: "policies", hint: "Policies" },
      { name: "Training", href: "/training", icon: "training", hint: "Assigned learning" },
      { name: "Monitor", href: "/monitoring", icon: "monitoring", hint: "Activity" },
      { name: "Report", href: "/reports", icon: "reports", hint: "Audit exports" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { name: "People", href: "/users", icon: "users", hint: "Owners and reviewers" },
    ],
  },
];

export const employeeSections: NavSection[] = [
  {
    label: "Start",
    items: [
      { name: "Home", href: "/employee", icon: "home", hint: "Today" },
      { name: "Workspace", href: "/employee/workspace", icon: "workspace", hint: "Approved AI" },
      { name: "Requests", href: "/employee/requests", icon: "requests", hint: "Approval status" },
    ],
  },
  {
    label: "Guidance",
    items: [
      { name: "Policies", href: "/employee/policies", icon: "policies", hint: "What is allowed" },
      { name: "Training", href: "/employee/training", icon: "training", hint: "Assigned modules" },
      { name: "Activity", href: "/employee/activity", icon: "activity", hint: "Recent actions" },
    ],
  },
];

export const workspaceSwitch = [
  {
    label: "Admin",
    href: "/dashboard",
    icon: "dashboard" as const,
    description: "Governance control center",
  },
  {
    label: "Employee",
    href: "/employee",
    icon: "workspace" as const,
    description: "Approved internal workspace",
  },
];

export const pageMeta: Record<string, { section: string; title: string; subtitle: string }> = {
  "/dashboard": {
    section: "Today",
    title: "Governance overview",
    subtitle: "Stay focused on the few reviews, controls, and evidence gaps that matter today.",
  },
  "/inventory": {
    section: "Register",
    title: "AI register",
    subtitle: "Keep one structured record of tools, vendors, models, owners, and approved use.",
  },
  "/requests": {
    section: "Review",
    title: "Requests",
    subtitle: "Review new AI adoption in a clear flow with controls, owners, and decision history.",
  },
  "/policies": {
    section: "Enable",
    title: "Policies",
    subtitle: "Publish practical rules, keep acknowledgement visible, and connect policy to control.",
  },
  "/training": {
    section: "Training",
    title: "Training",
    subtitle: "Deliver lightweight governance training tied to approved AI behavior.",
  },
  "/monitoring": {
    section: "Monitor",
    title: "Monitoring",
    subtitle: "Track ongoing AI activity, highlight flags, and investigate with context.",
  },
  "/reports": {
    section: "Report",
    title: "Reports",
    subtitle: "Generate audit-ready exports with decision history and evidence coverage.",
  },
  "/users": {
    section: "Workspace",
    title: "Users",
    subtitle: "See owners, reviewers, and employee coverage across the AI governance program.",
  },
  "/settings": {
    section: "Workspace",
    title: "Settings",
    subtitle: "Manage workspace defaults, alert rules, retention, and rollout preferences.",
  },
  "/employee": {
    section: "Start",
    title: "Employee home",
    subtitle: "Begin with your approved workspace, assigned training, requests, and policy reminders.",
  },
  "/employee/workspace": {
    section: "Start",
    title: "AI workspace",
    subtitle: "Use a company-approved assistant for internal drafting, summarising, and productivity tasks.",
  },
  "/employee/requests": {
    section: "Start",
    title: "My requests",
    subtitle: "Track submitted requests, requested controls, and what reviewers still need.",
  },
  "/employee/policies": {
    section: "Guidance",
    title: "Policies",
    subtitle: "Review company AI guidance in a shorter, easier-to-follow format.",
  },
  "/employee/training": {
    section: "Guidance",
    title: "My training",
    subtitle: "Complete short governance modules assigned to your role and workflow.",
  },
  "/employee/activity": {
    section: "Guidance",
    title: "My activity",
    subtitle: "See recent workspace, training, request, and acknowledgement events.",
  },
};
