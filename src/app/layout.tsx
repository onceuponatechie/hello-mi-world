import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

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
      <body><div className="site-surround"><div className="site-panel">{children}</div></div></body>
    </html>
  );
}
