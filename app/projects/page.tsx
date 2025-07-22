// app/projects/page.tsx
import Project from "@/features/project_page/Project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ganiyu Mubarak’s featured projects and development work.",
};

export default async function Page(props: unknown) {
  const { searchParams } = props as { searchParams: { filter?: string } };
  const { filter } = searchParams;

  return (
    <main>
      <Project searchParams={{ filter }} />
    </main>
  );
}
