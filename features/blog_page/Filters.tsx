import Button from "@/ui/Button";
import Input from "@/ui/Input";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Filters() {
  return (
    <>
      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Search</h3>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search articles"
            className="w-full border border-gray-300 rounded outline-blue-600 bg-white py-2 pr-4 pl-10 text-sm text-gray-900 placeholder:text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-white dark:placeholder:text-gray-400"
          />
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-sm text-gray-400" />
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
         <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Categories</h3>
         <div className="space-y-2">
            {['React', 'CSS', 'TypeScript', 'Best Practices', 'Architecture'].map((category, i) => (
                <Button key={i} className="block w-full text-left py-2 px-3 rounded transition-colors cursor-pointer text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">{category}</Button>
            ))}
         </div>
      </div>
    </>
  );
}
