"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import ProjectItems from "./ProjectItems";
import { useRouter } from "next/navigation";

interface Props {
  filter: string;
} 

export default function ProjectWrapper({ filter }: Props) {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(filter);
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    router.push(`?filter=${tab}`);
  };
  return (
    <div>
      <Tabs selectedTab={selectedTab} onTabChange={handleTabChange} />
      <ProjectItems filter={filter} />
    </div>
  );
}
