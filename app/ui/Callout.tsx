export const Callout: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div className={`bg-surface p-4 rounded-lg shadow-md mt-5 ${className}`}>
    {children}
  </div>
)
