'use server'

import { createClient } from "@/lib/supabase/server";

export async function incrementView(slug: string) {
  const supabase = await createClient();
  
  // Note: We are now passing 'project_slug' to match the SQL function argument
  const { error } = await supabase.rpc('increment_view', { 
    project_slug: slug 
  });

  if (error) console.error("🔴 View Error:", error);
  // else console.log(`✅ View +1 for ${slug}`);
}

export async function incrementClick(slug: string) {
  const supabase = await createClient();
  
  const { error } = await supabase.rpc('increment_click', { 
    project_slug: slug 
  });

  if (error) console.error("🔴 Click Error:", error);
  // else console.log(`✅ Click +1 for ${slug}`);
}