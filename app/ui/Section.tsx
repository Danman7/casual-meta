export const Section: React.FC<
  React.PropsWithChildren<{ title?: string; id?: string; className?: string }>
> = ({ children, title, id, className }) => (
  <section className={`mt-10 space-y-4 ${className}`}>
    {title && (
      <h2
        id={id}
        className="mt-10 mb-4 scroll-mt-18 text-xl font-medium text-balance show-side-nav:scroll-mt-6"
      >
        {title}
      </h2>
    )}

    {children}
  </section>
)
