import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Banner from "@/features/project_detail_page/Banner";
import Breadcrum from "@/features/project_detail_page/Breadcrum";
import Tab from "@/features/project_detail_page/Tab";
import { getProjectBySlug, getProjects } from "@/lib/actions/project";
import { Project } from "@/lib/types/project";
import ViewTracker from "@/features/project_detail_page/ViewTracker";

interface Props {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

// 1. Generate Static Params (for SSG performance)
export async function generateStaticParams() {
  const projects: Project[] = await getProjects();
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

// 2. Dynamic Metadata (SEO)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectId } = await params;
  const project = await getProjectBySlug(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.thumbnail ? [project.thumbnail] : [],
    },
  };
}

// 3. Main Page Component
export default async function Page({ params }: Props) {
  const { projectId } = await params;
  
  // Fetch data
  const project = await getProjectBySlug(projectId);

  // Handle 404 if ID doesn't exist
  if (!project) {
    notFound();
  }

  const {
    slug,
    title,
    thumbnail,
    status,
    type,
    duration,
    description,
    source_code_url,
    demo_url,
    features,
    gallery,
    tech_stack,
    frontend,
    backend,
    database,
    challenges,
    learnings,
    team_members,
    start_date,
    end_date
  } = project;

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ViewTracker slug={slug} />
      <Breadcrum title={title} />
      
      <Banner
      slug={slug}
        thumbnail={thumbnail || ""} 
        title={title}
        status={status}
        type={type}
        duration={duration || "Ongoing"}
        description={description}
        sourceCode={source_code_url || ""}
        demoUrl={demo_url || ""}
      />
      
      <Tab
        title={title}
        description={description}
        features={features || []} 
        gallery={gallery || []}   
        tech_stack={tech_stack || []}
        frontend={frontend}
        backend={backend}
        database={database}
        challenges={challenges}
        learnings={learnings}
        team_members={team_members || []}
        start_date={start_date}
        end_date={end_date}
      />
    </main>
  );
}