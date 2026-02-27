export const Diagram: React.FC<
  React.PropsWithChildren<{ className?: string; description?: string }>
> = ({ children, className, description }) => (
  <div role="group">
    <div
      className={`flex-wrapper p-4 justify-around bg-surface shadow-sm rounded ${className}`}
    >
      {children}
    </div>
    {description && <div className="flavor">{description}</div>}
  </div>
)
