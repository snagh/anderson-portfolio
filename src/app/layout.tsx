import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#09090B',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://andersonjose.dev.br'),
  title: {
    default: 'Anderson Martins — Senior Product Engineer & System Architect',
    template: '%s | Anderson Martins',
  },
  description:
    'Architecting end-to-end B2B platforms, applied AI pipelines, and high-precision interfaces—backed by 6+ years of domain expertise in mission-critical healthcare operations.',
  keywords: [
    'Anderson Martins',
    'snagh',
    'System Architect',
    'Senior Product Engineer',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'PostgreSQL RLS',
    'Multi-Tenant SaaS',
    'Applied AI',
    'Gemini API',
    'Docker',
    'Design Engineering',
    'Figma Design Systems',
  ],
  authors: [{ name: 'Anderson Martins', url: 'https://andersonjose.dev.br' }],
  creator: 'Anderson Martins',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    url: 'https://andersonjose.dev.br',
    title: 'Anderson Martins — Senior Product Engineer & System Architect',
    description:
      'Architecting end-to-end B2B platforms, applied AI pipelines, and high-precision interfaces. Domain expertise in mission-critical healthcare operations.',
    siteName: 'Anderson Martins Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anderson Martins — Senior Product Engineer & System Architect',
    description:
      'Architecting end-to-end B2B platforms, applied AI pipelines, and high-precision interfaces.',
    creator: '@snagh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
