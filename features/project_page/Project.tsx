import React from "react";
import ProjectWrapper from "./ProjectWrapper";

export default function Project({searchParams}: {searchParams: {filter?: string}}) {
    const activeFilter = searchParams?.filter || "all";
  return (
    <section className="min-h-screen bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          My Projects
        </h1>
        <ProjectWrapper filter={activeFilter} />
      </div>
    </section>
  );
}
