export const PageTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) => (
  <div className="flex flex-col justify-center items-center my-16 space-y-8 text-center">
    <h1 className="text-4xl font-bold">{title}</h1>

    {subtitle && <div className="text-lg text-light">{subtitle}</div>}
  </div>
)
