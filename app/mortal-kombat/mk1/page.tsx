import Image from 'next/image'

import mk1Title from '@/app/assets/mk1/mk1-title.webp'
import { MK_BASE_URL } from '@/app/constants'
import { Flavor } from '@/app/ui/Flavor'
import { PageTitle } from '@/app/ui/PageTitle'
import { SubPageNav } from '@/app/ui/SubPageNav'
import { generatePageMetadata } from '@/lib/metadata'

export const navTitle = 'Mortal Kombat 1'

export const metadata = generatePageMetadata(
  navTitle,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <PageTitle title={navTitle} subtitle="Series title" />

      <p>
        In 2023, NetherRealm Studios released Mortal Kombat 1 (technicaly the
        12th game in the series). It is not exactly a reboot as it follows the
        events of Mortal Kombat 11 where Liu Kang became the god of fire and
        created a new timeline. It is rather a reimagined storyline where the
        familiar characters have different fates and relationships.
      </p>

      <Image
        src={mk1Title}
        alt="Mortal Kombat 1 Title Screen"
        className="shadow-md"
      />

      <Flavor>
        In the following sections we will look at how MK1 is different from
        other titles in the series.
      </Flavor>

      <h2 id="kameos">Kameos</h2>

      <p>A major difference</p>
    </>
  )
}
