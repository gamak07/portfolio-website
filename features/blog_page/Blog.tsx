import React from "react";
import LatestBlog from "./LatestBlog";
import OlderBlogs from "./OlderBlogs";
import Filters from "./Filters";
import NewsLetter from "./NewsLetter";

export default function Blog() {
  return (
    <section className="min-h-screen bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LatestBlog />
            <OlderBlogs />
          </div>
          <div className="space-y-8">
            <Filters />
            <NewsLetter />
          </div>
        </div>
      </div>
    </section>
  );
}
