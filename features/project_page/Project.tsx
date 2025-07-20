import React from "react";
import ProjectWrapper from "./ProjectWrapper";
import { getProjects } from "@/lib/api";

export default async function Project({
  searchParams,
}: {
  searchParams: { filter?: string };
}) {
  const projects = await getProjects();
  // const activeFilter = searchParams?.filter || "all";
  const allowedFilters = ["All", "Personal", "Freelance", "Hackathon"];
const rawFilter = searchParams?.filter;
const activeFilter = allowedFilters.includes(rawFilter ?? "") ? rawFilter! : "All";

  return (
    <section className="min-h-screen bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h1>
        <ProjectWrapper filter={activeFilter} projects={projects} />
      </div>
    </section>
  );
}
