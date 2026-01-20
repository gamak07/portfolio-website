import React from "react";

interface Props {
  description: string;
  features: string[];
}

export default function Overview({ description, features }: Props) {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-white p-8 shadow-lg transition-colors dark:bg-gray-800 dark:shadow-none">
        <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Project Overview
        </h3>
        
        <div className="max-w-none">
          {/* Added whitespace-pre-line to respect paragraph breaks in description */}
          <p className="mb-8 text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {description}
          </p>
          
          <h4 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Key Features
          </h4>
          
          <ul className="mb-6 space-y-3 text-gray-600 dark:text-gray-300">
            {features?.map((feature, i) => (
              <li key={i} className="flex items-start">
                {/* Custom bullet point for better dark mode visibility */}
                <span className="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}