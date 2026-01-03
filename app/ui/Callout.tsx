export const Callout: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div className={`bg-surface rounded p-4 shadow-sm my-4 ${className}`}>
    {children}
  </div>
)
