"use client";

import Button from "@/ui/Button";
import React from "react";

interface props {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { label: "All", slug: "all" },
  { label: "Web Apps", slug: "web" },
  { label: "Open Source", slug: "open" },
  { label: "Client Work", slug: "client" },
];


export default function Tabs({ selectedTab, onTabChange }: props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-4">
      {tabs.map(({ label, slug }) => (
        <Button
          key={slug}
          onClick={() => onTabChange(slug)}
          className={`cursor-pointer rounded-md px-6 py-2 font-medium whitespace-nowrap transition-colors ${
            selectedTab === slug
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
