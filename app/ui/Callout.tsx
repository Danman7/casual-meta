export const Callout: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div
    className={`bg-surface p-4 rounded shadow-sm my-4 border-l-4 border-primary  ${className}`}
  >
    {children}
  </div>
)
