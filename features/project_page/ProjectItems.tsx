"use client";
import { Project } from "@/lib/types";
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
    if (filter.toLowerCase() === "all") return projects;
    return projects?.filter((p) => p.category?.toLowerCase() === filter.toLowerCase());
  }, [filter, projects]);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filtered?.map((proj) => (
        <Link
          href={`/projects/${proj.id}`}
          key={proj.id}
          className="cursor-pointer rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
        >
          <div className="relative h-48 w-full">
            <Image
              src={getPublicImageUrl(proj.thumbnail_url || "")}
              alt={proj.title}
              fill
              quality={100}
              className="absolute rounded-t-lg object-cover object-top"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
              {proj.title}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
              {proj.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {proj?.tech_stack?.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-blue-100 px-2 py-1 text-sm text-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={proj.source_code_url}
                target="_blank"
                rel="noopener referrer"
                className="flex cursor-pointer items-center text-blue-600 hover:text-blue-700"
              >
                <FaGithub className="mr-1" />
                Github
              </a>
              <a
                href={proj.demo_url}
                target="_blank"
                rel="noopener referrer"
                className="flex cursor-pointer items-center text-blue-600 hover:text-blue-700"
              >
                <FaExternalLinkAlt className="mr-1" />
                Demo
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
