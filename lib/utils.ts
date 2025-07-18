export const getPublicImageUrl = (path: string): string => {
  return `https://zhvhapxzzwryyclvqgof.supabase.co/storage/v1/object/public/project-images/${path}`;
};
