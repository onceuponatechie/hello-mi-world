import { readFile, readdir } from "node:fs/promises";
import { basename, resolve } from "node:path";

// Check the CSS linked by the generated homepage, not orphaned build chunks.
// A nested PostCSS import previously vanished from Vercel's generated CSS.
const buildDirectory = resolve(process.argv[2] ?? ".next");
const requiredSelectors = [
  ".hero-scene", ".hero-name", ".hero-collage", ".hero-piece",
  ".resource-layout", ".resource-thumbnail", ".manifesto-note",
  ".process-steps", ".process-icon", ".project-sticky", ".project-card",
];

try {
  const html = await readFile(resolve(buildDirectory, "server/app/index.html"), "utf8");
  const stylesheetLinks = [...html.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => tag)
    .filter(tag => /\brel="stylesheet"/.test(tag))
    .map(tag => tag.match(/\bhref="([^"]+)"/)?.[1]);
  if (!stylesheetLinks.length) throw new Error("The built homepage has no linked stylesheets.");

  const staticDirectory = resolve(buildDirectory, "static");
  const cssFiles = (await readdir(staticDirectory, { recursive: true }))
    .filter(file => file.endsWith(".css"));
  const stylesheets = await Promise.all(stylesheetLinks.map(href => {
    if (!href?.startsWith("/_next/static/") || href.includes("..")) {
      throw new Error(`Unexpected built stylesheet path: ${href}`);
    }
    // Public asset URLs can have deployment queries and versioned segments.
    // Match the linked filename to the actual emitted file on disk.
    const filename = basename(new URL(href, "https://build.invalid").pathname);
    const matchingFiles = cssFiles.filter(file => basename(file) === filename);
    if (matchingFiles.length !== 1) throw new Error(`Cannot resolve built stylesheet: ${href}`);
    return readFile(resolve(staticDirectory, matchingFiles[0]), "utf8");
  }));
  const css = stylesheets.join("\n");
  const missing = requiredSelectors.filter(selector => !css.includes(`${selector}{`));
  if (missing.length) throw new Error(`The built homepage is missing portfolio styles: ${missing.join(", ")}`);
  console.log("Verified: the built homepage includes hero, resources, process and project styles.");
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
