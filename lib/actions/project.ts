'use server'

import { Project } from '@/lib/types/project'
import { createClient, createStaticClient } from "@/lib/supabase/server"

export async function getProjects() {
   const supabase = createStaticClient();


  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Server Action Error:', error)
    throw new Error(error.message)
  }

  return data as Project[]
}

export async function getProjectBySlug(slug: string) {
    const supabase = createStaticClient();


  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) return null

  return data as Project
}

