import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Providers from './providers';
import '../styles/globals.css';

// Import Outfit Google Font
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Rentora AI — Premium Relocation & Intelligent Housing Ecosystem',
    template: '%s | Rentora AI',
  },
  description: 'AI-powered housing, relocation, settlement, and community ecosystem for international students, domestic students, professionals, and immigrants.',
  keywords: ['rentals', 'housing', 'relocation', 'AI housing recommendations', 'student housing', 'landlords dashboard', 'community marketplace'],
  authors: [{ name: 'Rentora AI Core Engineering Team' }],
  creator: 'Rentora AI',
  publisher: 'Rentora AI Inc.',
  metadataBase: new URL('https://rentora.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rentora.ai',
    title: 'Rentora AI — Premium Relocation & Intelligent Housing Ecosystem',
    description: 'AI-powered housing, relocation, settlement, and community ecosystem for students, professionals, and immigrants.',
    siteName: 'Rentora AI',
    images: [
      {
        url: '/assets/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Rentora AI Premium Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rentora AI — Premium Relocation & Intelligent Housing Ecosystem',
    description: 'AI-powered housing, relocation, settlement, and community ecosystem.',
    images: ['/assets/og-cover.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#020617] text-[#cbd5e1]">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
