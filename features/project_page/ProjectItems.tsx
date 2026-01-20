"use client";

import { Project } from "@/lib/types/project";
import { getPublicImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Props {
  filter: string;
  projects: Project[];
}

export default function ProjectItems({ filter, projects }: Props) {
  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects?.filter(
      (p) => p.category?.toLowerCase() === filter.toLowerCase()
    );
  }, [filter, projects]);

  if (!filtered?.length) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 col-span-full py-10">
        No projects found for this category.
      </p>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((proj) => (
        <div
          key={proj.id}
          className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
        >
          {/* Main Card Content - Links to Details Page */}
          <Link href={`/projects/${proj.slug}`} className="flex-1 cursor-pointer">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={getPublicImageUrl(proj.thumbnail || "")}
                alt={proj.title}
                fill
                quality={90}
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="p-6 pb-0">
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                {proj.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                {proj.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {proj?.tech_stack?.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Footer Actions - Independent Links */}
          <div className="mt-auto flex gap-4 border-t border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
            {proj.source_code_url && (
              <a
                href={proj.source_code_url}
                target="_blank"
                rel="noopener referrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaGithub className="text-lg" />
                <span>Code</span>
              </a>
            )}
            {proj.demo_url && (
              <a
                href={proj.demo_url}
                target="_blank"
                rel="noopener referrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}