import React from "react";
import { RiCodeBoxLine, RiDatabase2Line, RiServerLine, RiStackLine } from "react-icons/ri";

interface Props {
  tech_stack: string[];
  frontend: string | null;
  backend: string | null;
  database: string | null;
}

export default function Technology({ tech_stack, frontend, backend, database }: Props) {
  return (
    <div className="space-y-12">
      
      {/* 1. Core Architecture Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {frontend && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <RiCodeBoxLine className="text-xl" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Frontend</h3>
            <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">{frontend}</p>
          </div>
        )}
        
        {backend && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <RiServerLine className="text-xl" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Backend</h3>
            <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">{backend}</p>
          </div>
        )}

        {database && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <RiDatabase2Line className="text-xl" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Database</h3>
            <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">{database}</p>
          </div>
        )}
      </div>

      {/* 2. Full Tech Stack Tags */}
      {tech_stack.length > 0 && (
        <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-800/50">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
            <RiStackLine className="text-blue-500" />
            Full Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {tech_stack.map((tech) => (
              <span 
                key={tech} 
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}