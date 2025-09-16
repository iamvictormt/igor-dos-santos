import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Nothing_You_Could_Do } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nothing-you-could-do",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Igor dos Santos - Músico",
  description: "Site oficial do músico Igor dos Santos. Discografia, agenda de shows, biografia e contato.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-handwriting ${GeistSans.variable} ${GeistMono.variable} ${nothingYouCouldDo.variable}`}>
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
