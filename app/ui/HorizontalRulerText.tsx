export const HorizontalRulerText: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <div className="my-6 mx-auto flex items-center justify-center gap-6">
    <hr className="flex-1 border-foreground/20 max-w-1/3" />{' '}
    <div className="m-0 shrink-0">{children}</div>{' '}
    <hr className="flex-1 border-foreground/20 max-w-1/3" />{' '}
  </div>
)
