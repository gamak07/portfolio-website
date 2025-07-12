import AboutMe from "@/features/about_page/AboutMe";
import Experience from "@/features/about_page/Experience";
import Skills from "@/features/about_page/Skills";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <AboutMe />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}
