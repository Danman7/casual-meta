import Link from 'next/link'
import { FaWrench } from 'react-icons/fa'
import { GiDeathSkull } from 'react-icons/gi'

import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { PageTitle } from '@/app/ui/PageTitle'
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
      <PageTitle
        title={navTitle}
        subtitle="In fighting games, a cancel is removing the recovery of an action by
          cancelling it into another action."
        tags={
          <>
            <Badge primary>
              <GiDeathSkull /> Mortal Kombat
            </Badge>
            <Badge>
              <FaWrench /> Core Mechanics
            </Badge>
          </>
        }
      />

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
