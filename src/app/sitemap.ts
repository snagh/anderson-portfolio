import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://andersonjose.dev.br';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-11-15T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/?lang=en`,
          pt: `${baseUrl}/?lang=pt`,
        },
      },
    },
  ];
}
