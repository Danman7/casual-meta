export const Callout: React.FC<
  React.PropsWithChildren<{
    title?: string
    titleId?: string
    className?: string
  }>
> = ({ children, title, titleId, className }) => (
  <div
    className={`bg-surface rounded overflow-hidden shadow-sm my-4 ${className}`}
  >
    {title && (
      <div className="bg-primary text-surface px-4 py-1">
        {titleId ? (
          <h2 id={titleId} className="font-serif text-2xl">
            {title}
          </h2>
        ) : (
          <div className="text-lg font-semibold font-serif">{title}</div>
        )}
      </div>
    )}
    <div className="p-4">{children}</div>
  </div>
)
