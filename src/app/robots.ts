import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://andersonjose.dev.br/sitemap.xml',
    host: 'https://andersonjose.dev.br',
  };
}
