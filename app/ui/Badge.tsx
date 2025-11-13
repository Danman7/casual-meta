export const Badge: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div
    className={`border-2 border-foreground bg-surface rounded inline px-1 ${className}`}
  >
    {children}
  </div>
)
