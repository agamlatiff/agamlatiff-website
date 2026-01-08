
export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string; // Can be HTML string or rich text
  heroImage: string;
  gallery: string[];
  techStack: string[];
  industry: string;
  youtubeId?: string; // ID video YouTube (misal: dQw4w9WgXcQ)
  repoLink?: string;
  liveLink?: string;
  date: string;
  isFeatured?: boolean;
  tags?: string[];
  desc?: Record<string, string>;
}
