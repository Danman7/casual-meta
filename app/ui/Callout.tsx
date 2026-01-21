export const Callout: React.FC<
  React.PropsWithChildren<{
    title?: string
    titleId?: string
    className?: string
  }>
> = ({ children, title, titleId, className }) => (
  <div
    className={`bg-surface rounded overflow-hidden shadow-sm my-4 ${className}`}
    role="note"
    aria-labelledby={titleId}
    aria-label={title && !titleId ? title : undefined}
  >
    {title && (
      <div className="bg-primary-surface text-primary-text px-4 py-2">
        {titleId ? (
          <h2 id={titleId} className="text-xl font-medium">
            {title}
          </h2>
        ) : (
          <p className="text-xl">{title}</p>
        )}
      </div>
    )}
    <div className="p-4 space-y-4">{children}</div>
  </div>
)
