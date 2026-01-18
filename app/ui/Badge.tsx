type BadgeProps = React.PropsWithChildren<{
  primary?: boolean
}>

export const Badge: React.FC<BadgeProps> = ({ children, primary }) => (
  <span
    className={`inline-flex items-center flex-wrap gap-1 border text-sm px-1 rounded ${
      primary
        ? 'border-primary-text/20 text-primary-text'
        : 'border-foreground/20 text-foreground'
    }`}
  >
    {children}
  </span>
)
