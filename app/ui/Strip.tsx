import type { ReactNode } from 'react'

export interface StripItem {
  label: ReactNode
  value: ReactNode
}

export const Strip: React.FC<{ items: StripItem[] }> = ({ items }) => (
  <dl className="flex flex-wrap overflow-hidden">
    {items.map((item, index) => (
      <div
        key={index}
        className="-mr-px -mb-px min-w-44 basis-44 flex-1 border-r border-b border-foreground/10 p-3 space-y-2"
      >
        <dt className="uppercase font-bold">{item.label}</dt>
        <dd className="space-y-2">{item.value}</dd>
      </div>
    ))}
  </dl>
)
