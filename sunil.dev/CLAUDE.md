# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `sunil.dev/`:

```bash
npm run dev    # dev server → http://localhost:3000
npm run build  # production build — run this to verify before finishing any task
npm run lint   # ESLint
```

## Next.js 16 warning

This project uses **Next.js 16.2.4**, which has breaking changes vs prior versions. Before writing any routing, data-fetching, or component code, check the docs at:

```
node_modules/next/dist/docs/01-app/
```

Differences already in use here:
- `params` is a `Promise` — always `await params` before destructuring
- View Transitions API via `experimental.viewTransition: true` in `next.config.ts`
- Turbopack is the default bundler (no webpack config)
- Tailwind v4 uses `@import 'tailwindcss'` — **not** the v3 `@tailwind` directives

## Architecture

### Two-panel layout

`layout.tsx` → `h-full flex-col lg:flex-row` container:
- `<HomeSidebar />` — first in DOM (sticky top bar on mobile); `lg:order-last` pins it to the right on desktop
- `<main>` — `flex-1 overflow-y-auto`, the **only** scrollable element; `html`/`body` have `overflow: hidden`
- `{children}` is wrapped in `<ViewTransition name="main-content">` for crossfade page transitions

### Content (hardcoded TypeScript, no CMS)

| File | Contents |
|------|----------|
| `app/content/logs.ts` | Blog posts array + `getAllLogs`, `getLogBySlug`, `formatDate`, `formatPostedAt` |
| `app/content/projects.ts` | Projects array with image/gif paths, tags, status |
| `app/content/skills.ts` | `SKILL_GROUPS` (tabbed bars) + `SKILL_EXTRAS` (pill cloud) |

### Key components

- `GitHubContributionGrid` — **async server component**; fetches GitHub GraphQL API when `GITHUB_TOKEN` env var is set, deterministic mock otherwise. Cache: `revalidate: 3600`. Username hardcoded as `Sunilpaul16`.
- `ProjectCard` — **client component** (hover gif↔png swap needs state)
- `HomeSidebar` — **client component** (`usePathname` for active-link dot/underline)

### GitHub API setup

Add to `.env.local`:
```
GITHUB_TOKEN=your_personal_access_token
```

### Styling conventions

- Card base: `rounded-xl border border-zinc-200/80 bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/40`
- Pill/tag: `rounded-md border border-zinc-200/80 bg-zinc-100/80 px-2 py-0.5 text-xs`
- Hover lift: `hover:-translate-y-px hover:shadow-md hover:shadow-zinc-950/5`
- View transition names in use: `main-content` (page area), `site-nav` (sidebar — suppressed during transitions)
- Section labels: `text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-600`
