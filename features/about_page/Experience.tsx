import React from "react";

const experienceData = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Ltd.",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained user-friendly web applications using React and Next.js.",
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    duration: "Jun 2018 - Dec 2019",
    description:
      "Collaborated with designers to create responsive websites using HTML, CSS, and JavaScript.",
  },
  {
    title: "Junior Developer",
    company: "Web Solutions Ltd.",
    duration: "Jan 2018 - May 2019",
    description:
      "Started my career building landing pages and small web applications while learning best practices.",
  },
];

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Experience
      </h2>
      <div className="space-y-8">
      {experienceData.map((experience, i)=>(
        <div key={i} className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
            <p className="text-blue-600 font-medium dark:text-blue-400">{experience.duration}</p>
          </div>
          <p className="font-medium mb-2 text-gray-700 dark:text-gray-300">{experience.company}</p>
          <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
        </div>
      ))}
      </div>
    </section>
  );
}
