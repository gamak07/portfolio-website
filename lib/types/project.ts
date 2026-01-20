export type Project = {
  id: string
  created_at: string
  updated_at: string
  
  // Basic Info
  title: string
  slug: string
  description: string
  featured: boolean
  type: 'Web' | 'Mobile'
  status: 'Published' | 'Draft' | 'In Progress' | 'Completed' | 'Paused' | 'In Review'
  category: 'Personal' | 'Freelance' | 'Hackathon'
  
  // Media
  thumbnail: string | null
  gallery: string[] | null // Array of URLs
  demo_url: string | null
  source_code_url: string | null
  
  // Tech Details (Arrays of strings)
  tech_stack: string[] | null 
  frontend: string | null
  backend: string | null
  database: string | null
  
  // Timeline
  start_date: string | null
  end_date: string | null
  duration: string | null
  
  // Deep Dive
  features: string[] | null
  challenges: string | null
  learnings: string | null
  tags: string[] | null
  
  // Team (JSONB in DB)
  team_members: { name: string; role: string }[] | null
  
  // Analytics
  views: number
  clicks: number
}