export const PageTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="rounded border-l-4 border-primary pl-4">
    <div className="font-serif italic">{subtitle}</div>
    <h1 className="text-5xl font-serif text-light-foreground tracking-tight">
      {title}
    </h1>
  </div>
)
