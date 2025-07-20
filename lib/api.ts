import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export const getProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
};

export const getProjectById = async (id:string) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

    if(error){
      console.error(error)
      notFound()
    }

    return data
};
