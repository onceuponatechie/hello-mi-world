import Link from "next/link";
import type { StoryCard } from "@/content/stories";

export function StoryRail({ stories }: { stories: StoryCard[] }) {
  return <ol id="home-stories-rail" className="home-stories-rail" aria-label="Four stories from Why Not Build. Scroll horizontally to read all four." tabIndex={0}>
      {stories.map((story, index) => <li key={story.slug}><article className={`home-story-preview${index === 0 ? " home-story-flagship" : ""}`}>
        <Link href={`/stories/${story.slug}`}>
          <div className="home-story-image"><img src={story.cover} alt={story.coverAlt} width={story.coverWidth} height={story.coverHeight} loading="lazy" />{index === 0 ? <span className="home-story-featured">Featured</span> : null}</div>
          <div className="home-story-copy">
            <p className="home-story-category">{story.category}</p>
            <h3><span>{story.title}</span></h3>
            <p className="home-story-excerpt">{story.subtitle}</p>
            <div className="home-story-meta"><time dateTime={story.date}>{new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${story.date}T00:00:00Z`))}</time><span>{story.readMinutes} min read</span></div>
          </div>
        </Link>
      </article></li>)}
    </ol>;
}
