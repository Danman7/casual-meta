import { FaAsterisk } from 'react-icons/fa'

export const Section: React.FC<
  React.PropsWithChildren<{ title?: string; id?: string; className?: string }>
> = ({ children, title, id, className }) => (
  <section className={`mt-10 space-y-4 ${className}`}>
    {title && (
      <div className="my-16 flex justify-center items-center gap-4">
        <FaAsterisk focusable="false" className="text-primary text-xs" />

        <h2 id={id} className="section-title">
          {title}
        </h2>

        <FaAsterisk focusable="false" className="text-primary text-xs" />
      </div>
    )}

    {children}
  </section>
)
