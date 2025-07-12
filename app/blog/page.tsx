import Blog from "@/features/blog_page/Blog";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles and insights from Ganiyu Mubarak on frontend development and tech.",
};
export default function Page() {
  return (
    <main>
      <Blog />
    </main>
  );
}
