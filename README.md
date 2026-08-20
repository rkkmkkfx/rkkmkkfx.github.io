# rkkmkkfx.dev

Personal portfolio for Sergey Baranov, built with Astro 7 and MDX.

## Development

```bash
npm install
npm run dev
```

Build the static site with `npm run build`. The generated files are written to `dist/`.

## Content

Case studies live in `src/content/work/` and lab notes live in `src/content/lab/`. Each entry is an MDX file validated by the schemas in `src/content.config.ts`.

## Deployment

Pushes to `main` deploy through GitHub Actions to GitHub Pages. The custom domain is configured through `public/CNAME`.
