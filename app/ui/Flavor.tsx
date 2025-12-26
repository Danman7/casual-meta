export const Flavor: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={`text-sm italic text-light-foreground my-0 ${className}`}>
    {children}
  </p>
)
