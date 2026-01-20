import React from "react";
import ProjectWrapper from "./ProjectWrapper";
import { useProjects } from "@/hooks/useProject";
import { getProjects } from "@/lib/actions/project";

interface Props {
  filter?: string;
}

export default async function Project({ filter }: Props) {
  const projects = await getProjects();
  
  const allowedFilters = ["All", "Personal", "Freelance", "Hackathon"];
  
  // Validate filter from URL, fallback to "All" if invalid or missing
  const activeFilter = allowedFilters.includes(filter ?? "") 
    ? filter! 
    : "All";

  return (
    <section className="min-h-screen bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h1>
        <ProjectWrapper 
          initialFilter={activeFilter} 
          projects={projects} 
        />
      </div>
    </section>
  );
}