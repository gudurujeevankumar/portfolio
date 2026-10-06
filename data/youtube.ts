export interface YouTubeVideo {
  id: string;
  title: string;
  fullTitle: string;
  duration: string;
  category: string;
  badge?: string;
  technologies: string[];
  thumbnail: string;
}

export interface YouTubeChannelData {
  name: string;
  handle: string;
  channelUrl: string;
  channelId: string;
  avatarLocal: string;
  avatarRemote: string;
  defaultVideoCount: number;
  topics: string[];
}

export const youtubeChannel: YouTubeChannelData = {
  name: 'Jeevan Kumar Guduru',
  handle: '@JeevanKumarGuduru',
  channelUrl: 'https://www.youtube.com/@JeevanKumarGuduru',
  channelId: 'UCx-RHFRP6o_yXIdTbq4r1GQ',
  avatarLocal: '/youtube-avatar.jpg',
  avatarRemote:
    'https://yt3.googleusercontent.com/NFjkyDggLe7gsyTiysNK5T3dXkGgRkWHwzkZF90qU3sGH-9MT61olCwC15oxBNFVGn3V8sPr1g=s900-c-k-c0x00ffffff-no-rj',
  defaultVideoCount: 26,
  topics: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'React Native',
    'VS Code',
    'Git & GitHub',
    'Projects',
    'College Guidance',
    'AP EAPCET',
    'AP ICET',
  ],
};

export const featuredYouTubeVideos: YouTubeVideo[] = [
  {
    id: '8elqoz0zE7k',
    title: 'HTML Full Course in Telugu for Beginners',
    fullTitle: 'HTML Full Course Telugu 🔥 Beginner Friendly | Learn HTML from Scratch | Part 1',
    duration: '1:43:42',
    category: 'Web Fundamentals',
    badge: 'Beginner Friendly',
    technologies: ['HTML5', 'Web Basics', 'CSS'],
    thumbnail: '/thumbnails/8elqoz0zE7k.jpg',
  },
  {
    id: '6bK01Sp8xwo',
    title: 'React Native Setup & Dev Environment',
    fullTitle: 'React Native Project Setup in Telugu | Step-by-Step Guide with Prerequisites & Installation',
    duration: '27:23',
    category: 'Mobile Engineering',
    badge: 'Mobile Setup',
    technologies: ['React Native', 'Android', 'Mobile Dev'],
    thumbnail: '/thumbnails/6bK01Sp8xwo.jpg',
  },
  {
    id: '5aSKz477sRo',
    title: 'VS Code Setup & Essential Extensions',
    fullTitle: 'VS Code Installation & Complete Beginner Guide in Telugu | Mac & Windows',
    duration: '17:50',
    category: 'Developer Tools',
    badge: 'Productivity',
    technologies: ['VS Code', 'Extensions', 'Tooling'],
    thumbnail: '/thumbnails/5aSKz477sRo.jpg',
  },
  {
    id: 'pgStu_DcTeg',
    title: 'Create GitHub Account & Profile README',
    fullTitle: 'How to Create a GitHub Account & Profile README | Complete Beginner Tutorial in Telugu 🚀',
    duration: '14:20',
    category: 'Git & Open Source',
    badge: 'Portfolio Ready',
    technologies: ['Git', 'GitHub', 'Markdown'],
    thumbnail: '/thumbnails/pgStu_DcTeg.jpg',
  },
  {
    id: 'QNZ4iP0gZMI',
    title: 'EAPCET College Predictor (ML System)',
    fullTitle: '🎓 EAPCET/EAMCET College Predictor 2026 | Find Your Best Engineering College Using Machine Learning 🚀',
    duration: '12:15',
    category: 'Engineering Projects',
    badge: 'Machine Learning',
    technologies: ['Machine Learning', 'Python', 'Web App'],
    thumbnail: '/thumbnails/QNZ4iP0gZMI.jpg',
  },
  {
    id: 'Tv9H4e0KSh4',
    title: 'Top 10 MCA Colleges in AP & Guidance',
    fullTitle: '🏆 AP ICET 2026 Top 10 MCA Colleges in Andhra Pradesh | 100% Verified ✅ NAAC',
    duration: '15:40',
    category: 'College Guidance',
    badge: 'AP ICET',
    technologies: ['AP ICET', 'MCA', 'Higher Ed'],
    thumbnail: '/thumbnails/Tv9H4e0KSh4.jpg',
  },
];
