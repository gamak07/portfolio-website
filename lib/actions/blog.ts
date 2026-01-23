"use server";

import { createClient } from "../supabase/server";
import { Blog } from "../types/blog";

// Helper
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ""); 
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time > 0 ? time : 1;
}

/**
 * GET SINGLE BLOG (Public Website)
 * - Fetches the blog
 * - Increments View Count
 * - Calculates & Updates Reading Time
 */
export async function getBlogBySlug(slug: string) {
  const supabase = await createClient();

  // 1. Fetch the blog first
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error || !blog) return null;

  // 2. Calculate Reading Time immediately
  const readingTime = calculateReadingTime(blog.content || "");
  const nextViewCount = (blog.views || 0) + 1;

  // 3. Update the Database with BOTH values (Views + Reading Time)
  // This ensures your Analytics Dashboard has the data.
  await supabase
    .from("blogs")
    .update({ 
      views: nextViewCount,
      reading_time_minutes: readingTime 
    })
    .eq("id", blog.id);

  // 4. Return the updated data to the UI
  return {
    ...blog,
    views: nextViewCount,
    reading_time_minutes: readingTime
  } as Blog;
}

/**
 * GET ALL PUBLISHED BLOGS (List Page)
 * Just fetches data. 
 * (Reading time will populate here automatically once a user clicks the individual blog)
 */
export async function getPublishedBlogs() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .lte("created_at", new Date().toISOString())
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching published blogs:", error);
    return [];
  }

  return data as Blog[];
}

/**
 * INCREMENT VIEW (For Modal Trigger)
 * Use this if you are using the Modal approach.
 * It now updates Reading Time too.
 */
export async function incrementBlogView(blogId: string) {
  const supabase = await createClient();

  // 1. Get current content to calculate time
  const { data: blog } = await supabase
    .from('blogs')
    .select('content, views')
    .eq('id', blogId)
    .single();

  if (!blog) return;

  // 2. Calculate values
  const readingTime = calculateReadingTime(blog.content || "");
  const nextViewCount = (blog.views || 0) + 1;

  // 3. Save to DB
  const { error } = await supabase
    .from("blogs")
    .update({ 
      views: nextViewCount,
      reading_time_minutes: readingTime
    })
    .eq("id", blogId);

  if (error) console.error("Failed to update stats:", error);
}