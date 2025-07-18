import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[{
      protocol: 'https',
      hostname: 'zhvhapxzzwryyclvqgof.supabase.co',
      pathname:'/storage/v1/object/public/project-images/**'
    }]
  }
};

export default nextConfig;
