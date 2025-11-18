import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import Link from 'next/link'

import '@/app/globals.css'
import { Nav } from '@/app/ui/Nav'
import { SectionNav } from '@/app/ui/SectionNav'

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

        <div className="flex grow">
          <aside className="hidden md:block w-64 px-6 py-6 sticky top-0 h-screen overflow-y-auto">
            <SectionNav />
          </aside>

          <main className="flex-1 px-6 pb-6 overflow-x-hidden">{children}</main>
        </div>

        <footer className="inset-shadow-sm text-center md:flex md:justify-between p-8 gap-4 shadow-md bg-surface z-10">
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
