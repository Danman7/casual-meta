export const PageTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) => (
  <div className="my-4 space-y-4">
    <h1 className="text-4xl font-bold">{title}</h1>

    {subtitle && <div className="text-lg text-light">{subtitle}</div>}
  </div>
)
