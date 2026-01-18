import { FaWrench } from 'react-icons/fa'
import { GiDeathSkull } from 'react-icons/gi'

import { MK_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { PageTitle } from '@/app/ui/PageTitle'
import { Pill } from '@/app/ui/Pill'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 1

export const navTitle = 'Movement'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'How to move around the arenas in Mortal Kombat.',
)

export default async function Page() {
  return (
    <>
      <PageTitle
        title={navTitle}
        subtitle="Movement creates advantage even before attacks are thrown."
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

      <Section title="Forward and backward" id="forward-and-backward">
        <p>
          Pressing left on the d-pad or thumbstick always moves your character
          to the left in MK. Same goes for pressing right and moving right. But{' '}
          <strong>moves</strong> like attacks and specials{' '}
          <strong>are position-sensitive</strong>. This means that if you are to
          the left your opponent, forward is right. If you are to the right -
          forward is left.
        </p>

        <p>
          This is accounted for in the in-game moves lists. They update based on
          your position relative to your foe. But when reading external
          resources you will see <Pill>F3</Pill> which means <em>towards</em>{' '}
          the opponent then press 3.
        </p>
      </Section>
    </>
  )
}
