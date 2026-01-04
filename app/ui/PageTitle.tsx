export const PageTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="border-l-2 border-primary pl-4 font-serif space-y-1">
    {subtitle && <p className="font-light">{subtitle}</p>}
    <h1 className="text-4xl font-semibold">{title}</h1>
  </div>
)
