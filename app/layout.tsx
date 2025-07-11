import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/context/ThemeProvider";
import Footer from "@/components/Footer";

const segoe = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap'
})



export const metadata: Metadata = {
  title: "Ganiyu Mubarak",
  description: "A portfolio website for Ganiyu Mubarak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${segoe} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
