import type { ReactNode } from 'react'

export interface StripItem {
  label: ReactNode
  value: ReactNode
}

export const Strip: React.FC<{ items: StripItem[] }> = ({ items }) => (
  <dl className="flex-list">
    {items.map((item, index) => (
      <div key={index} className="border-l-4 border-foreground/10 pl-4">
        <dt className="uppercase font-bold">{item.label}</dt>
        <dd>{item.value}</dd>
      </div>
    ))}
  </dl>
)
