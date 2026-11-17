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

The introduction stays in the physical left column and the DealFlow workflow sandbox stays in the right column in both languages. On mobile, the sandbox follows the introduction.

The sandbox uses synthetic lead data only. Its native buttons advance the local example through assignment, simulated contact, and a scheduled follow-up; the JavaScript state display updates after each action. Reset starts over, and switching language preserves the current step. No calls, messages, network requests, or CRM writes are made by the demo. It is an explanatory example rather than private application source.

Public-project copy lives in `index.html`. The corresponding Arabic copy lives in `script.js` in `arabic`.

DealFlow CRM is the first featured project in `index.html`. Its coverage includes the mobile-first sales portal, web and installable mobile/desktop PWA experiences, and the connected lead-to-follow-up workflow. Its illustration explains the workflow; it is not a screenshot or a live CRM session. No customer records are used.

Other private product summaries and technology tags live in `products` in `script.js`. Only curated names, capability summaries, and technology labels are included; no private source files, business records, credentials, or internal service URLs are bundled. Their contact actions link to the portfolio contact section. DealFlow is not duplicated in that list.

The two additional private products expand through “Show more products.” Language switching preserves the expanded state. The user's selected language is stored locally when browser storage is available. The main page and DealFlow feature remain readable without JavaScript; the remaining private-product list requires JavaScript.

External contact and project links point to existing public destinations. No email address or CV link has been invented.
