export const Callout: React.FC<
  React.PropsWithChildren<{
    title?: React.ReactNode
    className?: string
  }>
> = ({ children, title, className }) => (
  <div
    className={`bg-surface rounded overflow-hidden shadow-sm my-4 ${className}`}
    role="note"
    aria-label={title ? title.toString() : undefined}
  >
    {title && (
      <div className="bg-primary-surface text-primary-text px-4 py-2">
        {title}
      </div>
    )}
    <div className="p-4 space-y-4">{children}</div>
  </div>
)
