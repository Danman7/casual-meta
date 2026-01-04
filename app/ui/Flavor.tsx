export const Flavor: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={`text-sm font-light ${className}`}>{children}</p>
)
