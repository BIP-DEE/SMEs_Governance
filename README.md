# SME Governance UI Foundation

## 1. UI structure

- `App shell`: desktop-first split layout with a persistent left sidebar and a sticky operational top bar.
- `Navigation model`: Overview, AI Inventory, Approvals, Policies, Training, Monitoring, Audit Reports, Logs, and Settings.
- `Primary workspace`: wide page container with a page header, action area, KPI cards, data tables, and right-rail insight cards.
- `Design primitives`: neutral surfaces, subtle borders, soft shadows, rounded corners, and measured blue/slate emphasis.
- `Operational patterns`: approval workflows, policy acknowledgement, training completion, monitoring visibility, and audit exports.

## 2. Proposed component list

- `AppShell`, `Sidebar`, `Topbar`, `PageContainer`, `PageHeader`
- `Button`, `Badge`, `Card`, `Input`, `Tabs`, `Modal`, `EmptyState`, `FilterBar`
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`
- Future extension components: `StatusTimeline`, `ApprovalStepper`, `EvidenceDrawer`, `PolicyAckPanel`, `TrainingMatrix`, `AuditExportPanel`

## 3. Final design direction summary

- Professional and structured rather than chat-like or consumer-AI styled.
- Clean light-neutral foundation with blue/slate accents to signal trust and control.
- Tables and cards are treated as the main system-of-record surfaces.
- Status colors are reserved for operational meaning: info, success, warning, danger, neutral.
- The shell is simple enough for SMEs while still feeling premium, audit-friendly, and credible.

## 4. Base app shell

- Built with `Next.js`, `React`, `TypeScript`, and `Tailwind CSS`.
- Main preview entry: `app/page.tsx`
- Reusable shell and primitives: `components/layout/*`, `components/ui/*`

## Getting started

- Use `Node 22` for the most reliable local setup.
- If you use `nvm`, run `nvm use` from the project root.
- Install dependencies with `npm install`
- Run locally with `npm run dev:local`
- Validate production build with `npm run build`
- Run the production server with `npm run start:local`

## Notes

- No Python virtual environment is needed for this frontend scaffold.
- The project now includes the full landing, admin, and employee product flow.
