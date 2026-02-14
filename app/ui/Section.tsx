export const Section: React.FC<
  React.PropsWithChildren<{ title?: string; id?: string; className?: string }>
> = ({ children, title, id, className }) => (
  <section className={`mt-10 space-y-4 ${className}`}>
    {title && (
      <div className="mt-16 mb-8 flex justify-center items-center gap-4">
        <div className="dingbat" />

        <h2
          id={id}
          className="scroll-mt-18 text-2xl font-bold tracking-wide text-center"
        >
          {title}
        </h2>

        <div className="dingbat" />
      </div>
    )}

    {children}
  </section>
)
