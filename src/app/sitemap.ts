import type { MetadataRoute } from 'next';
import { caseStudies } from '@/content/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example-portfolio.vercel.app';
  const staticRoutes = ['', '/services', '/case-studies', '/about', '/contact', '/privacy', '/terms'];

  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...caseStudies.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date()
    }))
  ];
}
