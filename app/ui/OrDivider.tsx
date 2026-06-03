import type { HTMLAttributes } from 'react'

export const OrDivider = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-label="or"
    className={`flex w-full items-center gap-3 ${className ?? ''}`}
    role="separator"
    {...props}
  >
    <span aria-hidden className="h-px flex-1 bg-current opacity-30" />
    <span>OR</span>
    <span aria-hidden className="h-px flex-1 bg-current opacity-30" />
  </div>
)
