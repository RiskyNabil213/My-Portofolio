export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageColor: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}