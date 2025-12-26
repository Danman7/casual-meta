export const Emphasis: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <p className={`text-lg font-semibold ${className}`}>{children}</p>
)
