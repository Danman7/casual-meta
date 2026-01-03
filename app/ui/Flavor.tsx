export const Flavor: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={`text-sm italic my-0 ${className}`}>{children}</p>
)
