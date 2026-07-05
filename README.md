# Traceline Marketing Website

Static site — no build step, no framework, no backend. `index.html`,
`support.html`, `docs/` (the user guide), `css/`, `js/`. Deployable as-is
to GitHub Pages, Netlify, Vercel, or any static host.

## Structure

- `index.html` — landing page
- `support.html` — Supporter donation page
- `docs/` — the full app guide (9 pages: overview, installation, core
  concepts, test cases, test execution, requirements & issues, AI
  features, integrations & API, administration), sharing a JS-injected
  sidebar (`js/docs-nav.js`) and its own stylesheet (`css/docs.css`)
  layered on top of `css/style.css`'s tokens

## Local preview

```bash
php -S localhost:8898
```

## Before going live

- Replace `[ dashboard screenshot ]` placeholder in the hero `.frame` with
  a real product screenshot.
- Replace every `github.com/traceline-project/traceline` URL with the real
  repo once it exists.
- `support.html`'s donate button currently shows an honest "not wired up
  yet" notice instead of a real checkout. The license-issuing backend
  (`traceline-license-server`) is now built and has a real Stripe Payment
  Link slot (`STRIPE_PAYMENT_LINK_URL` in its `.env`) — once that's live,
  swap the `#donate-btn` click handler in `support.html` for a direct link
  to it instead of showing the placeholder notice.
- Update `support@traceline.dev` to a real inbox you're monitoring, and
  the footer copyright year/domain once a real domain is registered.
- Keep `docs/` in sync with the app: if a feature's behavior changes
  (keyboard shortcuts, CSV column names, API request shape, etc.), the
  corresponding docs page needs a matching update — it was written by
  reading the actual controller/view code, not guessed.

## Design tokens

All colors, spacing, and shadows are CSS custom properties at the top of
`css/style.css` — the accent (`--accent: #4f6ef7`) matches the app's own
brand color so the marketing site → login → dashboard journey feels
consistent.
