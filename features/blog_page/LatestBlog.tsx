import Image from "next/image";
import React from "react";

export default function LatestBlog() {
  return (
    <>
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
      <div className="mb-8 cursor-pointer rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <div className="relative h-64 w-full">
          <Image
            src="/latest_blog.jpg"
            alt="Latest Blog"
            fill
            className="absolute h-64 w-full rounded-t-lg object-cover object-top"
          />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">Jul, 11 2025</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Author - Ganiyu Mubarak
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
            Building Scalable React Applications
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Learn best practices for structuring large React applications with
            proper state management and component architecture.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Architecture</span>
          </div>
        </div>
      </div>
    </>
  );
}
