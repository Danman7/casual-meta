export const PageTitle: React.FC<{
  title: string
  tags?: React.ReactNode
  subtitle?: string
}> = ({ title, tags, subtitle }) => (
  <div className="border-l-2 border-primary/30 pl-4 space-y-1">
    {tags && <div className="flex gap-2">{tags}</div>}

    <h1 className="mb-4 text-3xl font-bold text-balance">{title}</h1>

    {subtitle && (
      <p className="text-lg/relaxed -mt-2 mb-5 tracking-tight text-foreground-dim">
        {subtitle}
      </p>
    )}
  </div>
)
