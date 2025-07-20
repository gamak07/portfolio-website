"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import ProjectItems from "./ProjectItems";
import { useRouter } from "next/navigation";
import { Project } from "@/lib/types";

interface Props {
  filter: string;
  projects: Project[];
} 

export default function ProjectWrapper({ filter, projects }: Props) {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(filter);
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    router.push(`?filter=${tab}`);
  };
  return (
    <div>
      <Tabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <ProjectItems filter={filter} projects={projects} />
    </div>
  );
}
