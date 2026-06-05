import type { Metadata } from 'next'

import '@/app/globals.css'
import { siteSections } from '@/app/siteMap'
import { LayoutShell } from '@/app/ui/LayoutShell'
import { NavigationProvider } from '@/app/ui/NavigationProvider'

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
      <body className="text-base leading-relaxed antialiased h-full font-sans selection:bg-primary selection:text-background">
        <NavigationProvider sections={siteSections}>
          <LayoutShell>{children}</LayoutShell>
        </NavigationProvider>
      </body>
    </html>
  )
}
