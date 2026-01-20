export function getPublicImageUrl(path: string | null | undefined) {
  if (!path) return ""

  // FIX: If the path is already a full URL, return it as is.
  if (path.startsWith("http") || path.startsWith("https")) {
    return path
  }

  // Otherwise, construct the full URL
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  
  // Make sure to handle the specific bucket name if it's not part of the path
  // Adjust 'portfolio' or 'project-images' to match your actual Supabase Storage Bucket name
  return `${supabaseUrl}/storage/v1/object/public/portfolio/${path}`
}