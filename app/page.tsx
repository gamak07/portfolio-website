import About from "@/features/homepage/About";
import FeaturedProjects from "@/features/homepage/FeaturedProjects";
import Skills from "@/features/homepage/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Developer — Ganiyu Mubarak",
  description:
    "Ganiyu Mubarak is a frontend developer specializing in React, Next.js, and Tailwind CSS. Explore projects and skills on his portfolio homepage.",
  openGraph: {
    title: "Ganiyu Mubarak — Frontend Developer",
    description:
      "Explore the homepage of Ganiyu Mubarak’s portfolio showcasing React, Next.js, and Tailwind projects.",
    url: "https://gamak-07.vercel.app",
    siteName: "Ganiyu Mubarak",
    images: [
      {
        url: "https://gamak-07.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview of Ganiyu Mubarak’s portfolio homepage",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganiyu Mubarak — Frontend Developer",
    description:
      "Frontend portfolio homepage of Ganiyu Mubarak, built with React, Next.js, and Tailwind.",
    creator: "@Gamak_07",
    images: ["https://gamak-07.vercel.app/preview.png"],
  },
};

export default function Home() {
  return (
    <main>
      <About />
      <FeaturedProjects />
      <Skills />
    </main>
  );
}
