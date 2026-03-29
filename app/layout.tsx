import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'

import {
  HOMM3_BASE_URL,
  HOMM3_TITLE,
  MK_BASE_URL,
  MK_TITLE,
  WH40K_BASE_URL,
  WH40K_TITLE,
} from '@/app/constants'
import '@/app/globals.css'
import { LayoutShell } from '@/app/ui/LayoutShell'
import { NavigationProvider } from '@/app/ui/NavigationProvider'
import { getRoutesFrom } from '@/lib/routes'

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
  const sections = [
    {
      items: getRoutesFrom(HOMM3_BASE_URL),
      title: HOMM3_TITLE,
      rootUrl: HOMM3_BASE_URL,
    },
    {
      items: getRoutesFrom(MK_BASE_URL),
      title: MK_TITLE,
      rootUrl: MK_BASE_URL,
    },
    {
      items: getRoutesFrom(WH40K_BASE_URL),
      title: WH40K_TITLE,
      rootUrl: WH40K_BASE_URL,
    },
  ]

  return (
    <html lang="en" className="h-full bg-background text-foreground">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${notoSerif.variable} leading-[1.6] antialiased h-full font-serif selection:bg-primary selection:text-background`}
      >
        <NavigationProvider sections={sections}>
          <LayoutShell>{children}</LayoutShell>
        </NavigationProvider>
      </body>
    </html>
  )
}
