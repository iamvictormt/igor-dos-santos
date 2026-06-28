import type React from 'react';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { Nothing_You_Could_Do } from 'next/font/google';
import { Crimson_Pro } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from 'next-themes';
import { Suspense } from 'react';
import { PageTransition } from '@/components/page-transition';
import { AudioPlayerBar } from '@/components/audio-player-bar';
import './globals.css';

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nothing-you-could-do',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OHomemSó',
  description: 'Site oficial do músico e compositor OHomemSó. Discografia, agenda de shows, biografia e contato.',
  themeColor: '#C41E3A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans ${GeistMono.variable} ${nothingYouCouldDo.variable} ${crimsonPro.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense fallback={null}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </ThemeProvider>
        <AudioPlayerBar />
        <Analytics />
      </body>
    </html>
  );
}
