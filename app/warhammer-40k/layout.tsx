import type { ReactNode } from 'react'

export default function WarhammerLayout({ children }: { children: ReactNode }) {
  return <div className="font-serif">{children}</div>
}
