import Image from 'next/image'

import mk1Title from '@/app/assets/mk1/mk1-title.webp'
import { Flavor } from '@/app/ui/Flavor'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navTitle = 'Mortal Kombat 1'

export const metadata = generatePageMetadata(
  navTitle,
  'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
)

export default async function Page() {
  return (
    <>
      <h1 className="page-title">{navTitle}</h1>
      <Section>
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
          className="shadow-sm"
        />

        <Flavor>
          In the following sections we will look at how MK1 is different from
          other titles in the series.
        </Flavor>
      </Section>

      <Section title="Kameos" id="kameos">
        <p>
          Kameos are probably the most prominent addition to MK1. How can we
          make the game even more technical? How about make the player control
          two characters instead of one? In fact, it's not as complicated as it
          sounds. Most of the time you do control one character, but when
          triggered a second one can come in and help.
        </p>

        <p>
          Every time you play (practice, towers, online etc.) you must choose a
          main character and a Kameo.
        </p>
      </Section>
    </>
  )
}
