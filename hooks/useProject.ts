'use client'

import { getProjectBySlug, getProjects } from '@/lib/actions/project'
import { useQuery } from '@tanstack/react-query'

// 1. Hook to fetch ALL projects
export function useProjects() {
  return useQuery({
    queryKey: ['projects'], // Unique cache key
    queryFn: async () => {
      // We call the Server Action like a normal function!
      const data = await getProjects()
      return data
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  })
}

// 2. Hook to fetch a SINGLE project by Slug
export function useProject(slug: string) {
  return useQuery({
    queryKey: ['project', slug],
    queryFn: async () => {
      const data = await getProjectBySlug(slug)
      if (!data) throw new Error('Project not found')
      return data
    },
    enabled: !!slug, // Only run if slug exists
  })
}