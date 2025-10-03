
import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - CIMA Animal Health',
    default: 'CIMA Animal Health - A Unified Force in Animal Health',
  },
  description:
    'CIMA Animal Health pioneers AI-powered solutions across veterinary medicine, professional pet products, and animal health services. Elevating care to new heights through innovation, compassion, and expertise.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-gray-50 antialiased',
        dmSans.variable,
        dmMono.variable,
      )}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="CIMA Animal Health Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
