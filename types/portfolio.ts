export type ProjectHierarchy = 'featured' | 'secondary' | 'learning';

export type ProjectOwnership = 'solo' | 'collaborative' | 'learning-clone';

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  iconIdentifier: 'github' | 'linkedin' | 'email' | 'external' | 'folder';
}

export interface Profile {
  name: string;
  title: string;
  role: string;
  location: string;
  email: string;
  positioningStatement: string;
  shortBio: string;
  githubUrl: string;
  linkedinUrl: string;
  youtubeUrl?: string;
  socialLinks: SocialLink[];
  resume: {
    folderUrl: string;
    label: string;
    note: string;
  };
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  cgpa: string;
  maxCgpa: string;
  location: string;
  highlights?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  type: 'Internship' | 'Full-time' | 'Leadership Role' | 'Virtual Experience';
  location?: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  contributions?: string[];
  leadershipScope?: {
    teamsLed?: number;
    membersCoordinated?: number;
    title?: string;
    details?: string[];
  };
  relatedProjectIds?: string[];
  /** Distinguishes assigned curriculum scope from personally verified implementation */
  assignedScopeNotice?: string;
}

export interface LeadershipExperience {
  id: string;
  title: string;
  organizationOrEvent: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  impactHighlights: string[];
  relatedExperienceId?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: string[];
}

export interface ArchitectureLayer {
  layer: string;
  component: string;
  description: string;
}

export interface DevelopmentPhase {
  phase: string;
  title: string;
  description: string;
}

export interface EngineeringChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  features?: string[];
  architectureFlow?: string;
  architectureLayers?: ArchitectureLayer[];
  techStackCategorized?: { category: string; technologies: string[] }[];
  developmentPhases?: DevelopmentPhase[];
  engineeringChallenges?: EngineeringChallenge[];
  results?: string[];
  lessonsLearned?: string[];
  keyFeatures?: string[];
  architectureHighlights?: string[];
  resultsOrImpact?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  hierarchy: ProjectHierarchy;
  ownership: ProjectOwnership;
  description: string;
  shortDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  year?: string;
  /** Explicit verification status of personal contributions (e.g. for collaborative projects) */
  contributionStatus: 'verified' | 'pending_user_input';
  personalContribution?: string;
  isLearningClone?: boolean;
  learningContext?: string;
  relatedExperienceId?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface UIUXProject {
  id: string;
  title: string;
  category: string;
  figmaUrl: string;
  description: string;
  focusAreas: string[];
  tools: string[];
  relatedExperienceId?: string;
  relatedProjectName?: string;
}

export interface BlogPostContentSection {
  heading: string;
  paragraphs: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: BlogPostContentSection[];
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  experience: Experience[];
  leadership: LeadershipExperience[];
  skills: SkillCategory[];
  projects: Project[];
  uiuxDesigns: UIUXProject[];
}

