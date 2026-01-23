"use client";

import Button from "@/ui/Button"; // Assuming you have this UI component
import Input from "@/ui/Input"; // Assuming you have this UI component
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useBlogContext } from "@/context/BlogContext";

export default function Filters() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
  } = useBlogContext();

  return (
    <>
      {/* Search */}
      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Search
        </h3>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded outline-blue-600 bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder:text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-sm text-gray-400" />
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Categories
          </h3>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs text-red-500 hover:underline"
            >
              Clear
            </button>
          )}
        </div>

        <div className="space-y-2">
          {/* Show All Categories extracted dynamically */}
          {categories.length > 0 ? (
            categories.map((category, i) => (
              <Button
                key={i}
                onClick={() =>
                  setSelectedCategory(
                    category === selectedCategory ? null : category,
                  )
                }
                className={`
                  block w-full text-left py-2 px-3 rounded transition-colors cursor-pointer
                  ${
                    selectedCategory === category
                      ? "bg-blue-100 text-blue-800 font-medium"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }
                `}
              >
                {category}
              </Button>
            ))
          ) : (
            <p className="text-sm text-gray-500">No categories found.</p>
          )}
        </div>
      </div>
    </>
  );
}
