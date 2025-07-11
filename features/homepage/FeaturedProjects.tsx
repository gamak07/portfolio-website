import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    image: "/e-commerce.jpg",
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    technologies: ["React", "Node.JS", "MongoDB", "Stripe"],
  },
  {
    image: "/task-manager.jpg",
    name: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["Vue.JS", "Firebase", "Tailwind CSS"],
  },
  {
    image: "/react-comp.jpg",
    name: "React Component Library",
    description: "Open-source UI component library with TypeScript support",
    technologies: ["React", "TypeScript", "Storybook"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  quality={100}
                  className="absolute object-cover object-top rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
                  {project.name}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
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
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="cursor-pointer bg-blue-600 px-8 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700 rounded-sm"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
