import originalPost from "./story-original.json";
import drafts from "./story-drafts.json";

export const storyCategories = ["Build Better Careers", "Build Better Businesses", "Build Better Products", "Build Better Systems", "Build Better Ideas", "Build a Better You"] as const;
export type StoryCategory = (typeof storyCategories)[number];
export type Story = {
  slug: string;
  title: string;
  subtitle: string;
  category: StoryCategory;
  date: string;
  cover: string;
  coverAlt: string;
  coverWidth: number;
  coverHeight: number;
  body: string;
  resourceSlug: string;
  resourceReason: string;
};
export type StoryCard = Omit<Story, "body" | "resourceSlug" | "resourceReason"> & { readMinutes: number };

export const stories: Story[] = [
  {
    slug: "what-do-product-managers-even-do",
    title: "What Do Product Managers Even Do?",
    subtitle: "Sometimes your job is to kill good work",
    category: "Build Better Products",
    date: "2026-08-11",
    cover: "/assets/stories/what-do-product-managers-even-do.webp",
    coverAlt: "A woman reading a Product Roadmap book, with product planning objects around her",
    coverWidth: 1100,
    coverHeight: 821,
    body: originalPost,
    resourceSlug: "what-to-build-next",
    resourceReason: "Put the next decision on paper. Compare your ideas, record what you are leaving out and choose a first test with What to Build Next.",
  },
  ...drafts.map(draft => ({ ...draft, category: draft.category as StoryCategory, date: "2026-10-13", coverWidth: 1024, coverHeight: 1024 })),
];

export function getStory(slug: string) { return stories.find(story => story.slug === slug); }
export function readingMinutes(body: string) { return Math.max(1, Math.ceil(body.trim().split(/\s+/u).length / 230)); }
export function storyDate(date: string) { return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`)); }
export function storyCard({ body, resourceSlug: _resourceSlug, resourceReason: _resourceReason, ...card }: Story): StoryCard {
  // Only collection metadata is sent to the filter component; article bodies stay on the server.
  void _resourceSlug;
  void _resourceReason;
  return { ...card, readMinutes: readingMinutes(body) };
}

const headings = new Set([
  "Start with a small problem", "Show the choice you made", "Finish something someone can inspect",
  "Make the first order possible", "Write down what happens", "Build around a repeated problem",
  "Write the boring details", "Keep a record of each run", "Plan for the failed run", "Give yourself an off switch",
  "Tell it what you actually know", "Ask for the missing information", "Check anything you plan to repeat", "Keep your own decision in the document",
  "Choose something you want to understand", "Make an attempt before asking for the answer", "Check that you can do it again", "Keep less, use more",
]);

export function storyBlocks(story: Story) {
  // The supplied post is kept verbatim, including its internal line breaks.
  return story.body.split(/\n\s*\n/u).map((text, index) => ({ text, id: `passage-${index + 1}`, heading: headings.has(text) }));
}
