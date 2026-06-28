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
  title: 'OHomemSó | Música, discografia e shows',
  description:
    'Site oficial do músico e compositor OHomemSó. Ouça lançamentos, acompanhe agenda de shows, videografia, biografia e contato.',
  openGraph: {
    title: 'OHomemSó | Música, discografia e shows',
    description:
      'Site oficial do músico e compositor OHomemSó. Ouça lançamentos, acompanhe agenda de shows, videografia, biografia e contato.',
    siteName: 'OHomemSó',
    locale: 'pt_BR',
    type: 'website',
  },
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${nothingYouCouldDo.variable}`}>
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
