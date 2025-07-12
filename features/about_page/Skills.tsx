import Button from "@/ui/Button";
import React from "react";
import { FaDownload } from "react-icons/fa";

const skills = [
  { skillName: "React/Next JS", skillLevel: 90 },
  { skillName: "CSS/Tailwind", skillLevel: 95 },
  { skillName: "Javascript/Typescript", skillLevel: 80 },
  { skillName: "Python", skillLevel: 25 },
  { skillName: "Git/Version control", skillLevel: 70 },
];

export default function Skills() {
  return (
    <>
      <section className="mb-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium text-gray-900 dark:text-white">
                  {skill.skillName}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.skillLevel}%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-1000"
                  style={{ width: `${skill.skillLevel}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center">
        <Button className="mx-auto flex cursor-pointer items-center justify-center rounded bg-blue-600 px-8 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700">
          <FaDownload className="mr-2" /> Download CV
        </Button>
      </div>
    </>
  );
}
