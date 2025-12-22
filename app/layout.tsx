import type { Metadata } from 'next'
import { Noto_Sans, Noto_Serif } from 'next/font/google'
import Link from 'next/link'

import '@/app/globals.css'
import { LayoutContent } from '@/app/ui/LayoutContent'
import { Nav } from '@/app/ui/Nav'

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
  subsets: ['latin'],
})

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Casual Meta',
  description: 'Library of docs for casual players.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${notoSerif.variable} ${notoSans.variable} font-serif antialiased h-full flex flex-col`}
      >
        <Nav />

        <LayoutContent>{children}</LayoutContent>

        <footer className="inset-shadow-sm text-center md:flex md:justify-between px-6 py-4 gap-4 shadow-md bg-surface z-10">
          <div className="mb-2 md:mb-0">
            <Link href="/" className="text-foreground!">
              Casual Meta
            </Link>
          </div>

          <div>
            <a href="mailto:danmanm@gmail.com">danmanm@gmail.com</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
