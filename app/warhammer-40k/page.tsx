import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GiDeathSkull } from 'react-icons/gi'

import wh40kTitle from '@/app/assets/wh40k/wh40k-title.webp'
import { PageTitle } from '@/app/ui/PageTitle'
import { WH40K_BASE_URL } from '@/app/warhammer-40k/constants'

export const metadata: Metadata = {
  title: 'Warhammer 40k | Casual Meta',
  description: 'In the grim darkness of the far future, there is only war.',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle
        title="Warhammer 40k"
        subtitle="In the grim darkness of the far future, there is only war."
      />

      <p>
        The{' '}
        <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf">
          Core Rulebook
        </Link>{' '}
        describes Warhammer 40,000 as a tabletop war game in which players
        command armies of Citadel miniatures and attempt to defeat their
        opponent through a mixture of skill, tactics and luck.
      </p>

      <Image
        src={wh40kTitle}
        alt="A small detachment of Space Marines"
        preload
      />

      <p>
        That very rulebook should be the primary source of information regarding
        Warhammer 40k’s rules as they tend to periodically change. Furthermore,
        the table-top nature of the game tends to bring about disputes about how
        a situation is to be resolved. The latter argument is a central cause
        for the detailed instructions that accompany each and every Warhammer
        40k rule, data sheet or ability.
      </p>

      <div className="text-lg text-center my-8 space-y-4">
        <p>We will try to:</p>
        <ul role="list" className="text-left space-y-2">
          <li className="flex items-center gap-4">
            <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
            <span>Shed the lore.</span>
          </li>
          <li className="flex items-center gap-4">
            <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
            <span>Simplify the rules.</span>
          </li>
          <li className="flex items-center gap-4">
            <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
            <span>Introduce concepts that may not be in the rulebook.</span>
          </li>
        </ul>
      </div>

      <p>
        As long-time players have accumulated games across multiple codex
        revisions, they have developed ideas that help reduce the complexity of
        the rules and choices. These concepts are spread out over multiple
        forums and wikis. We attempt to gather the most prominent ones in a
        single repository.
      </p>

      <p className="text-lg">
        If you are unfamiliar with the game, consider reading the{' '}
        <Link href={`${WH40K_BASE_URL}/getting-started`}>Getting Started</Link>{' '}
        section.
      </p>

      <Link href={`${WH40K_BASE_URL}/advanced-concepts`}>
        Advanced Concepts
      </Link>
    </article>
  )
}
