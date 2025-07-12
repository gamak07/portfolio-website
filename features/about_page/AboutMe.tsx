import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <section className="mb-16 text-center">
      <div className="relative mx-auto mb-6 h-32 w-32 rounded-full">
        <Image
          src="/me.jpg"
          alt="Picture of the author"
          fill
          className="absolute rounded-full object-cover object-top"
        />
      </div>
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">About Me</h1>
      <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
        I&apos;m a passionate frontend developer with 5+ years of experience creating
        beautiful, functional web applications that users love to interact with.
      </p>
    </section>
  );
}
