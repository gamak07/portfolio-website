"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import ProjectItems from "./ProjectItems";
import { useRouter, useSearchParams } from "next/navigation";
import { Project } from "@/lib/types/project";

interface Props {
  initialFilter: string;
  projects: Project[];
}

export default function ProjectWrapper({ initialFilter, projects }: Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(initialFilter);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Update URL without refreshing the page
    router.push(`?filter=${tab}`, { scroll: false });
  };

  return (
    <div>
      <Tabs selectedTab={activeTab} onTabChange={handleTabChange} />
      <ProjectItems filter={activeTab} projects={projects} />
    </div>
  );
}