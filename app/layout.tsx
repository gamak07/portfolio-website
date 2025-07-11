import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/context/ThemeProvider";
import Footer from "@/components/Footer";

const roboto = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ganiyu Mubarak — Frontend Developer Portfolio",
    template: "%s | Ganiyu Mubarak",
  },
  description:
    "Welcome to the portfolio of Ganiyu Mubarak — a passionate frontend developer skilled in React, Next.js, and Tailwind CSS.",
  keywords: [
    "Ganiyu Mubarak",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer in Nigeria",
  ],
  authors: [
    {
      name: "Ganiyu Mubarak",
      url: "https://www.linkedin.com/in/ganiyu-mubarak/",
    },
  ],
  openGraph: {
    title: "Ganiyu Mubarak — Frontend Developer Portfolio",
    description:
      "Explore Ganiyu Mubarak’s professional portfolio showcasing modern frontend projects built with React, Next.js, and Tailwind.",
    url: "https://gamak-07.vercel.app",
    siteName: "Ganiyu Mubarak",
    images: [
      {
        url: "https://gamak-07.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview of Ganiyu Mubarak’s portfolio",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganiyu Mubarak — Portfolio",
    description:
      "Frontend developer portfolio built with Next.js, React, and Tailwind CSS.",
    creator: "@Gamak_07",
    images: ["https://gamak-07.vercel.app/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://gamak-07.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ganiyu Mubarak",
              url: "https://gamak-07.vercel.app",
              image: "https://gamak-07.vercel.app/preview.png",
              sameAs: [
                "https://github.com/gamak07",
                "https://www.linkedin.com/in/ganiyu-mubarak/",
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
