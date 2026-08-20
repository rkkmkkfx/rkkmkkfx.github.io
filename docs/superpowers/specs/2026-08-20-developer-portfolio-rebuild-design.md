# Developer Portfolio Rebuild Design

## Intent

Rebuild `rkkmkkfx.github.io` as a distinctive developer portfolio that serves two audiences at once: people looking for a senior engineer to hire and engineers evaluating technical depth. The site should feel authored, fast, and memorable rather than like a generic portfolio template.

## Positioning

The site presents Sergey as a senior builder: someone who can shape a product, make strong technical decisions, and explain the work clearly. The homepage sells confidence and clarity; the Work and Lab sections provide evidence.

## Technology direction

- Astro 7.x with static output for GitHub Pages.
- TypeScript for data and component contracts.
- Astro content collections with MDX for case studies and lab notes.
- Scoped Astro CSS and shared design tokens; avoid a utility framework unless a specific need appears.
- Native CSS animation and view transitions as the default motion layer.
- Small client-side islands only for experiences that genuinely require runtime interaction: theme preference, pointer/scene interaction, filtering, or an embedded experiment.
- Astro image/font tooling and sitemap support.
- GitHub Actions for build and deployment.

The implementation should not preserve the current Next.js runtime as a compatibility layer. The existing Next app is content and asset source material for the new Astro structure.

## Information architecture

### Home

The homepage is the thesis: a direct statement of what Sergey builds, an animated proof-of-craft scene, a short capability band, selected work, and a clear contact action. It should make both audiences understand the value proposition within the first viewport.

### Work

An index of selected projects with concise outcome-led cards. Each project links to an MDX case study with context, contribution, constraints, technical decisions, and result.

### Lab

A lightweight stream of experiments, prototypes, and technical notes. This is the credibility layer for engineers and the place to show current thinking without turning the homepage into a résumé.

### About

A compact personal story, working style, current tools, and collaboration fit. It should feel human and specific, not like a list of generic soft skills.

### Contact

A simple direct route to start a conversation, with email and relevant external links. No unnecessary form backend is required for the first version.

## Visual system

### Direction

“Precision instrument for human work.” The visual language combines editorial calm with visible systems thinking. The signature device is an animated system map that connects a person’s intent to shipped interface, using restrained motion and a small number of meaningful states.

### Palette

- Ink — `#111214`: primary background and deep contrast.
- Paper — `#F1F0EB`: primary text and light surfaces.
- Fog — `#A9AAA5`: secondary text and quiet labels.
- Signal — `#FF6A3D`: calls to action and active system state.
- Current — `#72A7FF`: links, data accents, and hover energy.
- Rule — `rgba(241, 240, 235, 0.16)`: structural dividers.

### Typography

Use a condensed, characterful display face for the hero thesis and section statements; use a neutral grotesk for body copy and navigation; use a compact mono utility face only for metadata, labels, and technical annotations. Typography should carry hierarchy before decorative elements do.

### Layout

Use an editorial grid with wide margins, asymmetric hero composition, hard alignment lines, and controlled full-bleed moments. Cards should use square or lightly clipped geometry rather than a universal rounded-card system. Motion should reveal structure, not decorate every element.

## Motion system

- One orchestrated first-load reveal for the hero: type enters, the system map resolves, then supporting proof appears.
- Scroll reveals use short distance and opacity changes with stagger only where hierarchy benefits.
- Work cards respond to pointer movement with subtle image parallax and signal-line emphasis.
- Page transitions use Astro’s transition system with reduced-motion fallbacks.
- `prefers-reduced-motion: reduce` disables nonessential transforms and looping motion.
- Every interactive control has visible keyboard focus and a non-pointer equivalent.

## Content model

Create typed collections for `work` and `lab` entries. Work entries include title, year, role, summary, outcome, tags, external URL, cover image, and MDX body. Lab entries include title, date, status, tags, summary, and MDX body. The content schema must reject missing required metadata at build time.

## Migration boundary

Replace the current `app/` Next.js tree with an Astro `src/` tree. Reuse suitable public imagery and identity assets after reviewing their fit in the new visual system. Remove obsolete React-only dependencies, old Next configuration, and the current theme implementation once the Astro replacement is verified.

## Quality bar

- Fully responsive from small mobile through wide desktop.
- Strong semantic HTML, keyboard navigation, visible focus, and reduced-motion support.
- Static build succeeds locally and in GitHub Actions.
- Images have meaningful alt text and appropriate dimensions.
- No interaction is required to understand the core content.
- The design remains recognizable without animation.

## Out of scope for the first rebuild

- CMS integration.
- Authentication, server routes, or database-backed features.
- A full 3D/WebGL scene that increases load or becomes the visual itself.
- Rewriting project history or changing deployment settings outside the repository.
