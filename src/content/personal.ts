// Owner-approved sample selections for the first design pass. Replace these
// together when Essy supplies her actual reading list, notes and playlist.
export const personal = {
  sampleContent: true,
  currentRead: {
    title: "Show Your Work!",
    author: "Austin Kleon",
    cover: "/assets/personal/show-your-work.jpg",
    width: 600,
    height: 673,
    note: "The questions and rough notes deserve a place beside the finished work.",
    quote: "Share something small every day.",
    source: "https://austinkleon.com/show-your-work/",
  },
  previousReads: [
    { title: "Steal Like an Artist", author: "Austin Kleon", cover: "/assets/personal/steal-like-an-artist.jpg", width: 600, height: 679 },
    { title: "The Creative Act", author: "Rick Rubin", cover: "/assets/personal/the-creative-act.jpg", width: 306, height: 450 },
  ],
  playlist: { title: "Chill Hits", spotifyId: "37i9dQZF1DX4WYpdgoIcn6" },
  fact: {
    title: "leg godt",
    text: "Danish for “play well”. The words behind LEGO’s name.",
    sourceName: "The LEGO Group",
    source: "https://www.lego.com/en-us/aboutus/lego-group/the-lego-group-history",
    checked: "2026-10-15",
  },
  oneLiner: "Always a little curious.",
} as const;
