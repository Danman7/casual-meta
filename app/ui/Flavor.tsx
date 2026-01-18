export const Flavor: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={`text-sm text-foreground-dim ${className}`}>{children}</p>
)
