import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Nothing_You_Could_Do } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Suspense } from 'react';
import { PageTransition } from '@/components/page-transition';
import { ScrollProgress } from '@/components/scroll-progress';
import { AppShell } from '@/components/app-shell';
import { PlayerBar } from '@/components/player-bar';
import './globals.css';

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nothing-you-could-do',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OHomemSó',
  description:
    'Site oficial do músico e compositor OHomemSó. Discografia, agenda de shows, biografia e contato.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable} ${nothingYouCouldDo.variable}`}
      >
        <Suspense fallback={null}>
          <ScrollProgress />
          <AppShell>
            <PageTransition>{children}</PageTransition>
            <PlayerBar />
          </AppShell>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
