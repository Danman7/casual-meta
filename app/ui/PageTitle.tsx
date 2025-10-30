export const PageTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) => (
  <div className="flex flex-col justify-center items-center my-16 space-y-16 text-center">
    <h1 className="text-4xl font-bold">{title}</h1>

    {subtitle && <h2 className="text-xl">"{subtitle}"</h2>}
  </div>
)
