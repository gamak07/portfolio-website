"use client";
import React from "react";

import {
  FaReact,
  FaVuejs,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaNpm,
  FaJs,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { icon: <FaReact className="text-blue-500" />, label: "React" },
      { icon: <FaVuejs className="text-green-500" />, label: "Vue.js" },
      { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
    ],
  },
  {
    title: "Styling",
    items: [
      { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS3" },
      { icon: <FaSass className="text-pink-500" />, label: "Sass" },
      { icon: <SiTailwindcss className="text-teal-500" />, label: "Tailwind" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
      { icon: <FaNpm className="text-red-500" />, label: "npm" },
      { icon: <FaCode className="text-purple-500" />, label: "VS Code" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((section) => (
            <div
              key={section.title}
              className="rounded-lg bg-gray-50 p-6 shadow-sm dark:bg-gray-800"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {section.items.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="text-3xl">{icon}</div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
