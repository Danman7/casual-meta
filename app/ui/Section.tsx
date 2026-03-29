export const Section: React.FC<
  React.PropsWithChildren<{ title?: string; id?: string; className?: string }>
> = ({ children, title, id }) => (
  <section>
    {title && (
      <h2 id={id} className="section-title">
        {title}
      </h2>
    )}

    {children}
  </section>
)
