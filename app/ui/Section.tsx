export const Section: React.FC<
  React.PropsWithChildren<{ title?: string; id?: string; className?: string }>
> = ({ children, title, id, className }) => (
  <section className={`mt-8 space-y-4 ${className}`}>
    {title && (
      <h2 id={id} className="text-3xl font-serif">
        {title}
      </h2>
    )}

    {children}
  </section>
)
