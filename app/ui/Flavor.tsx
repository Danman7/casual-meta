export const Flavor: React.FC<
  React.PropsWithChildren<{ className?: string; id?: string }>
> = ({ children, className, id }) => (
  <p id={id} className={`text-sm text-foreground-dim ${className}`}>
    {children}
  </p>
)
