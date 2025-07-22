import { supabase } from "./supabase";

export const getProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");

 if (error || !data) {
    console.error("Failed to fetch projects", error);
    return []; // Return empty for static generation safety
  }

  return data;
};

export const getProjectById = async (id:string) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

    if (error || !data) {
    console.error("Failed to fetch projects", error);
    return []; // Return empty for static generation safety
  }

    return data
};
