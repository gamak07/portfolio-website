"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "An e-commerce platform built with Next.js and Tailwind CSS.",
    imageUrl: "/e-commerce.jpg",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Web Apps",
    slug: "web",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    imageUrl: "/task-manager.jpg",
    technologies: ["React", "Firebase"],
    category: "Web Apps",
    slug: "web",
  },
  {
    title: "React Component Library",
    description: "A reusable component library for React applications.",
    imageUrl: "/react-comp.jpg",
    technologies: ["React", "Storybook"],
    category: "Open Source",
    slug: "open",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my projects and skills.",
    imageUrl: "/portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Client Work",
    slug: "client",
  },
];

interface props {
  filter: string;
}

export default function ProjectItems({ filter }: props) {
  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects?.filter((p) => p.slug === filter);
  }, [filter]);
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((project, i) => (
        <div
          key={i}
          className="cursor-pointer rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
        >
          <div className="relative h-48 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              quality={100}
              className="absolute rounded-t-lg object-cover object-top"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
              {project.title}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
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
                href="#"
                className="flex cursor-pointer items-center text-blue-600 hover:text-blue-700"
              >
                <FaGithub className="mr-1" />
                Github
              </a>
              <a
                href="#"
                className="flex cursor-pointer items-center text-blue-600 hover:text-blue-700"
              >
                <FaExternalLinkAlt className="mr-1" />
                Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
