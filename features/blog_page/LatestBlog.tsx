"use client";

import Image from "next/image"; // ✅ Using Next/Image
import React from "react";
import { useBlogContext } from "@/context/BlogContext";
import { format } from "date-fns";

export default function LatestBlog() {
  const { blogs, isLoading, viewBlog } = useBlogContext();

  if (isLoading)
    return (
      <div className="h-96 bg-gray-100 animate-pulse rounded-lg mb-8"></div>
    );

  if (blogs.length === 0) return null;

  const latest = blogs[0];

  // Construct the full URL for Supabase
  const imageUrl = latest.cover_image
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${latest.cover_image}`
    : null;

  return (
    <>
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        Blog
      </h1>
      <div
        className="mb-8 cursor-pointer rounded-lg bg-white shadow-lg dark:bg-gray-800 overflow-hidden group"
        onClick={() => viewBlog(latest)}
      >
        <div className="relative h-64 w-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={latest.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              priority // Loads this image immediately as it's the LCP (Largest Contentful Paint)
            />
          ) : (
            <div className="h-full w-full bg-slate-200 flex items-center justify-center text-slate-400">
              No Image
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(latest.created_at), "MMM d, yyyy")}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Author - {latest.author}
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {latest.title}
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
            {latest.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {latest.category}
            </span>
            {latest.tags?.map((tag: string) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
