import type { CSSProperties, ReactNode } from 'react'

export interface StripItem {
  label: ReactNode
  value: ReactNode
  flexBasis?: CSSProperties['flexBasis']
  maxWidth?: CSSProperties['maxWidth']
}

export const Strip: React.FC<{ items: StripItem[] }> = ({ items }) => (
  <dl className="flex-list">
    {items.map((item, index) => (
      <div
        key={index}
        className="min-w-0 border-l-4 border-foreground/10 pl-4"
        style={{ flexBasis: item.flexBasis, maxWidth: item.maxWidth }}
      >
        <dt className="lead">{item.label}</dt>
        <dd>{item.value}</dd>
      </div>
    ))}
  </dl>
)
