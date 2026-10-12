# Project conventions

- This is the Next.js App Router replica of `onceuponatechie/butter-canvas-dream`, source commit `eb90cfa`.
- Keep homepage sections available through hash navigation. The Builds collection lives at `/builds`, with individual studies at `/builds/[slug]`; links from inner pages must reach homepage sections correctly.
- Current Builds are approved concept examples, not verified client work. Keep assumptions, proposed outputs and testing status explicit; do not invent research findings, launches or performance results.
- Preserve source typography, spacing, images, canvas composition, and animation timing.
- Do not restore the personal reading grid, product practice cards, or adventure carousel.
- Keep the Why Not Build feature as a 360×486 Canvas 2D composition with DOM controls and a semantic fallback.
- Never rewrite published Git history.
- Before pushing changes, run lint, typecheck, and the production build.
