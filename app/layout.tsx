import './ui/styles/global.css';

import { type ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import Header from './ui/components/header';
import Footer from './ui/components/footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#da532c" },
    { media: "(prefers-color-scheme: dark)", color: "#da532c" }
  ],
};

export const metadata: Metadata = {
  title: 'Sergey Baranov | Web Developer',
  description: 'Sergey Baranov | Web Developer',
  manifest: '/static/favicon/site.webmanifest',
  icons: {
    icon: '/static/favicon/favicon-32x32.png',
    shortcut: '/static/img/logo.svg',
    apple: '/static/favicon/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/static/favicon/apple-touch-icon.png',
    },
  },
  openGraph: {
    title: 'Sergey Baranov | Web Developer',
    description: 'Sergey Baranov | Web Developer',
    url: 'https://rkkmkkfx.dev',
    siteName: 'rkkmkkfx.dev',
    images: [
      {
        url: 'https://rkkmkkfx.dev/static/img/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sergey Baranov | Web Developer',
    description: 'Sergey Baranov | Web Developer',
    images: ['https://rkkmkkfx.dev/static/img/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
