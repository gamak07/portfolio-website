export type TeamMember = {
  name: string;
  role: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: "web" | "mobile";
  status: "in progress" | "completed" | "paused" | "in review";
  thumbnail_url?: string;
  gallery?: string[];
  demo_url?: string;
  source_code_url?: string;
  tech_stack?: string[];
  frontend?: string | null;
  backend?: string | null;
  database?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  duration?: string | null;
  features?: string[];
  challenges?: string;
  learnings?: string;
  tags?: string[];
  category?: "Personal" | "Freelance" | "Hackhaton";
  team_members?: TeamMember[];
  featured?: boolean;
};
