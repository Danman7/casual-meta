export const Badge: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <span
    className={`inline-flex items-center gap-1 border-2 font-semibold rounded px-1 ${className}`}
  >
    {children}
  </span>
)
