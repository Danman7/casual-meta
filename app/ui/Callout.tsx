export const Callout: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div className={`w-full bg-surface p-4 shadow-md ${className}`}>
    {children}
  </div>
)
