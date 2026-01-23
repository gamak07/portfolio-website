"use client";

import { useQuery } from "@tanstack/react-query";
import { getPublishedBlogs } from "@/lib/actions/blog"; 
import { useState, useMemo } from "react";

export function usePublishedBlogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch all published blogs
  const { data: blogs = [], isLoading, isError } = useQuery({
    queryKey: ["published-blogs"],
    queryFn: async () => await getPublishedBlogs(),
  });

  // Extract unique categories from actual data
  const categories = useMemo(() => {
    const cats = new Set(blogs.map((blog) => blog.category).filter(Boolean));
    return Array.from(cats);
  }, [blogs]);

  // Filter Logic
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory 
        ? blog.category === selectedCategory 
        : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  return {
    blogs: filteredBlogs,
    isLoading,
    isError,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    totalCount: filteredBlogs.length
  };
}

