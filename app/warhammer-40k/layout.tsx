import type { ReactNode } from 'react'

import { SubNav } from '@/app/ui/SubNav'

export default function WarhammerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="font-serif">
      <SubNav route="\warhammer-40k" />
      {children}
    </div>
  )
}
