export const PlayOrSkip: React.FC<{
  pros: React.ReactNode
  cons: React.ReactNode
}> = ({ pros, cons }) => (
  <section>
    <h2 id="play-or-skip">Play or skip</h2>

    <div className="flex-list md:flex-nowrap items-start">
      <div className="md:w-1/2">
        <h3 className="lead flex-center">Yes</h3>
        <div className="divide-y divide-foreground/20 *:py-2">{pros}</div>
      </div>
      <div className="md:w-1/2">
        <h3 className="lead flex-center">Maybe</h3>
        <div className="divide-y divide-foreground/20 *:py-2">{cons}</div>
      </div>
    </div>
  </section>
)
