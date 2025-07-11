import Button from "@/ui/Button";
import React from "react";

export default function About() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat dark:bg-gray-900">
      <div className="absolute inset-0 bg-white opacity-90 dark:bg-gray-900 dark:opacity-80"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl dark:text-white">
          Frontend Developer
        </h1>
        <p className="mb-8 text-xl text-gray-600 md:text-2xl dark:text-gray-300">
          Creating beautiful, responsive, and user-friendly web experiences
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button className="cursor-pointer rounded-sm bg-blue-600 px-8 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700">
            View My Work
          </Button>
          <Button className="cursor-pointer rounded-sm border-2 border-blue-600 px-8 py-3 font-semibold whitespace-nowrap text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
