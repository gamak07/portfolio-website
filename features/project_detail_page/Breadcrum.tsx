"use client";

import Button from "@/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";

interface Props {
  title: string;
}
export default function Breadcrum({ title }: Props) {
  const router = useRouter();
  return (
    <header className="border-b bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              className="flex cursor-pointer items-center space-x-2 text-sm text-gray-600 transition-colors hover:text-gray-900 md:text-xl dark:text-gray-300 dark:hover:text-white"
              onClick={() => router.back()}
            >
              <FaArrowLeft /> <span className="hidden md:block">Back to Portfolio</span>
            </Button>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="flex cursor-pointer items-center space-x-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <FaShareAlt />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
