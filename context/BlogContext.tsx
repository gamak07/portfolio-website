"use client";

import React, { createContext, useContext, useState } from "react";
import { usePublishedBlogs } from "@/hooks/useBlog";
import { Blog } from "@/lib/types/blog";

// Update the type definition
type BlogContextType = ReturnType<typeof usePublishedBlogs> & {
  selectedBlog: Blog | null;
  viewBlog: (blog: Blog) => void;
  closeBlog: () => void;
};

const BlogContext = createContext<BlogContextType | null>(null);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("useBlogContext must be used within a BlogProvider");
  return context;
};

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const blogData = usePublishedBlogs();
  
  // New State for Modal
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const viewBlog = (blog: Blog) => setSelectedBlog(blog);
  const closeBlog = () => setSelectedBlog(null);

  const value = {
    ...blogData,
    selectedBlog,
    viewBlog,
    closeBlog
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};