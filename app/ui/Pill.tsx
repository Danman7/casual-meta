export const Pill: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <span
    className={`inline-flex items-center flex-wrap gap-1 border font-semibold rounded-full px-2 ${className}`}
  >
    {children}
  </span>
)
