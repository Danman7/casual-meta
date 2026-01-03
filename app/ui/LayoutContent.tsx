export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="grow px-4 py-16">
      <article className="max-w-3xl mx-auto">{children}</article>
    </main>
  )
}
