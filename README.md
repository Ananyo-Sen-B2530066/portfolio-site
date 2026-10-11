# Ananyo Sen — Portfolio

Personal portfolio of **Ananyo Sen**, a Data Science & AI student at RKMVERI. Built with Vite, Tailwind CSS v4, and vanilla JavaScript. Live at [ananyosenportfolio.netlify.app](https://ananyosenportfolio.netlify.app).

## Tech Stack

- [Vite](https://vitejs.dev/) — dev server & build tool
- [Tailwind CSS](https://tailwindcss.com/) v4 (via `@tailwindcss/vite` plugin)
- Vanilla JS (`src/main.js`) — no framework
- Deployed on [Netlify](https://www.netlify.com/)

## Features

- Dark, responsive, single-page layout
- Animated skill bars, marquee tech strip, and scroll-reveal sections
- Itinerary of projects, fests (used live at Perceptron), coursework, certifications, courses-in-progress, and hobbies
- `activeWork` section — a live "currently building / learning" tracker renderer (auto-hides when empty)
- Cloudflare Web Analytics (free; replace `YOUR_CF_ANALYTICS_TOKEN` in `index.html` after creating the site)
- SEO: meta tags, Open Graph / Twitter cards, `sitemap.xml`, `robots.txt`, Google site verification

## Local Development

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`, which is what Netlify publishes.

## Deploy

The repo includes `netlify.toml` — Netlify auto-detects it, so no manual build settings are required:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

After importing the repo, keep the site name as **`ananyosenportfolio`** (Site settings → General → Change site name) so the Plausible domain and Open Graph URLs keep working. Every `git push` to the main branch auto-deploys.

## Content & Customisation

- All content lives in `src/data.js` — projects, tech stack, courses, certifications, hobbies, `activeWork`, social links.
- Static sections (hero, skills, layout, meta tags, Plausible script) live in `index.html`.
- Rendering logic lives in `src/main.js`.
- Static assets (profile image, CV, certificates, `og-banner.png`, favicon) live in `public/`.
- `activeWork` entries: fill in the `update`, `date`, and `link` fields in `src/data.js`. Cards render a link button only when `link` is present.

## Structure

```
├── index.html          # page markup, meta tags, sections
├── netlify.toml        # Netlify build config
├── public/             # static assets (images, cv, certificates, sitemap)
├── src/
│   ├── data.js         # all content data
│   ├── main.js         # render logic & interactions
│   └── style.css       # Tailwind v4 styles & custom CSS
└── vite.config.js      # Vite + Tailwind plugin config
```
