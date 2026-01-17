export const PageTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="border-l-4 border-primary pl-4 font-serif space-y-1">
    {subtitle && <p className="font-light">{subtitle}</p>}
    <h1 className="text-4xl md:text-6xl font-semibold md:font-display">
      {title}
    </h1>
  </div>
)
