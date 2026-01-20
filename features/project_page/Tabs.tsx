"use client";

import Button from "@/ui/Button";
import React from "react";

interface Props {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = ['All', 'Personal', 'Freelance', 'Hackathon'];

export default function Tabs({ selectedTab, onTabChange }: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {TABS.map((label) => (
        <Button
          key={label}
          onClick={() => onTabChange(label)}
          className={`cursor-pointer rounded-md px-6 py-2 font-medium whitespace-nowrap transition-colors border border-transparent ${
            selectedTab === label
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}