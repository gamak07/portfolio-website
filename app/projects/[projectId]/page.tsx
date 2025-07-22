
import Banner from "@/features/project_detail_page/Banner";
import Breadcrum from "@/features/project_detail_page/Breadcrum";
import Tab from "@/features/project_detail_page/Tab";
import { getProjectById, getProjects } from "@/lib/api";
import { Project } from "@/lib/types";
import React from "react";

interface Props {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateStaticParams() {
  const projects: Project[] = await getProjects();
  const ids = projects.map((project) => ({
    projectId: project.id,
  }));

  return ids;
}

export default async function Page({ params, }: Props) {
  const {projectId} = await params
  const project = await getProjectById(projectId);
  const {
    title,
    thumbnail_url,
    status,
    type,
    duration,
    description,
    source_code_url,
    demo_url,
    features,
    gallery,
  } = project;

  return (
    <main className="bg-gray-50">
      <Breadcrum title={title} />
      <Banner
        thumbnail={thumbnail_url}
        title={title}
        status={status}
        type={type}
        duration={duration}
        description={description}
        sourceCode={source_code_url}
        demoUrl={demo_url}
      />
      <Tab
        description={description}
        features={features}
        title={title}
        gallery={gallery}
      />
    </main>
  );
}
