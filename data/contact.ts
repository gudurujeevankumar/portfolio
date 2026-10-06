import { portfolioData } from './portfolio';

export interface OpportunityType {
  id: string;
  title: string;
  role: string;
  description: string;
  icon: 'rocket' | 'academic' | 'briefcase' | 'chat';
}

export interface ContactAvailability {
  status: string;
  primaryRole: string;
  location: string;
  employmentType: string;
  startDate: string;
  description: string;
}

export interface WayToConnect {
  id: string;
  platform: string;
  title: string;
  description: string;
  cta: string;
  url: string;
  isExternal: boolean;
}

export interface ContactFaq {
  question: string;
  answer: string;
}

export const opportunityTypes: OpportunityType[] = [
  {
    id: 'projects',
    title: 'Projects',
    role: 'Build together',
    description: 'Full-stack web applications, robust APIs, and interactive frontend interfaces.',
    icon: 'rocket',
  },
  {
    id: 'internships',
    title: 'Internships',
    role: 'Learn & contribute',
    description: 'High-impact software engineering roles with mentorship and active contribution.',
    icon: 'academic',
  },
  {
    id: 'fulltime',
    title: 'Full-Time Roles',
    role: 'Solve real problems',
    description: 'Software Engineer, Full-Stack Developer, Frontend, or Backend roles.',
    icon: 'briefcase',
  },
  {
    id: 'discussions',
    title: 'Tech Discussions',
    role: 'Share ideas',
    description: 'Engineering practices, modern web frameworks, AI tools, and software architecture.',
    icon: 'chat',
  },
];

export const contactAvailability: ContactAvailability = {
  status: 'Open to Opportunities',
  primaryRole: 'Software Engineer / Full-Stack Developer',
  location: 'Bengaluru / Remote',
  employmentType: 'Full-Time',
  startDate: 'Flexible',
  description:
    'Open to full-time Software Engineer roles in Bengaluru or remote, and selective high-impact collaborations.',
};

export const waysToConnect: WayToConnect[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    title: 'LinkedIn',
    description: 'Professional network & opportunities',
    cta: 'Connect →',
    url: portfolioData.profile.linkedinUrl,
    isExternal: true,
  },
  {
    id: 'github',
    platform: 'GitHub',
    title: 'GitHub',
    description: 'Projects, code & contributions',
    cta: 'View Profile →',
    url: portfolioData.profile.githubUrl,
    isExternal: true,
  },
  {
    id: 'email',
    platform: 'Email',
    title: 'Email',
    description: 'Direct communication for opportunities',
    cta: 'Send Email →',
    url: `mailto:${portfolioData.profile.email}`,
    isExternal: false,
  },
  {
    id: 'resume',
    platform: 'Resume',
    title: 'Resume',
    description: 'View my latest resume and experience',
    cta: 'Open Resume →',
    url: portfolioData.profile.resume.folderUrl,
    isExternal: true,
  },
];

export const contactSubjectOptions = [
  'Full-Stack Opportunity / Project Collaboration',
  'Full-Time Software Engineer Role',
  'Frontend / Backend Engineering',
  'Technical Collaboration',
  'Technical Discussion / Mentorship',
  'Other Inquiry',
];

export const contactFaqs: ContactFaq[] = [
  {
    question: 'What kind of opportunities are you open to?',
    answer:
      'I am primarily seeking full-time opportunities as a Software Engineer, Full-Stack Developer, Frontend Developer, or Backend Developer. I am also open to selective high-impact engineering projects and technical collaborations.',
  },
  {
    question: 'Are you open to remote work?',
    answer:
      'Yes, absolutely. While I am based in Bengaluru, India, I have a complete infrastructure for remote engineering and proven experience coordinating distributed developers across teams and projects.',
  },
  {
    question: 'What is the best way to contact you?',
    answer:
      'Direct email at guduru.jeevankumar.dev@gmail.com and messaging on LinkedIn are the fastest and most reliable channels. I review both regularly throughout the week.',
  },
  {
    question: 'How soon do you usually respond?',
    answer:
      'I typically respond within 24 to 48 hours on business days. For time-sensitive recruitment opportunities, feel free to mark the subject accordingly.',
  },
  {
    question: 'Can I discuss a project idea or collaboration?',
    answer:
      'Definitely! Whether you want to bounce ideas around, discuss software architecture, or explore building a real application together, I welcome thoughtful technical conversations.',
  },
];
