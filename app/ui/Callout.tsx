export const Callout: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div className={`bg-surface p-2 rounded-lg shadow-md mt-4 ${className}`}>
    {children}
  </div>
)
