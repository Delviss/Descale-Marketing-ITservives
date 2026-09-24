# Deployment notes

## GitHub Pages (current production host)

The site is a static build (`npm run build`) deployed via `.github/workflows/deploy-pages.yml`
to GitHub Pages on the apex domain `https://descale.services`. GitHub Pages has no way to set
custom HTTP response headers, so security headers (HSTS, CSP, etc.) cannot be added from this
repository alone.

### Recommended: put Cloudflare in front of GitHub Pages

Point the `descale.services` DNS records at Cloudflare (proxied/orange-cloud), keep GitHub Pages
as the origin, and add a Cloudflare **Transform Rule** (or a Worker) that sets these response
headers on every request:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://assets.calendly.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com https://calendly.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://api.web3forms.com https://calendly.com https://assets.calendly.com; frame-src https://calendly.com; base-uri 'self'; form-action 'self' https://api.web3forms.com
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Notes on the CSP allowlist:
- `assets.calendly.com` / `calendly.com` — the booking widget (`src/components/FloatingWidgets/CalendlyBadge.jsx`).
- `www.googletagmanager.com` / `www.google-analytics.com` — GA4, loaded only after cookie
  consent (`src/utils/analytics.js`). If a GTM container is added later instead of GA4 directly,
  also allow `https://www.googletagmanager.com` for `script-src` (already listed) and
  `https://*.g.doubleclick.net` only if remarketing/Ads conversion tracking is added.
- `fonts.googleapis.com` / `fonts.gstatic.com` — Google Fonts (`index.html`).
- `api.web3forms.com` — the contact-form relay (`src/utils/emailService.js`), only reached if
  `VITE_WEB3FORMS_KEY` is set.
- `'unsafe-inline'` on `script-src` is needed for the inline `<script type="application/ld+json">`
  JSON-LD blocks and the print-media font-swap `onload` handler in `index.html`. Tightening this
  further would require moving those to nonces/hashes, which Cloudflare Transform Rules can't
  inject per-request — a Cloudflare Worker would be needed instead if this is a priority.

`netlify.toml` in this repo already ships an equivalent header set for a Netlify deployment (not
currently used in production, but kept in sync in case the site is ever moved there or used as a
staging environment).

### Manual step — confirm "Enforce HTTPS"

**This cannot be set from code.** In the repository's GitHub Settings → Pages, confirm
"Enforce HTTPS" is checked once the apex domain's SSL certificate has provisioned. If it's
greyed out, GitHub Pages hasn't finished issuing the certificate for the custom domain yet —
wait and retry.

### Custom domain / CNAME

`public/CNAME` (containing `descale.services`) is now checked into the repo, so every deploy
ships it as part of the build output and the GitHub Pages custom-domain setting can't be silently
dropped by a future Pages configuration change. No manual step needed here — just confirm in
GitHub Settings → Pages that the custom domain still reads `descale.services` after the next
deploy.

## Search Console / sitemap

After deploying, re-submit `https://descale.services/sitemap.xml` in Google Search Console (and
Bing Webmaster Tools) — the sitemap's URLs changed from the `www` host to the apex, `/marketing`
was removed in favor of `/`, and five previously-missing routes (`/projects`, `/help`, `/moveads`
and its subpages) were added. Google won't pick these changes up until the sitemap is re-crawled.
