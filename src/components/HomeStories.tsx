import Link from "next/link";
import { getStory, storyCard } from "@/content/stories";
import { StoryRail } from "@/components/StoryRail";
import { Reveal } from "@/components/Reveal";

const selected = ["what-do-product-managers-even-do", "8-skills-im-betting-my-career-on", "take-one-order-first", "stop-doing-it-twice"];

export function HomeStories() {
  const cards = selected.map(slug => {
    const story = getStory(slug);
    if (!story) throw new Error(`Missing homepage story: ${slug}`);
    return storyCard(story);
  });
  return <section id="latest-stories" className="home-stories-section" aria-labelledby="home-stories-heading">
    <Reveal><h2 id="home-stories-heading" className="section-heading"><span>A few reads from</span>{" "}<span>Why Not Build.</span></h2></Reveal>
    <StoryRail stories={cards} />
    <Reveal><Link className="collection-more-link home-stories-all" href="/stories">Read more stories</Link></Reveal>
  </section>;
}
