export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  completionDate: string;
  category: "Frontend" | "Blockchain" | "QA/Research" | "Mobile" | "Backend";
  github?: string;
  demo?: string;
  image?: string;
  achievements?: string[];
  galleryImages?: ProjectGalleryImage[];
  featured?: boolean;
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: {
    technical: string[];
    soft: string[];
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface LogEntry {
  slug: string;
  weekNumber: number;
  weekLabel: string;
  title: string;
  dateRange: string;
  preview: string;
  tasks: string[];
  learnings: string[];
  tags?: string[];
}

export interface LogCollection {
  logs: LogEntry[];
}
