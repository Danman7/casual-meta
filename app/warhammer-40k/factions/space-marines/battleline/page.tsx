import Image from 'next/image'
import Link from 'next/link'
import { GiBolterGun } from 'react-icons/gi'
import { GrGroup } from 'react-icons/gr'
import { TiStarburst } from 'react-icons/ti'

import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { WH40K_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { PageTitle } from '@/app/ui/PageTitle'
import { generatePageMetadata } from '@/lib/metadata'

const pageTitle = 'Space Marines Battleline Units'

export const navTitle = 'Battleline Units'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${pageTitle}`,
  'An overview of the Space Marines battleline infantry units.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title={pageTitle} subtitle="" />

      <p>
        Battleline is a keyword appearing on some datasheets. A key trait of
        battleline infantry is that you can take twice as many units of the same
        name, compared to other units, depending on the mission you are playing.
        So for example if you are playing Only War or Crusade you will be
        allowed to take up to six battleline units of the same name instead of
        three.
      </p>

      <p className="font-bold">
        All units here have Infantry, Battleline and Imperium keywords on their
        datasheets.
      </p>

      <p className="text-sm text-light">
        If you are unfamiliar with the profile abbreviations check out our{' '}
        <Link href="/profile-archetypes">Profile Archetypes</Link> page.
      </p>

      <h2>Intercessor Squad</h2>
      <Image
        src={intercessors}
        alt="A squad of Space Marine Intercessors advancing."
      />

      <Callout>
        <div className="flex gap-2 items-center">
          <GiBolterGun />
          <div>
            <strong>Profile</strong>: MEQ with OC2
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <GrGroup />
          <div>
            <strong>Cost</strong>: 80 pts. for 5 or 160 pts. for 10 models
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <TiStarburst />
          Grenades, Tacticus
        </div>
      </Callout>

      <p>
        This is the principle Adeptus Astartes battleline squad. A sergeant
        leads either four or nine Primaris marines armed with bolt rifles.
      </p>
    </article>
  )
}
