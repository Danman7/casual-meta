import type { Metadata } from 'next'
import { Noto_Sans, Noto_Serif } from 'next/font/google'
import Link from 'next/link'

import '@/app/globals.css'
import { Nav } from '@/app/ui/Nav'
import { SectionNav } from '@/app/ui/SectionNav'
import { TableOfContents } from '@/app/ui/TableOfContents'

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

        <div className="flex gap-4 px-6 py-12 relative">
          <aside className="w-56 shrink-0 hidden md:block ">
            <div className="sticky top-6 overflow-x-visible overflow-y-auto max-h-[calc(100vh-5rem)] px-6">
              <SectionNav />
            </div>
          </aside>

          <main className="grow">
            <article className="max-w-3xl mx-auto">{children}</article>
          </main>

          <aside className="w-56 shrink-0 hidden xl:block ">
            <div className="sticky top-6 overflow-x-visible overflow-y-auto max-h-[calc(100vh-5rem)] px-6">
              <TableOfContents />
            </div>
          </aside>
        </div>

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
