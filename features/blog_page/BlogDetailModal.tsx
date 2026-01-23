"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { RiCloseLine, RiCalendarLine, RiUser3Line } from "react-icons/ri";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { useBlogContext } from "@/context/BlogContext";
import { incrementBlogView } from "@/lib/actions/blog";

export default function BlogDetailModal() {
  const { selectedBlog, closeBlog } = useBlogContext();

  useEffect(() => {
    if (selectedBlog?.id) {
      incrementBlogView(selectedBlog.id);
    }
  }, [selectedBlog?.id]);

  if (!selectedBlog) return null;

  // Construct Image URL
  const imageUrl = selectedBlog.cover_image
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${selectedBlog.cover_image}`
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
        
        {/* Close Button (Sticky) */}
        <button
          onClick={closeBlog}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-colors"
        >
          <RiCloseLine className="w-6 h-6" />
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={selectedBlog.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
              <span className="text-slate-400">No Cover Image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
             <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {selectedBlog.category}
                </span>
             </div>
             <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                {selectedBlog.title}
             </h1>
             <div className="flex items-center gap-6 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                   <RiCalendarLine />
                   {format(new Date(selectedBlog.created_at), "MMM d, yyyy")}
                </div>
                <div className="flex items-center gap-2">
                   <RiUser3Line />
                   {selectedBlog.author}
                </div>
             </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-img:rounded-xl prose-a:text-blue-600">
            <ReactMarkdown
              components={{
                img: ({node, ...props}) => {
                   // ✅ FIX: Ensure src is a string before using .startsWith
                   const srcValue = props.src;
                   if (typeof srcValue !== 'string') return null;

                   let src = srcValue;
                   
                   // Handle relative Supabase paths in markdown
                   if (!src.startsWith("http")) {
                      src = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio/${src}`;
                   }
                   return <img {...props} src={src} className="w-full rounded-lg my-6 border dark:border-gray-700" />;
                }
              }}
            >
              {selectedBlog.content}
            </ReactMarkdown>
          </div>

          {/* Tags Footer */}
          {selectedBlog.tags && selectedBlog.tags.length > 0 && (
             <div className="mt-12 pt-6 border-t dark:border-gray-800">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                   {selectedBlog.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                         #{tag}
                      </span>
                   ))}
                </div>
             </div>
          )}
        </div>

      </div>
    </div>
  );
}