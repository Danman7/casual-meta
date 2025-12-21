export const PageWrapper: React.FC<
  React.PropsWithChildren<{ title: string }>
> = ({ children, title }) => (
  <article className="max-w-3xl mx-auto">
    <h1 className="text-6xl font-light tracking-tight my-10">{title}</h1>

    {children}
  </article>
)
