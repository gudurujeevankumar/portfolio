import { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gudurujeevankumarportfolio.netlify.app';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/work',
    '/experience',
    '/skills',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Work / Project dynamic routes
  const workRoutes = portfolioData.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog dynamic routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
