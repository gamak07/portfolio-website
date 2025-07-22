import React from "react";

interface Props {
  description: string;
  features: string[];
}

export default function Overview({ description, features }: Props) {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h3 className="mb-6 text-2xl font-bold text-gray-900">
          Project Overview
        </h3>
        <div className="max-w-none">
          <p className="mb-4 text-gray-600">{description}</p>
          <h4 className="mb-4 text-xl font-semibold text-gray-900">Features</h4>
          <ul className="mb-6 list-inside list-disc space-y-2 text-gray-600">
            {features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
