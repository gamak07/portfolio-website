// app/projects/page.tsx
import Project from "@/features/project_page/Project";
import React from "react";

export default async function Page({
  searchParams,
}: {
  // Note: searchParams is now a Promise in Next 15
  searchParams: Promise<{ filter?: string }>;
}) {
  // await to get the actual object
  const { filter } = await searchParams;

  return (
    <main>
      {/* pass a plain object into the client side */}
      <Project searchParams={{ filter }} />
    </main>
  );
}
