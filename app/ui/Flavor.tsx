export const Flavor: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={`text-sm opacity-75 italic ${className}`}>{children}</p>
)
