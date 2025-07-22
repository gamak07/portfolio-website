"use client";

import Button from "@/ui/Button";
import React from "react";
import { FaCode, FaCogs, FaImages, FaInfoCircle } from "react-icons/fa";

const tabs = [
  { icon: <FaInfoCircle />, name: "Overview" },
  { icon: <FaImages />, name: "Screenshots" },
  { icon: <FaCode />, name: "Technology" },
  { icon: <FaCogs />, name: "Development" },
];

interface Props {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}
export default function TabLink({ activeTab, handleTabChange }: Props) {
  return (
    <nav className="flex space-x-8">
      {tabs.map((tab) => (
        <Button
          key={tab.name}
          className={`flex cursor-pointer items-center space-x-2 border-b-2 px-2 py-4 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.name ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200"}`}
          onClick={() => handleTabChange(tab.name)}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.name}
        </Button>
      ))}
    </nav>
  );
}
