import Project from '@/features/project_page/Project'
import React from 'react'

export default function page({searchParams}:{searchParams : {filter:string}}) {
  return (
    <main>
      <Project searchParams={searchParams} />
    </main>
  )
}
