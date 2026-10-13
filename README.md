# Essy Udeme — Hello Mi World

A Next.js App Router portfolio based on `onceuponatechie/butter-canvas-dream` at source commit `eb90cfa`. The design branch uses Syne 500 for headings and Plus Jakarta Sans 400 for supporting text, with a centred collage hero on a white background. It retains the original artwork and Why Not Build canvas motion.

## Included

- Header, Resources dropdown, mobile navigation, stationary hero collage, and a circular zoom reveal from the loading screen. Homepage loads and refreshes begin at the hero rather than restoring a saved section fragment or scroll position. Section navigation remains available after loading.
- Two resource links with the owner's transparent artwork, brief descriptions and outline actions. Cards stack on mobile, with a non-clickable experience manifesto beneath them. Why Not Build keeps its original 360×486 counter scene and continuous motion, with a circular arrow link at the bottom right and keyboard pause/play. Its six categories share one scene without progress bars or a decorative counter arrow.
- A four-step process before the builds: Research, Strategy, Create, and Test & repeat. Centered #F7F7F7 cards use custom solid-color symbols without square backplates, shared with the services. The butter-yellow, lavender, orange and sky-blue icons remain static. Cards form four columns on desktop and scroll horizontally on tablet and phones; the owner's questions and descriptions are preserved.
- Four open text-and-image Build rows on #FEFEFE retain sticky positioning and spring-smoothed scaling. Their green actions open their studies; “Explore more builds” opens `/builds`. The services section follows, with staggered white/off-white panels and shared custom symbols.
- `/builds` contains five concept cards. Each `/builds/[slug]` page covers problem, evidence, decisions, making, result and learning, with a proposed screen/workflow specimen and next/all-build links. `src/content/builds.ts` holds the shared collection and study content. Five routes are generated at build time; unknown slugs return 404. These are owner-approved concept examples, without invented client work, completed research, launch statistics or live-product links.
- `/tools-and-templates` contains 11 products in a searchable masonry feed: four columns on desktop, three on tablet and two on phones. Five products have complete detail pages and direct downloads; six are labelled Planned and have no detail routes. `src/content/products.ts` holds the collection. Files in `public/downloads` include a CSV/Markdown research kit, a four-page printable PDF, 18 prompts, an editable worksheet and a 20-check release list. No email or text-entry gate is required.
- The five ready products have image covers in `public/assets/tools/covers`, created with the built-in image generator and saved as WebP. The full prompts are in `prompts.json` there. The six planned covers reuse existing local assets. The owner's supplied portrait is saved unchanged as `public/assets/essy-udeme-portrait.png` and shown in the hero's circular frame.
- `/contact` contains a topic selector, validated email-draft builder, direct email link and a Lagos coffee note with the owner's portrait. The page uses neutral white/grey surfaces and the existing green CTA, without yellow or lavender accents. Draft preparation stays in the browser; the visitor opens their own email app or copies the message. Say hi and footer CTAs point to this page; the footer on the contact page returns to its form.
- `/research-vault` contains four searchable, source-based studies, with individual routes under `/research-vault/[slug]`: Nigeria internet use, Notion research records, Figma variables and Paystack payment confirmation. Each page separates documented observations from interpretation, includes contents links, an original chart or diagram, methods, limits and a source library. The Figma example switches between light and dark modes. `src/content/research.ts` holds the studies; planned results, interviews and tests are never represented as completed work.
- `public/research` holds seven World Bank/ITU internet-use observations for Nigeria (2018–2024), retrieved on 13 October 2026, plus a CSV, dated JSON snapshot and dependency-free Python calculation script. The chart uses a 0–100% scale and has an expandable data table. Data attribution and CC BY 4.0 license are retained. The website reads the saved extract at build time, so reading a study does not require a live external API.
- A black newsletter panel with benefit-oriented copy, a separate signup form and circular Figma, Notion, Codex and VS Code badges. Codex uses the OpenAI mark from the official developer site. Copy and form sit side by side on desktop and stack on smaller screens. No reader counts, reviews, stars or unconfirmed publishing schedule.
- A full-width footer with narrow side gutters, rounded corners and subtle dark curved rays from the original hero background. The sage-green contact button has a translucent grey rim. Social icons sit opposite page links on desktop and above them on mobile; copyright sits beneath a divider. The back-to-top control reuses the hero's looping arrow.
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

Build detail links now open their corresponding pages. Unverified statistics from the original design were replaced with approved concept summaries and proposed outputs. Tools & Templates and Research Vault links open their collections. Social profiles remain placeholders until the owner supplies them. Newsletter handoff and the direct contact email are preserved.

## Verification

Lint, TypeScript, and the production build are required before pushes. Browser checks cover desktop, tablet, and mobile widths, navigation, project stacking, canvas controls, image loading, internal anchors, and the Substack handoff. The resource cards share aligned outer edges and become full-width on mobile and narrow tablets. The page stays bright through those cards, then gradually becomes grey before brightening towards the footer. Why Not Build retains its original first-scene entrance, counter, background, and image motion.

The production build checks the homepage's client reference manifest for CSS containing the hero, resources, process, services, and project styles. This works with static HTML and server-rendered deployments. The portfolio stylesheet is imported directly by the root layout so Next.js tracks it independently of Tailwind's PostCSS cache.
