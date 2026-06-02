import Link from 'next/link'

import { mkHref, mkMetadata, mkPage } from '@/app/siteMap'

const page = mkPage('cancelling')

export const metadata = mkMetadata('cancelling')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <h2 id="what-is-a-cancel">What is a cancel?</h2>

        <p>
          Every action has a recovery{' '}
          <Link href={mkHref('anatomyOfAttacks', 'move-phases')}>phase</Link>{' '}
          after execution, where the character returns to a neutral state.
          During the recovery they are unable to act.
        </p>

        <p>
          If you input two moves, one after the other, where the first is
          cancellable, it will finish quicker and the second one will begin
          sooner. This applies to any number of moves, as long as each can be
          cancelled into the next. This is one of the mechanics that enable
          combos.
        </p>

        <p>
          Why isn't the term <em>to chain</em> moves used instead? While
          chaining is correct, it is not exact. The moves are not just chained.
          The span between them is shortened. Also, cancelling extends to
          actions which are not attacks, like dashing and jumping.
        </p>
      </section>
    </>
  )
}
