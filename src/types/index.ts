export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  aboutParagraphs: string[];
  avatarUrl: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnailUrl: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string | null;
  gpa?: string;
  description?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
