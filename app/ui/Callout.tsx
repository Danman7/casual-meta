export const Callout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-2 border-foreground bg-surface rounded p-2 mb-4 shadow-md">
      {children}
    </div>
  )
}
