import { getPublicImageUrl } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaEye,
  FaForward,
  FaGithub,
  FaPauseCircle,
} from "react-icons/fa";

interface Props {
  thumbnail: string;
  title: string;
  type: string;
  status: string;
  duration: string;
  description: string;
  sourceCode: string;
  demoUrl: string;
}
export default function Banner({
  thumbnail,
  title,
  type,
  status,
  duration,
  description,
  sourceCode,
  demoUrl,
}: Props) {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <div className="relative mb-6 h-96 w-full shadow-lg">
            <Image
              src={getPublicImageUrl(thumbnail)}
              alt={title}
              fill
              className="rounded-lg object-cover object-top"
            />
          </div>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              {title}
            </h2>
            <p className="mb-6 sm:text-sm text-xs text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <div className="mb-6 flex items-center flex-col md:flex-row justify-center md:space-x-4">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium capitalize ${status === "completed" ? "bg-green-100 text-green-800" : status === "in progress" ? "bg-yellow-100 text-yellow-800" : status === "in review" ? "bg-orange-100 text-orange-800" : status === "bg-gray-800 text-gray-100" ? "" : ""}`}
              >
                <span className="mr-1">
                  {status === "completed" && <FaCheckCircle />}
                  {status === "in review" && <FaEye />}
                  {status === "paused" && <FaPauseCircle />}
                  {status === "in progress" && <FaForward />}
                </span>
                {status}
              </span>
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                {duration} development
              </span>
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                {type === "web"
                  ? "Web App"
                  : type === "mobile"
                    ? "Mobile App"
                    : ""}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-md bg-blue-600 px-8 py-3 font-semibold whitespace-nowrap text-white transition-colors hover:bg-blue-700"
              >
                <FaExternalLinkAlt className="mr-2" /> View Live Demo
              </a>
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="darkhover:border-gray-50 inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 px-8 py-3 font-semibold whitespace-nowrap text-gray-700 transition-colors hover:border-gray-700 hover:text-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <FaGithub className="mr-2" /> View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
