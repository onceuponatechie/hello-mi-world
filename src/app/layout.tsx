import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import "./portfolio.css";
import "./builds.css";
import "./tools.css";
import "./research-contact.css";
import "./stories.css";
import "./personal.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "400", variable: "--font-jakarta", display: "swap" });
const heading = Syne({ subsets: ["latin"], weight: "500", variable: "--font-syne", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")),
  title: "Essy Udeme — Products, people, and the stories between them",
  description: "Portfolio of Essy Udeme: product case studies, tools & templates, essays, and resources for builders and storytellers.",
  openGraph: {
    title: "Essy Udeme — Products, people, stories",
    description: "Case studies, tools & templates, and a living notebook of experiments by Essy Udeme.",
    type: "website",
    images: [{ url: "/assets/hero-cover.webp", alt: "Essy Udeme portfolio" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${heading.variable}`}>
      <head>
        <script id="homepage-scroll-start" dangerouslySetInnerHTML={{ __html: `if(location.pathname==='/'&&(!location.hash||performance.getEntriesByType('navigation')[0]?.type==='reload')){history.scrollRestoration='manual';if(location.hash){history.replaceState(history.state,'',location.pathname+location.search);}document.documentElement.dataset.heroEntry='true';window.scrollTo({top:0,left:0,behavior:'instant'});}` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
