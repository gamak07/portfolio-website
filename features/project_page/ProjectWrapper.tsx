"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import ProjectItems from "./ProjectItems";
import { useRouter } from "next/navigation";
import { Project } from "@/lib/types";

interface Props {
  filter: string;
  project: Project[];
} 

export default function ProjectWrapper({ filter, project }: Props) {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(filter);
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    router.push(`?filter=${tab}`);
  };
  return (
    <div>
      <Tabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <ProjectItems filter={filter} project={project} />
    </div>
  );
}
