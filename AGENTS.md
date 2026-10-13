# Project conventions

- This is the Next.js App Router replica of `onceuponatechie/butter-canvas-dream`, source commit `eb90cfa`.
- Keep homepage sections available through hash navigation. The Builds collection lives at `/builds`, with individual studies at `/builds/[slug]`; links from inner pages must reach homepage sections correctly.
- Current Builds are approved concept examples, not verified client work. Keep assumptions, proposed outputs and testing status explicit; do not invent research findings, launches or performance results.
- Tools & Templates lives at `/tools-and-templates`. Show 11 products, with five downloadable products and six labelled Planned. Only ready products have detail routes under `/tools-and-templates/[slug]`; their files live in `public/downloads`. Keep direct downloads available without an email gate.
- Contact lives at `/contact`; Say hi and footer CTAs lead there. The form prepares a local email draft, not a sent-message confirmation. Keep direct mail links available through `site.email`.
- Stories / Why Not Build lives at `/stories` with six articles at `/stories/[slug]`, one in each of the six publication categories. Keep the owner's supplied Product Manager post verbatim and dated 11 August 2026. Calculate read times from the body; its five-minute length is an exception to the 2–4-minute target for the five new pieces. Each article must reference a ready Tools & Templates product with an actual direct download. Products can be shared across stories; keep the eleven-product collection and five downloads. Do not fabricate first-person experiences in new articles.
- Research Vault lives at `/research-vault`, with four studies at `/research-vault/[slug]`. Cite primary sources next to documented claims, distinguish interpretations and examples, and retain methods and limits. Do not invent interviews, tests or findings. The Nigeria chart uses a dated World Bank/ITU snapshot in `public/research`; retain its source precision, attribution and reproducible calculation script.
- Preserve source typography, spacing, images, canvas composition, and animation timing.
- Do not restore the personal reading grid, product practice cards, or adventure carousel.
- Keep the Why Not Build feature as a 360×486 Canvas 2D composition with DOM controls and a semantic fallback.
- Never rewrite published Git history.
- Before pushing changes, run lint, typecheck, and the production build.
