export const Badge: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <span
    className={`inline-flex items-center font-semibold gap-1 border-2 border-foreground rounded px-1 ${className}`}
  >
    {children}
  </span>
)
