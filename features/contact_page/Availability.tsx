import React from "react";

export default function Availability() {
  return (
    <section className="rounded-lg bg-white p-4 sm:p-6 md:p-8 shadow-lg dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-semibold text-gray-600 dark:text-gray-300">
        Availability
      </h2>
      <p className="mb-4 text-gray-600">
        I&apos;m currently available for freelance projects and full-time
        opportunities.
      </p>
      <div className="flex items-center">
        <div className="mr-3 h-3 w-3 rounded-lg bg-green-500"></div>
        <span className="text-gray-600 dark:text-gray-300">
          Available for new projects
        </span>
      </div>
    </section>
  );
}
