import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { Suspense } from 'react';
import { PageTransition } from '@/components/page-transition';
import './globals.css';

const handflair = localFont({
  src: '../public/fonts/Handflair.otf',
  variable: '--font-handflair',
  weight: '400',
  style: 'normal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OHomemSó',
  description: 'Site oficial do músico e compositor OHomemSó. Discografia, agenda de shows, biografia e contato.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${handflair.variable}`}>
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
