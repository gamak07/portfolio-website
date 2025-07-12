import Project from '@/features/project_page/Project'
import React from 'react'

interface Props{
  searchParams: {
    filter?: string;
  };
}
export default function Page({searchParams}: Props) {
  return (
    <main>
      <Project searchParams={searchParams} />
    </main>
  )
}
