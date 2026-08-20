# Developer Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing Next.js portfolio with an Astro 7 static portfolio that serves hiring and technical audiences through Home, Work, Lab, About, and Contact pages.

**Architecture:** Use Astro pages and layouts for static structure, typed content collections for MDX case studies and lab notes, and isolated client islands only for theme and intentional visual interaction. Use shared tokens and component-scoped styles to keep the visual system consistent.

**Tech Stack:** Astro 7.x, TypeScript, MDX content collections, scoped CSS, native CSS/View Transitions, GitHub Actions, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-08-20-developer-portfolio-rebuild-design.md`

## Global Constraints

- Use Astro 7.x with static output for GitHub Pages.
- Use MDX content collections for work and lab content.
- Keep runtime JavaScript limited to deliberate client islands.
- Use the Ink, Paper, Fog, Signal, Current, and Rule palette from the spec.
- Respect responsive layout, keyboard focus, semantic HTML, and reduced motion.
- Do not preserve the Next.js runtime as a compatibility layer.

---

### Task 1: Replace Next.js scaffolding with Astro 7

**Files:**
- Create: `astro.config.mjs`, `src/env.d.ts`, `src/pages/index.astro`, `src/styles/global.css`
- Modify: `package.json`, `tsconfig.json`, `README.md`
- Delete after migration: `app/`, `next.config.mjs`, `next-env.d.ts`, `postcss.config.json`, `env-config.js`

**Interfaces:**
- Produces the Astro build entrypoint and global CSS tokens used by all later tasks.

- [ ] **Step 1: Replace package scripts and dependencies**

Set `package.json` to use `astro@latest`, `@astrojs/mdx`, `@astrojs/sitemap`, TypeScript, and only dependencies needed by the new site. Set `dev`, `build`, and `preview` scripts to Astro commands.

- [ ] **Step 2: Add Astro configuration**

Configure `site: 'https://rkkmkkfx.github.io'`, static output, MDX, sitemap, and view transitions. Do not set a repository base because this is a `username.github.io` repository.

- [ ] **Step 3: Add global tokens and baseline styles**

Create CSS variables for the approved palette, type roles, spacing, focus ring, and motion timing. Add reset, selection, scrollbar, link, focus-visible, and reduced-motion rules.

- [ ] **Step 4: Install dependencies and run the empty build**

Run `npm install` and `npm run build`. Expected: Astro generates `dist/` with the index route and no TypeScript errors.

- [ ] **Step 5: Commit the migration foundation**

Run `git add package.json package-lock.json astro.config.mjs tsconfig.json src README.md` and commit with `feat: migrate portfolio foundation to astro`.

### Task 2: Add typed MDX content collections and shared shell

**Files:**
- Create: `src/content.config.ts`, `src/content/work/ircharts.mdx`, `src/content/work/anychart.mdx`, `src/content/work/cirql8.mdx`, `src/content/work/fresh-tourism.mdx`, `src/content/lab/first-principles.mdx`
- Create: `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, `src/components/SectionLabel.astro`, `src/components/Reveal.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- `work` entries expose `title`, `year`, `role`, `summary`, `outcome`, `tags`, `url`, and `image`.
- `lab` entries expose `title`, `date`, `status`, `summary`, and `tags`.
- `BaseLayout.astro` accepts `title`, `description`, and optional `dark` props.

- [ ] **Step 1: Define collection schemas**

Use Astro’s content collection schema validation with Zod-compatible fields. Require all metadata needed by cards and detail pages so missing content fails at build time.

- [ ] **Step 2: Convert existing work data to MDX**

Use the current `app/lib/data.ts` projects and public images as source material. Write concise outcome-led summaries and richer case-study sections without inventing numerical results.

- [ ] **Step 3: Build the shared layout**

Add semantic document metadata, skip link, global navigation, current-page state, theme control, and footer links. Navigation must work without JavaScript.

- [ ] **Step 4: Build reusable section primitives**

Add a small section label and reveal wrapper with no dependency on a global animation runtime. Reveal styles must become static when reduced motion is enabled.

- [ ] **Step 5: Run content validation and build**

Run `npm run build`. Expected: all collection entries validate and all shared components compile.

### Task 3: Build the Home page and signature interaction

**Files:**
- Create: `src/components/SystemMap.astro`, `src/components/WorkPreview.astro`, `src/components/CapabilityStrip.astro`, `src/pages/index.astro`, `src/pages/contact.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- `SystemMap.astro` renders a responsive, accessible animated system map with a static fallback.
- `WorkPreview.astro` receives a list of validated work entries and links to detail pages.

