export const PageTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) => (
  <div className="my-12 space-y-6">
    <h1 className="text-5xl font-bold">{title}</h1>

    {subtitle && <div className="text-lg text-light">{subtitle}</div>}
  </div>
)
