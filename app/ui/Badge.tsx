export const Badge: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div
    className={`inline-flex items-center gap-1 border-2 border-foreground bg-surface rounded px-1 ${className}`}
  >
    {children}
  </div>
)
