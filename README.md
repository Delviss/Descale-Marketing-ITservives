# Descale Agency

A self-owned, platform-independent marketing site for Descale Agency. Originally scaffolded on Rocket.new / DhiWise, this codebase has been **fully audited and extracted** — every vendor runtime hook, proprietary tagger, and lock-in dependency has been removed. The project can be hosted anywhere: Vercel, Netlify, AWS, a VPS, or your own Docker host.

## Tech stack

| Layer      | Choice                                      |
| ---------- | ------------------------------------------- |
| Framework  | React 18 + Vite 5                           |
| Routing    | React Router v6                             |
| Styling    | Tailwind CSS v3 with CSS custom properties  |
| UI         | Custom components (Radix Slot, CVA)         |
| Icons      | lucide-react                                |
| Charts     | recharts                                    |
| Meta       | react-helmet-async                          |
| Animation  | framer-motion                               |
| Forms      | react-hook-form                             |
| Deployment | Dockerfile · docker-compose · Vercel · Netlify |

No backend, no database, no auth — this is a pure static marketing site. Deploy the contents of `build/` to any CDN or static host.

## Local development

```bash
# 1. install deps
npm install

# 2. copy env template
cp .env.example .env.local

# 3. run dev server
npm run dev          # http://localhost:4028
```

## Scripts

| Command          | Purpose                            |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Vite dev server on port 4028       |
| `npm run build`  | Production build to `./build`      |
| `npm run preview`| Serve the production build locally |

## Environment variables

All runtime-visible variables must be prefixed with `VITE_` (Vite convention).

| Variable                    | Required | Description                           |
| --------------------------- | -------- | ------------------------------------- |
| `VITE_SITE_URL`             | no       | Canonical site URL (used in metadata) |
| `VITE_CONTACT_FORM_ENDPOINT`| no       | POST target if wiring a backend       |
| `VITE_PLAUSIBLE_DOMAIN`     | no       | Plausible analytics domain            |
| `VITE_UMAMI_WEBSITE_ID`     | no       | Umami analytics website ID            |

Never commit `.env.local`. Only `.env.example` should be tracked.

## Project structure

```
descale_agency/
├── Dockerfile                ← production container (nginx + SPA fallback)
├── docker-compose.yml        ← one-command self-host
├── nginx.conf                ← SPA routing, caching, security headers
├── vercel.json               ← Vercel deploy config
├── netlify.toml              ← Netlify deploy config
├── vite.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── index.html                ← no vendor scripts injected
├── public/                   ← favicon, manifest, robots, og-image
└── src/
    ├── App.jsx               ← wraps HelmetProvider + theme hook
    ├── Routes.jsx            ← React Router v6 route table
    ├── index.jsx             ← entry point
    ├── components/
    │   ├── ui/               ← Button, Input, Select, Checkbox, Header
    │   ├── AppIcon.jsx
    │   ├── AppImage.jsx
    │   ├── ErrorBoundary.jsx
    │   └── ScrollToTop.jsx
    ├── hooks/
    │   └── useTheme.js       ← light/dark theme + system preference
    ├── pages/
    │   ├── homepage/
    │   ├── about-experience/
    │   ├── services-hub/
    │   ├── work-portfolio/
    │   ├── interactive-taxi-ads-innovation-lab/
    │   ├── growth-assessment-contact/
    │   └── NotFound.jsx
    ├── styles/
    │   ├── tailwind.css      ← design tokens, light/dark, keyframes
    │   └── index.css
    └── utils/
        └── cn.js             ← classnames helper (clsx + tailwind-merge)
```

## Deployment

### Vercel

```bash
npm i -g vercel
vercel deploy --prod
```

`vercel.json` handles SPA rewrites, asset caching, and security headers.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

`netlify.toml` handles the same.

### Docker (self-hosted)

```bash
# single container
docker build -t descale-agency .
docker run --rm -p 8080:80 descale-agency

# or compose
docker compose up -d --build
# open http://localhost:8080
```

### Static host (S3 / R2 / any CDN)

```bash
npm run build
# upload ./build to your bucket; configure SPA fallback to /index.html
```

## Design system

Tokens live in `src/styles/tailwind.css` as CSS custom properties and are consumed by `tailwind.config.js`. Dark mode toggles via the `.dark` class on `<html>`, managed by `src/hooks/useTheme.js` with respect for `prefers-color-scheme`.

- **Palette:** brand red (`#A72906`), deep blue (`#0649A7`), accent orange (`#FF6B35`)
- **Typography:** Space Grotesk (display), Plus Jakarta Sans (body), JetBrains Mono (accent)
- **Radii:** 4 / 8 / 12 / 20 / full
- **Motion:** `cubic-bezier(0.22, 1, 0.36, 1)`, reduced-motion aware

## What was removed

- `https://static.rocket.new/rocket-web.js` runtime injection
- `@dhiwise/component-tagger` Vite plugin
- `<div class="dhiwise-code">` branding
- `rocketCritical` vendor-enforced dependency block
- `.builtwithrocket.new` allowed-hosts entry
- Rocket.new acknowledgments
- Unused dependencies: `redux`, `@reduxjs/toolkit`, `d3`, `dotenv`, `react-router-hash-link`, `@tailwindcss/forms`, `@tailwindcss/aspect-ratio`, `@tailwindcss/container-queries`, `@tailwindcss/line-clamp`, `@tailwindcss/typography`, `tailwindcss-elevation`, `tailwindcss-fluid-type`, `@testing-library/*`, `date-fns`, `axios`
- `react-helmet` (deprecated) → replaced by `react-helmet-async`

## License

UNLICENSED — private project.
