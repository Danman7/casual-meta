import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GiDeathSkull } from 'react-icons/gi'

import mk1Title from '@/app/assets/mk1/mk1-title.webp'
import { MK1_BASE_URL } from '@/app/mortal-kombat-1/constants'
import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Mortal Kombat 1 | Casual Meta',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Mortal Kombat 1" />

      <p>
        Mortal Kombat 1 or MK1 is the latest chapter in the long-running,
        celebrated fighting game series. Following its predecessors, it is
        distinguished by gory visuals and fast-paced dueling action.
      </p>

      <Image src={mk1Title} alt="Mortal Kombat 1 Title Screen" preload />

      <p>
        As a fighting game it has both similarities and differences from other
        titles in the genre such as Street Fighter and Tekken, as well as other
        titles in the series. The game has a steep learning cure and takes time
        to grasp. The extensive in-game tutorial does a good job at explaining
        the mechanics, both basic and advanced. However, it lacks some community
        terms, overall strategy and per-character breakdowns.
      </p>

      <div className="text-lg text-center my-8 space-y-4">
        <p>In these pages we will:</p>
        <ul role="list" className="text-left space-y-2">
          <li className="flex items-center gap-4">
            <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
            <span>Focus on Player vs Player (PvP). Ignore the lore.</span>
          </li>
          <li className="flex items-center gap-4">
            <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
            <span>Give you the toolset to learn any character.</span>
          </li>
          <li className="flex items-center gap-4">
            <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
            <span>Prepare you for multiplayer.</span>
          </li>
        </ul>
      </div>

      <p></p>

      <p>
        If you are unfamiliar with the game, consider reading the{' '}
        <Link href={`${MK1_BASE_URL}/getting-started`}>Getting Started</Link>{' '}
        section.
      </p>
    </article>
  )
}
