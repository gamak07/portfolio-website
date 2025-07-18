"use client";

import Button from "@/ui/Button";
import React from "react";

interface Props {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}


export default function Tabs({ selectedTab, onTabChange }: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {['All', 'Personal', 'Freelance', 'Hackathon'].map((label) => (
        <Button
          key={label}
          onClick={() => onTabChange(label)}
          className={`cursor-pointer rounded-md px-6 py-2 font-medium whitespace-nowrap transition-colors ${
            selectedTab === label
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
