import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

// Check the homepage's CSS references for both static and server-rendered builds.
// A nested PostCSS import previously vanished from Vercel's generated CSS.
const buildDirectory = resolve(process.argv[2] ?? ".next");
const requiredSelectors = [
  ".hero-scene", ".hero-name", ".hero-collage", ".hero-piece",
  ".site-base", ".resource-layout", ".resource-artwork", ".resource-action", ".manifesto-note",
  ".site-depth", ".services-grid", ".service-card", ".wnb-read", ".project-sticky", ".project-card",
];

try {
  const manifestSource = await readFile(resolve(buildDirectory, "server/app/page_client-reference-manifest.js"), "utf8");
  const manifestJson = manifestSource.match(/globalThis\.__RSC_MANIFEST\["\/page"\]\s*=\s*(\{[\s\S]*\})/)?.[1];
  if (!manifestJson) throw new Error("Cannot read the homepage's client reference manifest.");
  const manifest = JSON.parse(manifestJson);
  const stylesheetPaths = [...new Set(Object.values(manifest.entryCSSFiles ?? {})
    .flat().map(entry => entry.path))];
  if (!stylesheetPaths.length) throw new Error("The built homepage has no referenced stylesheets.");

  const stylesheets = await Promise.all(stylesheetPaths.map(path => {
    if (typeof path !== "string" || !path.startsWith("static/") || path.includes("..") || !path.endsWith(".css")) {
      throw new Error(`Unexpected built stylesheet path: ${path}`);
    }
    // The manifest records emitted paths, independent of public deployment URLs.
    return readFile(resolve(buildDirectory, path), "utf8");
  }));
  const css = stylesheets.join("\n");
  const missing = requiredSelectors.filter(selector => !css.includes(`${selector}{`));
  if (missing.length) throw new Error(`The built homepage is missing portfolio styles: ${missing.join(", ")}`);
  console.log("Verified: the built homepage includes hero, resources, services and project styles.");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
