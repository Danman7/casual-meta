import { Metadata } from 'next'
import Link from 'next/link'

import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Getting Started | Casual Meta',
  description:
    'Introduction to Warhammer 40k for new players, covering basics and first army setup.',
}

export const navOrder = 1

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Getting Started" />

      <p>
        The Getting Started section will help you understand how to play
        Warhammer 40k and set up your first army.
      </p>

      <p>
        The{' '}
        <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf">
          Core Rulebook
        </Link>{' '}
        should be your primary source of truth. The{' '}
        <Link href="https://assets.warhammer-community.com/warhammer40000_core&key_quickstartguide_eng_24.09-s2afk26smk.pdf">
          Quick Start Guide
        </Link>{' '}
        is a very condensed version of the rulebook, that can be used as a
        reference instead. If the latter is too brief, while the former is too
        long, please, use the articles here to get familiar with the game.
      </p>
    </article>
  )
}
