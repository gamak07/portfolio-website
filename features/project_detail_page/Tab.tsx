"use client";

import React, { useState } from "react";
import TabLink from "./TabLink";
import Overview from "./Overview";
import Screenshot from "./Screenshot";
import Technology from "./Technology";
import Development from "./Development";

interface Props {
  description: string;
  features:string[]
  title:string
  gallery:string[]
}

export default function Tab({ description, features, title, gallery }: Props) {
  const [activeTab, setActiveTab] = useState("Overview");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="border-b border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <TabLink activeTab={activeTab} handleTabChange={handleTabChange} />
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12">
        {activeTab === "Overview" && <Overview description={description} features={features} />}
        {activeTab === "Screenshots" && <Screenshot title={title} gallery={gallery} />}
        {activeTab === "Technology" && <Technology />}
        {activeTab === "Development" && <Development />}
      </main>
    </>
  );
}
