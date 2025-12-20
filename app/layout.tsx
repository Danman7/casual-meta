import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import Link from 'next/link'

import '@/app/globals.css'
import { Nav } from '@/app/ui/Nav'
import { TableOfContents } from '@/app/ui/TableOfContents'

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
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
        className={`${notoSerif.variable} font-serif antialiased h-full flex flex-col`}
      >
        <Nav />

        <main className="mx-auto w-full p-6 grow max-w-3xl">
          <TableOfContents />

          {children}
        </main>

        <footer className="inset-shadow-sm text-center md:flex md:justify-between mt-12 p-8 gap-4 shadow-md bg-surface z-10">
          <div className="mb-2 md:mb-0">
            <Link href="/">Casual Meta</Link>
          </div>

          <div>
            <a href="mailto:danmanm@gmail.com">danmanm@gmail.com</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