- [ ] **Step 1: Build the hero thesis**

Use direct copy positioning Sergey as a senior builder who turns complex systems into clear, useful products. Place the system map beside the thesis on desktop and below it on mobile.

- [ ] **Step 2: Implement the system map**

Use semantic SVG/CSS rather than WebGL. Animate a small sequence of nodes from intent to interface to shipped work. Include an accessible text explanation and disable looping motion under reduced-motion.

- [ ] **Step 3: Add proof sections**

Render capability strip, selected work, lab preview, and a direct contact CTA. Keep the first viewport understandable without waiting for animation.

- [ ] **Step 4: Add contact page**

Provide direct email and external links with a short collaboration prompt. Do not add a backend form.

- [ ] **Step 5: Build and inspect responsive routes**

Run `npm run build`, then run `npm run dev -- --host 127.0.0.1` and inspect `/` and `/contact` at mobile and desktop widths.

### Task 4: Build Work, Lab, and About pages

**Files:**
- Create: `src/pages/work/index.astro`, `src/pages/work/[slug].astro`, `src/pages/lab/index.astro`, `src/pages/lab/[slug].astro`, `src/pages/about.astro`, `src/components/WorkCard.astro`, `src/components/CaseStudy.astro`, `src/components/LabCard.astro`

**Interfaces:**
- Dynamic pages use `getCollection()` and `getStaticPaths()` with typed entry data.
- `CaseStudy.astro` renders MDX content with consistent headings, metadata, and related-work links.

- [ ] **Step 1: Build Work index and cards**

Create an outcome-led grid/list with tags, year, and role. Use image dimensions and alt text from collection metadata.

- [ ] **Step 2: Build Work detail routes**

Render MDX content with context, contribution, constraints, technical decisions, and result sections. Add previous/next navigation where applicable.

- [ ] **Step 3: Build Lab index and detail routes**

Render lab entries as a chronological stream with status labels and MDX detail pages.

- [ ] **Step 4: Build About page**

Add personal narrative, collaboration fit, current tools, and a compact timeline without turning the page into a résumé dump.

- [ ] **Step 5: Verify all static routes**

Run `npm run build` and assert that the generated output contains Home, Work, Work detail, Lab, Lab detail, About, and Contact routes.

### Task 5: Add deployment, accessibility, and final verification

**Files:**
- Create: `.github/workflows/deploy.yml`, `public/CNAME`
- Modify: `README.md`, `src/styles/global.css`, `astro.config.mjs`

**Interfaces:**
- GitHub Actions builds the static site with Node 22 and deploys `dist/` to GitHub Pages.

- [ ] **Step 1: Add GitHub Pages workflow**

Use Astro’s official GitHub Pages action pattern with contents read, pages write, and id-token write permissions. Build on pushes to `main` and manual dispatch.

- [ ] **Step 2: Configure custom domain**

Preserve the existing deployment contract by adding `rkkmkkfx.dev` to `public/CNAME` and setting Astro `site` to `https://rkkmkkfx.dev`. Do not set a repository base because the repository uses the `username.github.io` root-domain pattern.

- [ ] **Step 3: Run quality checks**

Run `npm run build`, `git diff --check`, and a route/link scan against the generated `dist/`. Verify no page relies on JavaScript for core navigation or content.

- [ ] **Step 4: Review reduced motion and keyboard paths**

Use browser inspection to tab through the site, test the theme control, and confirm the system map has a readable static presentation with reduced motion.

- [ ] **Step 5: Commit the completed rebuild**

Run `git add .` and commit with `feat: rebuild portfolio with astro 7` after the build and visual checks pass.
