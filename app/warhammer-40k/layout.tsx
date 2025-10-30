import type { ReactNode } from 'react'

export default function WarhammerLayout({ children }: { children: ReactNode }) {
  return <div data-theme="warhammer">{children}</div>
}
