// app/projects/page.tsx
import Project from "@/features/project_page/Project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ganiyu Mubarak’s featured projects and development work.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;

  return (
    <main>
      <Project filter={filter} />
    </main>
  );
}
