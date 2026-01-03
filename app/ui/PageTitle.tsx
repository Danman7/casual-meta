export const PageTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="border-l border-primary pl-4 mb-8 font-serif">
    {subtitle && <div>{subtitle}</div>}
    <h1 className="text-4xl font-semibold">{title}</h1>
  </div>
)
