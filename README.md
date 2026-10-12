# Essy Udeme — Hello Mi World

A Next.js App Router portfolio based on `onceuponatechie/butter-canvas-dream` at source commit `eb90cfa`. The design branch uses Syne 500 for headings and Plus Jakarta Sans 400 for supporting text, with a centred collage hero on a white background. It retains the original artwork and Why Not Build canvas motion.

## Included

- Header, Resources dropdown, mobile navigation, stationary hero collage, and a circular zoom reveal from the loading screen.
- Two resource links with the owner's transparent artwork, brief descriptions and outline actions. Cards stack on mobile, with a non-clickable experience manifesto beneath them. Why Not Build keeps its original 360×486 counter scene and continuous motion, with a circular arrow link at the bottom right and keyboard pause/play. Its six categories share one scene without progress bars or a decorative counter arrow.
- A four-step process before the builds: Research, Strategy, Create, and Test & repeat. Centered #F7F7F7 cards use the services' custom white geometric icon family on butter-yellow, lavender, orange and sky-blue tiles. Cards form four columns on desktop, two on tablet, and a vertical list on phones. Artwork is static and the owner's questions and descriptions are preserved.
- Four open text-and-image project rows on #FEFEFE use the hero’s green action and a small external arrow beside Go live. Project rows retain sticky positioning and spring-smoothed scaling; “Explore more builds” follows closely. The services section follows the builds, with staggered white/off-white panels, original white geometric marks on lavender, green and butter-yellow tiles, and purple phrases in the descriptions. Section headlines share the resources heading's responsive size. Stacking offsets adapt to short screens so their content remains reachable.
- A black newsletter panel with benefit-oriented copy, a separate signup form and circular Figma, Notion, Codex and VS Code badges. Codex uses the OpenAI mark from the official developer site. Copy and form sit side by side on desktop and stack on smaller screens. No reader counts, reviews, stars or unconfirmed publishing schedule. The footer remains a black panel without a full-width black surround.
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

Tool artwork is stored locally in `public/assets/tools`: Figma's full-color icon comes from its [brand download](https://www.figma.com/using-the-figma-brand/), the Notion image from its [official site](https://www.notion.com/), the OpenAI mark from the [Codex developer site](https://developers.openai.com/codex/app/), and the VS Code SVG from Microsoft's [icon pack](https://code.visualstudio.com/brand). Badges identify the owner's tools and link to their official sites.

Project detail/live links, resource destinations, social profiles, Privacy, and Colophon retain homepage placeholders until the owner supplies the corresponding pages. Project descriptions and statistics are copied from the original design and have not been independently verified.

## Verification

Lint, TypeScript, and the production build are required before pushes. Browser checks cover desktop, tablet, and mobile widths, navigation, project stacking, canvas controls, image loading, internal anchors, and the Substack handoff. The resource cards share aligned outer edges and become full-width on mobile and narrow tablets. The page stays bright through those cards, then gradually becomes grey before brightening towards the footer. Why Not Build retains its original first-scene entrance, counter, background, and image motion.

The production build checks the homepage's client reference manifest for CSS containing the hero, resources, process, services, and project styles. This works with static HTML and server-rendered deployments. The portfolio stylesheet is imported directly by the root layout so Next.js tracks it independently of Tailwind's PostCSS cache.
