# Essy Udeme — Hello Mi World

A Next.js App Router replica of `onceuponatechie/butter-canvas-dream` at source commit `eb90cfa`. The original images, Hanken Grotesk and Instrument Serif typography, responsive layouts, shadows, and motion timing are preserved.

## Included

- Header, Resources dropdown, mobile navigation, animated hero, image rotation, and loading screen.
- Five resource cards, including the six-scene 360×486 Why Not Build canvas animation with direct scene selection, keyboard controls, and pause/play.
- What I Do, four stacking project cards, newsletter, and footer.
- Substack signup handoff, metadata, and a custom favicon.

The personal reading grid, product practice cards, and adventure carousel are intentionally excluded. Unused Lovable tooling, TanStack/Vite routing, UI libraries, assets, and content modules are excluded.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Next.js uses thread workers and the TypeScript API checker to support restricted Windows environments without disabling type checks.

## Deployment

Import `onceuponatechie/hello-mi-world` into Vercel. Select Next.js, keep the repository root as the root directory, and use the default install and build commands. No secrets or database are required. Subsequent pushes to the production branch deploy automatically once the GitHub integration is connected.

Vercel provides the production URL for social metadata. Set `NEXT_PUBLIC_SITE_URL` only when a custom canonical URL is needed.

## Links and content

`src/config/site.ts` contains the confirmed Substack destinations and the contact email inherited from the original site. The newsletter hands the entered email to Substack’s signup page; readers finish subscribing there. The site does not store emails or claim a subscription before it is completed.

Project detail/live links, resource destinations, social profiles, Privacy, and Colophon retain homepage placeholders until the owner supplies the corresponding pages. Project descriptions and statistics are copied from the original design and have not been independently verified.

## Verification

Lint, TypeScript, and the production build are required before pushes. Browser checks cover desktop, tablet, and mobile widths, mobile menu behavior, project stacking, canvas controls, image loading, internal anchors, and the Substack handoff. The tablet reference is the supplied Lovable screenshot; responsive behavior and motion come from the original source.
