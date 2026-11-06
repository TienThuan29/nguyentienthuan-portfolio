# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Nguyễn Tiến Thuận, built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, and HeroUI (`@heroui/react`). Originally scaffolded from the "Typefolio" Next.js template (see README.md) but has since been substantially rewritten.

## Commands

```bash
npm run dev      # start dev server with Turbopack on http://localhost:3111
npm run build    # static export to out/ (`npm run start` does NOT work with output: "export")
npm run lint     # eslint .
npx tsc --noEmit -p tsconfig.json   # type-check only (no test runner is configured)
```

There is no test suite in this repo — verification is via `tsc --noEmit`, `eslint`, and `next build`.

**Deployment: GitHub Pages, static export.** `.github/workflows/deploy.yml` runs lint + tsc + build on every push to `main` and publishes `out/` to <https://tienthuan29.github.io/nguyentienthuan-portfolio/>. `next.config.ts` sets `output: "export"`, `images.unoptimized`, and `basePath` from `NEXT_PUBLIC_BASE_PATH` (CI sets `/<repo-name>`; empty locally). Consequences: no server-side features (dynamic route handlers, middleware, ISR, image optimization), and any raw `/public` path in `next/image` `src` or a plain `<a href>` must be prefixed with `basePath` from `portfolio-data.ts` — Next only adds it automatically for `next/link` and its own assets. To test a Pages build locally on Windows, set the env var from PowerShell (Git Bash rewrites `/foo` into a Windows path).

When redoing a build after deleting/renaming files under `src/app/`, stale Next.js route types can linger in `.next/` and cause phantom `tsc` errors referencing deleted files; `rm -rf .next` before re-checking if that happens.

## Architecture

**Single-page app, one source of truth for content.** The entire site is one route (`src/app/page.tsx`) that renders `PortfolioShowcase` (`src/app/components/home/portfolio-showcase/index.tsx`) — a large single-file component containing every section (hero, about + skills, experience, certifications, research papers, education + awards, contact) as in-page anchors (`#top`, `#about`, `#experience`, `#certifications`, `#research`, `#education`, `#contact`). Certificate PDFs and their WebP previews live in `public/certs/<exam-code>.{pdf,webp}`; previews are pre-rendered once (cropped page 1 of each PDF, 1200px wide) and committed — re-render when adding a certificate. `Header` and `Footer` (`src/app/components/layout/`) wrap it via `src/app/layout.tsx`. The only client component on the page is `portfolio-showcase/outline-nav.tsx`: a margin outline (built from `navItems`) shown from `min-[90rem]`, where the header's own nav hides. Write custom breakpoints in `rem`, not `px` — Tailwind v4 sorts `min-[1440px]` *before* `xl` (80rem), so `xl:flex` would win.

All portfolio content — profile info, links, skills, featured work, experience, research papers, education, certificates, awards, side projects, nav items — lives as typed constants in `src/lib/portfolio-data.ts`. This is the single place to edit when updating resume/CV content; `PortfolioShowcase` and `Header` import directly from it (no fetch, no CMS). Cross-referenced link constants (`portfolioLinks`) are reused across `featuredWork`/`experience`/`researchPapers` entries rather than hardcoded per-item.

**`src/app/components/home/` contains legacy/unused pieces alongside the live ones.** Only `hero-section`, `about-me`, `education`, and `portfolio-showcase` are still referenced; `portfolio-showcase` duplicates the hero/about/experience content inline rather than composing those smaller components. Before adding new sections, check whether something already exists under `components/home/` and whether it's actually imported anywhere (`page.tsx` → `PortfolioShowcase` is the only entry point) — don't assume a component is live just because it exists.

**Hooks fetch from internal API routes, not directly from `portfolio-data.ts`.** `src/hooks/useEducation.ts` calls `GET /api/page-data` (`src/app/api/page-data/route.ts`), which derives `educationData` (and some now-unused `experienceData`/`projectOverview` shapes) from `portfolio-data.ts` at build time (`force-static`). `PortfolioShowcase` itself does not use these hooks/routes — it imports `portfolio-data.ts` directly.

**Styling**: Tailwind v4 with CSS custom properties defined in `src/app/globals.css` (`@theme inline` + `:root` tokens: `--background`, `--foreground`, `--primary`, `--accent`, etc.), plus HeroUI's own styles (`@heroui/styles`) and `tw-animate-css`. `components.json` configures shadcn-style aliases (`@/components`, `@/lib`, `@/hooks`, `@/components/ui`) even though no `src/components/ui` currently exists — new shadcn-style primitives would go there. Utility class merging goes through `cn()` in `src/lib/utils.ts` (`clsx` + `tailwind-merge`).

**Icons**: `src/app/components/svg-icons/index.tsx` re-exports most icons from `lucide-react` and hand-rolls a few brand icons (`GitHubBrandIcon`, `LinkedInBrandIcon`, `FacebookBrandIcon`, etc.) not available in lucide. Prefer importing icons from `@/app/components/svg-icons` rather than `lucide-react` directly, for consistency.

**Fonts**: `Be_Vietnam_Pro` (sans, supports Vietnamese subset) and `JetBrains_Mono` (mono) are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables (`--font-be-vietnam`, `--font-jetbrains`) consumed by `globals.css`.

## Content notes

- Site copy is a mix of English and Vietnamese; keep this convention when editing (e.g. component/prop names and comments in English, some UI copy in Vietnamese where already present).
- `my-info/` holds the raw CV source files. The downloadable CV is the static file `public/Nguyen_Tien_Thuan_CV.pdf`, linked via `portfolioLinks.cv` — keep that filename in sync if it changes.
