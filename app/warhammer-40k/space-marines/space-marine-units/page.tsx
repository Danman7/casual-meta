import Image from 'next/image'
import Link from 'next/link'
import { GiBolterGun } from 'react-icons/gi'

import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 11

export const navTitle = 'Space Marines Units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'An overview of the Space Marines battleline infantry units.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <p>
        There are a lot of Space Marine units. To keep the Space Marine faction
        page decluttered, we have separated them here.
      </p>

      <p className="text-sm text-light">
        If you are unfamiliar with the profile abbreviations check out our{' '}
        <Link href={`${WH40K_BASE_URL}/profile-archetypes`}>
          Profile Archetypes
        </Link>{' '}
        page.
      </p>

      <h2>Battleline</h2>

      <p>
        Battleline is a keyword appearing on some datasheets. A key trait of
        battleline infantry is that you can take twice as many units of the same
        name, compared to other units, depending on the mission you are playing.
      </p>

      <h3>Intercessor Squad</h3>
      <Image
        src={intercessors}
        alt="A squad of Space Marine Intercessors advancing."
        className="shadow-md max-h-96 object-cover object-[0%_65%]"
      />

      <Callout>
        <div className="text-base">
          MEQ with OC2 |{' '}
          <span className="text-light">
            Infantry, Battleline, Imperium, Grenades, Tacticus
          </span>
        </div>

        <p>
          80 pts. for 5 models or 160 pts. for 10 models{' '}
          <span className="text-light">
            armed with a bolt pistol, a bolt rifle, and a close combat weapon
          </span>
        </p>

        <p className="mt-2">
          <strong>Objective Secured</strong> a.k.a. Sticky Objectives: Cap an
          objective once it stays yours until the enemy takes it.
        </p>

        <p>
          <strong>Target Elimination</strong> a.k.a. Focus Fire: +2 attacks per
          bolt rifle if all shoot the same target.
        </p>
      </Callout>

      <p>
        This is the principle Adeptus Astartes battleline squad. A sergeant
        leads either four or nine <em>Primaris</em> marines armed with{' '}
        <em>Bolt Rifles</em>. By Primaris marines we understand the "new
        generation" of marine warriors, where <em>Firstborn</em> is the "old"
        one.
      </p>

      <Callout>
        <FlexWrapper className="text-base">
          <GiBolterGun /> <span>Bolt Rifle</span>
        </FlexWrapper>
        <p className="font-bold">
          24"|A2|BS3+|S4|AP-1|D1{' '}
          <span className="text-light">/ Assault, Heavy</span>
        </p>

        <p className="font-bold">
          One in five squad members can attach a Grenade Launcher to their Bolt
          Rifle.
        </p>

        <p>
          The Assault and Heavy keywords give flexibility both for staying put
          or moving forward, playing well with their Sticky Objectives rule. The
          rifle erases GEQ units but also performs respectably against MEQs.
          Even without the Focus Fire and Heavy kicking in, a five-man squad can
          be expected to kill 7-8 GEQ, or 2 MEQ or 1 TEQ per volley. The
          weapon’s effectiveness falls off against Toughness 5+ foes, but the
          grenade launcher in krak mode can help with that.
        </p>
      </Callout>
    </article>
  )
}
