import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Nothing_You_Could_Do } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Suspense } from 'react';
import { PageTransition } from '@/components/page-transition';
import './globals.css';

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nothing-you-could-do',
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
        <meta name="apple-mobile-web-app-title" content="OHomemSo" />
      </head>
      <body className={`font-handwriting ${GeistSans.variable} ${GeistMono.variable} ${nothingYouCouldDo.variable}`}>
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
