import Link from 'next/link'

import { MK_BASE_URL, MK_TITLE } from '@/app/constants'
import { Flavor } from '@/app/ui/Flavor'
import { PageTitle } from '@/app/ui/PageTitle'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 4

export const navTitle = 'Cancelling'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How chaining moves into strings works.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={navTitle} subtitle="Mortal Kombat - Core mechanics" />

      <Section>
        <Flavor>
          This page explains how chaining multiple moves functions in Mortal
          Kombat.
        </Flavor>
      </Section>

      <Section title="What is a cancel?" id="what-is-a-cancel">
        <p>
          As we know, every action has a recovery{' '}
          <Link href={`${MK_BASE_URL}/anatomy-of-an-attack#move-phases`}>
            phase
          </Link>{' '}
          after execution, where the character returns back to neutral state.
          During the recovery they are unable to act.
        </p>

        <p className="font-bold">
          In fighting games, a cancel is removing the recovery of an action by
          cancelling it into another action.
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
