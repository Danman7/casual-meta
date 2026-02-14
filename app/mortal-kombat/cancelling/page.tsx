import Link from 'next/link'

import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 4

export const navTitle = 'Cancelling'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How chaining moves into strings works.',
)

const mkRoute = createRouteLookup(MK_BASE_URL)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>

      <Section title="What is a cancel?" id="what-is-a-cancel">
        <p>
          Every action has a recovery{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#move-phases`}>
            phase
          </Link>{' '}
          after execution, where the character returns back to neutral state.
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
          chaining is correct it is not exact. The moves are not just chained.
          The span between them is shortened. Also, cancelling extends to
          actions which are not attacks, like dashing and jumping.
        </p>
      </Section>
    </>
  )
}
