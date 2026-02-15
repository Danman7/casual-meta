import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import Link from 'next/link'

import '@/app/globals.css'

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
    <html lang="en" className="h-full bg-background text-foreground">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${notoSerif.variable} antialiased h-full flex flex-col font-serif selection:bg-primary selection:text-background`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-surface focus:text-foreground focus:px-3 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>

        <div className="grow">{children}</div>

        <footer className="inset-shadow-sm text-center sm:flex sm:justify-between px-6 py-4 gap-4 shadow-md bg-surface z-10">
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
