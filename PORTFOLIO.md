# Ahmed Adel Serag — Studio portfolio

Static, bilingual portfolio for GitHub Pages. No package installation or build is needed.

## Files

- `index.html`: semantic page structure, public work, project story, expertise, and contact links.
- `styles.css`: responsive Studio visual design and Arabic RTL layout.
- `script.js`: English/Arabic switching, local language preference, mobile navigation, and approved private-project summaries.
- `assets/ahmed-serag.jpg`: web-optimized portrait. The supplied portrait was edited with the built-in image tool for a dark navy backdrop, then encoded as JPEG.
- `robots.txt`, `sitemap.xml`, `.nojekyll`: GitHub Pages and indexing support.

## Preview

Serve this directory with any static HTTP server, for example `python -m http.server 4173`, then open `http://localhost:4173/`.

## Content updates

Public-project copy lives in `index.html`. The corresponding Arabic copy lives in `script.js` in `arabic`.

Private product summaries and technology tags live in `products` in `script.js`. Only curated names, capability summaries, and technology labels are included; no private source files, business records, credentials, or internal service URLs are bundled. Their contact actions link to the portfolio contact section.

The three additional products expand through “Show more products.” Language switching preserves the expanded state. The user's selected language is stored locally when browser storage is available. The main page remains readable without JavaScript; private-product rendering requires JavaScript.

External contact and project links point to existing public destinations. No email address or CV link has been invented.
