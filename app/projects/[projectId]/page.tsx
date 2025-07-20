import Banner from "@/features/project_detail_page/Banner";
import Breadcrum from "@/features/project_detail_page/Breadcrum";
import { getProjectById, getProjects } from "@/lib/api";
import { Project } from "@/lib/types";
import React from "react";

interface Props {
  params: { projectId: string };
}

export async function generateStaticParams() {
  const projects: Project[] = await getProjects();
  const ids = projects.map((project) => ({
    projectId: project.id,
  }));

  return ids;
}

export default async function Page({ params }: Props) {
  const project = await getProjectById(params.projectId);
  const { title, thumbnail_url, status, type, duration, description, source_code_url, demo_url } = project;

  return (
    <main>
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
    </main>
  );
}
