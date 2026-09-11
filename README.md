# KSAR static homepage

A dependency-free static redesign following the warm, photographic editorial direction described for Design Option 1. The referenced conversation did not expose its generated mock-up attachment; this implementation follows the available written direction.

## Run

Use Node.js 18 or later, then run `npm run dev`. Open http://127.0.0.1:4173. `npm run check` checks JavaScript syntax. Serve the repository root on any static web host; no compilation or installation is needed. Relative paths support subdirectory hosting, including `/kasr/`.

## Content and future CMS

`src/content.mjs` holds service, gallery and featured-story records, with IDs, source URLs and publication fields. `app.mjs` renders these records and handles the mobile menu and native image dialog. Replace the content provider with published CMS records later; enforce publishing, roles and access on the server. No login, uploads, database, payment capture or newsletter service is implemented in this static phase. Donation links open the redesigned local donation page, which connects to KSAR's existing checkout providers.

`index.html` contains the page structure and clinic information; `styles.css` contains responsive design tokens and layouts. The homepage does not label the existing images as new or imply live animal counts. The source's 280+ figure is dated and attributed. Chase is presented as an archive story without claiming he has returned home.

See [content provenance](docs/CONTENT-SOURCES.md) and [verification](docs/VERIFICATION.md).

## Images

Only original KSAR website assets are used. `assets/logo.jpg` is the unchanged original, displayed proportionally with no recolouring, filters or cropping. Photography is cropped through CSS to fit layouts; underlying files are unchanged. `docs/assets.json` records original Wix media IDs, and `scripts/download-assets.cjs` can retrieve those same files. These charity assets are included for the requested KSAR redesign, not offered under an open-source image licence.

## Donation page

`donate.html` is the local donation landing page. All homepage giving CTAs lead here. It uses `donate.css` plus shared styles and `src/navigation.mjs`. Provider links work without JavaScript; the module handles mobile navigation only. Actual giving takes place through KSAR's existing Give Lively or PayPal checkout. Other source-supported giving routes are grouped below the main action.
