import Image from "next/image";
import React from "react";

const blogs = [
  {
    thumbnailImage: "/gris.jpg",
    date: "Jul, 05 2025",
    author: "Ganiyu Mubarak",
    title: "CSS Grid vs Flexbox: When to Use Which",
    description:
      "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout method.",
    tags: ["CSS", "Layout"],
  },
  {
    thumbnailImage: "/typescript.jpg",
    date: "Jul, 01 2025",
    author: "Ganiyu Mubarak",
    title: "TypeScript Best Practices for 2024",
    description:
      "Discover the latest TypeScript features and best practices that will make your code more maintainable and type-safe.",
    tags: ["TypeScript", "Best Practices"],
  },
];

export default function OlderBlogs() {
  return (
    <div className="space-y-6">
      {blogs.map((blog, i) => (
        <div key={i} className="cursor-pointer rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <div className="md:flex">
            <div className="relative aspect-[4/3] w-full md:w-48">
              <Image
                src={blog.thumbnailImage}
                alt={blog.title}
                fill
                className="absolute object-cover object-top rounded-l-md"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="mb-3 flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Author - {blog.author}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                {blog.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{blog.description}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
