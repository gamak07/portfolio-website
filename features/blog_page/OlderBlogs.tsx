"use client";

import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { useBlogContext } from "@/context/BlogContext";

export default function OlderBlogs() {
  const { blogs, isLoading, viewBlog } = useBlogContext();

  if (isLoading)
    return <div className="space-y-6">{/* Add skeletons here */}</div>;

  // Skip the first one as it is shown in LatestBlog
  const olderBlogs = blogs.slice(1);

  if (olderBlogs.length === 0) return null;

  return (
    <div className="space-y-6">
      {olderBlogs.map((blog) => (
        <div
          key={blog.id}
          className="cursor-pointer rounded-lg bg-white shadow-lg dark:bg-gray-800 overflow-hidden group"
          onClick={() => viewBlog(blog)}
        >
          <div className="md:flex">
            <div className="relative aspect-[4/3] w-full md:w-48 shrink-0">
              {blog.cover_image ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${blog.cover_image}`}
                  alt={blog.title}
                  className="h-full w-full object-cover object-center md:rounded-l-md transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full bg-slate-200" />
              )}
            </div>
            <div className="flex-1 p-6">
              <div className="mb-3 flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {format(new Date(blog.created_at), "MMM d, yyyy")}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.author}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
                {blog.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800">
                  {blog.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
