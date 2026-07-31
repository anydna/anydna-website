# AnyDNA — Website

Marketing site for **AnyDNA Limited**, built with [Astro](https://astro.build) and
deployed to **GitHub Pages** at `https://www.anydna.co.uk`.

Minimal, scientific, fast: no runtime JavaScript framework, self-hosted fonts, no
external requests, no cookies, no trackers.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the production build locally
```

Requires Node 18+ (developed on Node 20/26).

---

## Editing content

Almost everything lives in one file: **`src/data/site.ts`**.

| What you want to change | Where |
| --- | --- |
| Prices / tiers | `priceRows` and `priceTiers` |
| Services (cards) | `services` |
| FAQs | `faqs` |
| Home workflow steps | `workflow` |
| Home stat band | `proofPoints` |
| Email, company no., address, dates | `site` |
| Navigation links | `nav` |

Page layouts are in `src/pages/*.astro`; shared shell in `src/layouts/Base.astro`;
header/footer/icons in `src/components/`. Global styling and the colour palette are
in `src/styles/global.css` (see the CSS variables at the top — change `--accent`,
`--brand`, etc. to re-theme the whole site).

**Logo:** `public/anydna-logo-black.png` (header) and `public/anydna-logo-white.png`
(footer). Replace these files to update the logo. `public/favicon.svg` is the tab icon.

**Updating prices each quarter:** edit the numbers in `priceRows` and the
`pricesValidUntil` date in `site`, then commit — the site rebuilds automatically.

---

## Deployment (GitHub Pages)

Deployment is automatic via GitHub Actions (`.github/workflows/deploy.yml`): every
push to the `main` branch builds the site and publishes it.

### One-time GitHub setup

1. Create the repo under the company GitHub account and push this project to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main` (or use **Actions → Deploy to GitHub Pages → Run workflow**). The
   first run publishes the site.
4. Back in **Settings → Pages → Custom domain**, enter `www.anydna.co.uk` and save.
   (The `public/CNAME` file already sets this, but entering it here triggers GitHub's
   domain verification.) Once DNS is live, tick **Enforce HTTPS**.

---

## DNS setup at Namecheap

Domain: `anydna.co.uk`, managed at **Namecheap → Domain List → Manage → Advanced DNS**.

> We point DNS **at** GitHub so it *serves* the site directly (with free HTTPS).
> Do **not** use Namecheap's "URL Redirect" record — that would break HTTPS and bounce visitors.

Add these records:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| CNAME Record | `www` | `<GITHUB_ORG>.github.io.` | Automatic |
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |

- Replace `<GITHUB_ORG>` with the company GitHub username/org (e.g. `anydna.github.io`
  if the org is `anydna`).
- The four `A` records on `@` make the bare `anydna.co.uk` also work; GitHub will
  redirect it to `www.anydna.co.uk` (the canonical domain set in `public/CNAME`).
- **Remove** any existing Namecheap "Parking" or default `CNAME`/`A`/URL-Redirect
  records for `@` and `www` first, or they'll conflict.
- **Leave your `MX` and other Google Workspace email records untouched** — this only
  changes web (`@`/`www`) records, not email.

DNS can take from a few minutes up to ~24 hours to propagate. After it resolves,
enable **Enforce HTTPS** in GitHub Pages settings.

### Optional: also add IPv6 (AAAA) records

| Type | Host | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

---

## Notes

- Contact is a `mailto:` link to `contact@anydna.co.uk` — no backend, no form service.
- `@astrojs/sitemap` generates `sitemap-index.xml` at build; `robots.txt` points to it.
- Company details and structured data (schema.org Organization/FAQ) come from
  `src/data/site.ts` and `src/layouts/Base.astro`.
