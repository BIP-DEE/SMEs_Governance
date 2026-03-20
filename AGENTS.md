# Project guidance for Codex

## Default workflow

- For any task involving UI, UX, layout, visual polish, onboarding, dashboards, auth pages, settings, landing pages, or responsive refinement, use the `startup-ui-ux-design` skill.
- The canonical skill source for this repo is at `.agents/skills/startup-ui-ux-design/SKILL.md`.
- Preserve working product logic unless I explicitly ask for behavior changes.
- Prefer one strong default theme unless I explicitly ask for multiple themes.
- Avoid generic AI-looking layouts, repetitive card grids, filler text, and weak hierarchy.
- Make the UI feel production-ready and aligned across pages.
- Before implementation, think through at least 3 real design directions internally, then implement the strongest final direction.

## Frontend quality bar

- Keep spacing, radii, shadows, and typography consistent.
- Ensure loading, empty, error, disabled, hover, and focus states are handled where relevant.
- Maintain responsive behavior across desktop, tablet, and mobile.
- Do not leave broken routes, blank pages, or incomplete views after redesign.

## Output expectations

- Explain the key UX issues briefly.
- State the chosen design direction.
- Implement the result cleanly and cohesively.
- Self-check alignment, spacing, hierarchy, and responsiveness before finishing.

## Skill usage note

- If the `startup-ui-ux-design` skill is installed in Codex, use it by default for UI/UX work in this repo.
- If the installed skill is unavailable, fall back to the repo copy at `.agents/skills/startup-ui-ux-design/SKILL.md` as project guidance.
